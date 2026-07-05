import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';

const CATEGORY_COLORS = [
  '#ff6b9d', '#b44dff', '#00d4ff', '#4dff91', '#ffd24d',
  '#ff8c43', '#45aaf2', '#a78bfa', '#34d399', '#fb923c',
  '#f472b6', '#22d3ee', '#6ee7b7', '#fbbf24', '#c084fc'
];

function getCategoryIdx(node) {
  let current = node;
  while (current.parent && current.parent.parent) {
    current = current.parent;
  }
  if (!current.parent) return 0;
  return current.parent.children.indexOf(current);
}

function getCategoryColor(node) {
  return CATEGORY_COLORS[getCategoryIdx(node) % CATEGORY_COLORS.length];
}

export default function RadialDendrogram({ data, onNodeClick, width = 900, height = 900 }) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const zoomRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = useCallback(() => {
    if (!svgRef.current || !zoomRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.transition().duration(300).call(zoomRef.current.scaleBy, 1.4);
  }, []);

  const handleZoomOut = useCallback(() => {
    if (!svgRef.current || !zoomRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.transition().duration(300).call(zoomRef.current.scaleBy, 0.7);
  }, []);

  const handleReset = useCallback(() => {
    if (!svgRef.current || !zoomRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.transition().duration(400).call(zoomRef.current.transform, d3.zoomIdentity);
  }, []);

  const renderDendrogram = useCallback(() => {
    if (!svgRef.current || !data) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const vbSize = 2000;
    svg.attr("viewBox", `0 0 ${vbSize} ${vbSize}`);

    const radius = vbSize / 2 - 200;

    const root = d3.hierarchy(data);

    const cluster = d3.cluster()
      .size([360, radius])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2.5) / a.depth);

    cluster(root);

    const defs = svg.append("defs");

    const ringGlow = defs.append("filter").attr("id", "ring-glow-d");
    ringGlow.append("feGaussianBlur").attr("stdDeviation", "4").attr("result", "blur");
    ringGlow.append("feMerge").selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"]).join("feMergeNode").attr("in", d => d);

    const nodeGlow = defs.append("filter").attr("id", "node-glow-d");
    nodeGlow.append("feGaussianBlur").attr("stdDeviation", "6").attr("result", "blur");
    nodeGlow.append("feMerge").selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"]).join("feMergeNode").attr("in", d => d);

    const cx = vbSize / 2;
    const cy = vbSize / 2;
    const g = svg.append("g")
      .attr("transform", `translate(${cx},${cy})`);

    g.append("circle")
      .attr("r", radius + 15)
      .attr("fill", "none")
      .attr("stroke", "rgba(70, 130, 255, 0.3)")
      .attr("stroke-width", 2.5)
      .attr("filter", "url(#ring-glow-d)")
      .attr("opacity", 0)
      .transition().duration(1200).delay(400)
      .attr("opacity", 1);

    const maxDepth = root.height;
    for (let i = 1; i <= maxDepth; i++) {
      g.append("circle")
        .attr("r", (radius / maxDepth) * i)
        .attr("fill", "none")
        .attr("stroke", "rgba(100, 150, 255, 0.06)")
        .attr("stroke-width", 0.8)
        .attr("stroke-dasharray", "3,8")
        .attr("opacity", 0)
        .transition().duration(800).delay(600 + i * 100)
        .attr("opacity", 1);
    }

    const linkGen = d3.linkRadial()
      .angle(d => d.x * Math.PI / 180)
      .radius(d => d.y);

    g.selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", d => getCategoryColor(d.target))
      .attr("stroke-opacity", 0)
      .attr("stroke-width", d => Math.max(0.5, 2.5 - d.target.depth * 0.5))
      .attr("d", linkGen)
      .transition()
      .duration(1000)
      .delay((d, i) => 200 + i * 1.2)
      .attr("stroke-opacity", d => d.target.depth === 1 ? 0.55 : 0.18);

    // Edge number badges
    const depth1Children = root.children || [];
    depth1Children.forEach((child, idx) => {
      const angle = (child.x - 90) * Math.PI / 180;
      const badgeDist = child.y * 0.42;
      const bx = Math.cos(angle) * badgeDist;
      const by = Math.sin(angle) * badgeDist;
      const color = getCategoryColor(child);

      const badge = g.append("g")
        .attr("transform", `translate(${bx},${by})`)
        .attr("opacity", 0);

      badge.transition()
        .duration(500)
        .delay(800 + idx * 60)
        .attr("opacity", 1);

      badge.append("circle")
        .attr("r", 14)
        .attr("fill", `${color}20`)
        .attr("stroke", color)
        .attr("stroke-width", 1.8)
        .attr("stroke-opacity", 0.8);

      badge.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.38em")
        .attr("font-size", "11px")
        .attr("font-weight", "700")
        .attr("fill", color)
        .attr("font-family", "'JetBrains Mono', monospace")
        .text(idx + 1);
    });

    // Nodes
    const allNodes = root.descendants();
    const nodeGroup = g.selectAll(".node")
      .data(allNodes)
      .join("g")
      .attr("class", "node")
      .attr("transform", d => `rotate(${d.x - 90}) translate(${d.y},0)`)
      .attr("opacity", 0);

    nodeGroup.transition()
      .duration(600)
      .delay((d, i) => 300 + i * 1.5)
      .attr("opacity", 1);

    // Root node
    nodeGroup.filter(d => d.depth === 0)
      .append("circle")
      .attr("r", 14)
      .attr("fill", "rgba(100, 140, 255, 0.15)")
      .attr("stroke", "#6c8fff")
      .attr("stroke-width", 3)
      .attr("filter", "url(#node-glow-d)");

    // Category nodes (depth 1)
    nodeGroup.filter(d => d.depth === 1)
      .append("circle")
      .attr("r", 7)
      .attr("fill", d => getCategoryColor(d))
      .attr("stroke", d => getCategoryColor(d))
      .attr("stroke-width", 2)
      .attr("stroke-opacity", 0.5)
      .attr("filter", "url(#ring-glow-d)");

    // Subcategory nodes (depth 2)
    nodeGroup.filter(d => d.depth === 2)
      .append("circle")
      .attr("r", 5)
      .attr("fill", d => getCategoryColor(d))
      .attr("fill-opacity", 0.7)
      .attr("stroke", "none");

    // Leaf nodes (depth 3+)
    nodeGroup.filter(d => d.depth >= 3)
      .append("circle")
      .attr("r", 3.5)
      .attr("fill", d => getCategoryColor(d))
      .attr("fill-opacity", 0.55)
      .attr("stroke", "none");

    // Category labels (depth 1) — always visible, LARGE
    nodeGroup.filter(d => d.depth === 1)
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.x < 180 ? 16 : -16)
      .attr("text-anchor", d => d.x < 180 ? "start" : "end")
      .attr("transform", d => d.x >= 180 ? "rotate(180)" : null)
      .attr("font-size", "18px")
      .attr("font-weight", "700")
      .attr("fill", d => getCategoryColor(d))
      .attr("font-family", "'Inter', sans-serif")
      .attr("paint-order", "stroke")
      .attr("stroke", "#060612")
      .attr("stroke-width", 6)
      .attr("stroke-linejoin", "round")
      .text(d => d.data.name.replace(/\n/g, " "));

    // Subcategory labels (depth 2) — always visible, MEDIUM
    nodeGroup.filter(d => d.depth === 2)
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.x < 180 ? 12 : -12)
      .attr("text-anchor", d => d.x < 180 ? "start" : "end")
      .attr("transform", d => d.x >= 180 ? "rotate(180)" : null)
      .attr("font-size", "13px")
      .attr("font-weight", "600")
      .attr("fill", "rgba(255,255,255,0.8)")
      .attr("font-family", "'Inter', sans-serif")
      .attr("paint-order", "stroke")
      .attr("stroke", "#060612")
      .attr("stroke-width", 5)
      .attr("stroke-linejoin", "round")
      .text(d => {
        const name = d.data.name.replace(/\n/g, " ");
        return name.length > 30 ? name.slice(0, 28) + "…" : name;
      });

    // Leaf labels (depth 3+) — always visible, small
    nodeGroup.filter(d => d.depth >= 3)
      .append("text")
      .attr("class", "leaf-label")
      .attr("dy", "0.31em")
      .attr("x", d => d.x < 180 ? 8 : -8)
      .attr("text-anchor", d => d.x < 180 ? "start" : "end")
      .attr("transform", d => d.x >= 180 ? "rotate(180)" : null)
      .attr("font-size", "9px")
      .attr("font-weight", "400")
      .attr("fill", "rgba(255,255,255,0.55)")
      .attr("font-family", "'Inter', sans-serif")
      .attr("paint-order", "stroke")
      .attr("stroke", "#060612")
      .attr("stroke-width", 3)
      .attr("stroke-linejoin", "round")
      .text(d => {
        const name = d.data.name.replace(/\n/g, " ");
        return name.length > 35 ? name.slice(0, 33) + "…" : name;
      });

    // Hover interactions
    nodeGroup.filter(d => d.depth > 0)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        const color = getCategoryColor(d);

        d3.select(this).select("circle")
          .transition().duration(150)
          .attr("r", d.depth === 1 ? 10 : d.depth === 2 ? 7 : 6)
          .attr("fill", color)
          .attr("fill-opacity", 1)
          .attr("filter", "url(#node-glow-d)");

        d3.select(this).select("text")
          .transition().duration(150)
          .attr("fill", "#fff")
          .attr("font-size", d.depth === 1 ? "20px" : d.depth === 2 ? "15px" : "11px")
          .attr("font-weight", "700");

        // Show child leaf labels brighter on category/subcategory hover
        if (d.depth <= 2 && d.children) {
          g.selectAll(".node").filter(n => {
            let parent = n;
            while (parent) {
              if (parent === d) return true;
              parent = parent.parent;
            }
            return false;
          }).select(".leaf-label")
            .transition().duration(200)
            .attr("fill", "#fff")
            .attr("font-weight", "600");
        }

        // Highlight path
        g.selectAll(".link")
          .transition().duration(200)
          .attr("stroke-opacity", function(link) {
            let current = d;
            while (current) {
              if (link.target === current) return 0.9;
              current = current.parent;
            }
            if (d.children) {
              let target = link.target;
              while (target) {
                if (target === d) return 0.7;
                target = target.parent;
              }
            }
            return 0.04;
          })
          .attr("stroke-width", function(link) {
            let current = d;
            while (current) {
              if (link.target === current) return 3.5;
              current = current.parent;
            }
            return Math.max(0.3, 1.2 - (link.target?.depth || 0) * 0.3);
          });

        // Tooltip
        const tooltip = d3.select("#dendro-tooltip");
        tooltip
          .style("opacity", 1)
          .style("left", (event.pageX + 14) + "px")
          .style("top", (event.pageY - 10) + "px")
          .html(`
            <strong style="color:${color}">${d.data.name.replace(/\n/g, " ")}</strong>
            ${d.children ? `<br/><span style="opacity:0.6">${d.children.length} children</span>` : ''}
            ${d.data.year ? `<br/><span style="opacity:0.5">${d.data.year}</span>` : ''}
            <br/><span style="opacity:0.4;font-size:10px">Click to explore</span>
          `);
      })
      .on("mouseout", function(event, d) {
        const color = getCategoryColor(d);

        d3.select(this).select("circle")
          .transition().duration(300)
          .attr("r", d.depth === 1 ? 7 : d.depth === 2 ? 5 : 3.5)
          .attr("fill", color)
          .attr("fill-opacity", d.depth === 1 ? 1 : d.depth === 2 ? 0.7 : 0.55)
          .attr("filter", d.depth === 1 ? "url(#ring-glow-d)" : null);

        d3.select(this).select("text")
          .transition().duration(300)
          .attr("fill", d.depth === 1 ? color : d.depth === 2 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.55)")
          .attr("font-size", d.depth === 1 ? "18px" : d.depth === 2 ? "13px" : "9px")
          .attr("font-weight", d.depth === 1 ? "700" : d.depth === 2 ? "600" : "400");

        // Reset leaf labels brightness
        g.selectAll(".leaf-label")
          .transition().duration(300)
          .attr("fill", "rgba(255,255,255,0.55)")
          .attr("font-weight", "400");

        g.selectAll(".link")
          .transition().duration(300)
          .attr("stroke-opacity", link => link.target.depth === 1 ? 0.55 : 0.18)
          .attr("stroke-width", link => Math.max(0.5, 2.5 - link.target.depth * 0.5));

        d3.select("#dendro-tooltip").style("opacity", 0);
      })
      .on("click", function(event, d) {
        event.stopPropagation();

        const [x, y] = [
          d.y * Math.cos((d.x - 90) * Math.PI / 180),
          d.y * Math.sin((d.x - 90) * Math.PI / 180)
        ];
        g.append("circle")
          .attr("cx", x).attr("cy", y)
          .attr("r", 6)
          .attr("fill", "none")
          .attr("stroke", getCategoryColor(d))
          .attr("stroke-width", 2.5)
          .attr("opacity", 1)
          .transition().duration(600)
          .attr("r", 45)
          .attr("opacity", 0)
          .remove();

        if (onNodeClick) onNodeClick(d.data, d.depth);
      });

    // Zoom & Pan — only zoom on scroll, pan only on background drag
    const zoom = d3.zoom()
      .scaleExtent([0.3, 8])
      .filter((event) => {
        // Allow scroll wheel for zoom
        if (event.type === 'wheel') return true;
        // Allow zoom buttons (programmatic)
        if (event.type === 'start' || event.type === 'zoom' || event.type === 'end') return true;
        // Only allow drag on SVG background, not on nodes
        if (event.type === 'mousedown' || event.type === 'touchstart') {
          const target = event.target;
          // If click is on a node element (circle/text inside .node), block pan
          if (target.closest && target.closest('.node')) return false;
          if (target.tagName === 'circle' || target.tagName === 'text') {
            const parent = target.parentElement;
            if (parent && parent.classList && parent.classList.contains('node')) return false;
          }
          return true;
        }
        return true;
      })
      .on("zoom", (event) => {
        g.attr("transform", `translate(${cx + event.transform.x},${cy + event.transform.y}) scale(${event.transform.k})`);
        setZoomLevel(Math.round(event.transform.k * 100));
      });

    zoomRef.current = zoom;
    svg.call(zoom);

  }, [data, width, height, onNodeClick]);

  useEffect(() => {
    renderDendrogram();
  }, [renderDendrogram]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', maxWidth: `${width}px`, margin: '0 auto', overflow: 'visible' }}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        style={{ display: 'block', aspectRatio: '1 / 1', overflow: 'visible' }}
      />

      {/* Zoom Controls */}
      <div className="dendro-controls">
        <button className="dendro-ctrl-btn" onClick={handleZoomIn} title="Zoom In">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <span className="dendro-zoom-level">{zoomLevel}%</span>
        <button className="dendro-ctrl-btn" onClick={handleZoomOut} title="Zoom Out">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <button className="dendro-ctrl-btn" onClick={handleReset} title="Reset View">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        </button>
      </div>

      <div
        id="dendro-tooltip"
        style={{
          position: 'fixed',
          opacity: 0,
          pointerEvents: 'none',
          background: 'rgba(8, 8, 24, 0.95)',
          border: '1px solid rgba(100, 140, 255, 0.3)',
          borderRadius: '10px',
          padding: '10px 14px',
          fontSize: '12px',
          color: '#e8e8f0',
          fontFamily: "'Inter', sans-serif",
          zIndex: 999,
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          transition: 'opacity 0.15s',
          maxWidth: '280px',
          lineHeight: 1.5,
        }}
      />
    </div>
  );
}
