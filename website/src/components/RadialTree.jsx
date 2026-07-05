import { useRef, useEffect, useCallback } from 'react';
import * as d3 from 'd3';

const PALETTE = [
  '#ff6b9d', '#b44dff', '#00d4ff', '#4dff91', '#ffd24d',
  '#ff8c43', '#45aaf2', '#a78bfa', '#34d399', '#fb923c',
  '#f472b6', '#22d3ee', '#6ee7b7', '#fbbf24', '#c084fc'
];

export default function RadialTree({ nodes, onNodeClick, width = 900, height = 900 }) {
  const svgRef = useRef(null);

  const renderTree = useCallback(() => {
    if (!svgRef.current || !nodes || nodes.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) / 2 - 110;

    const n = nodes.length;
    const angleStep = (2 * Math.PI) / n;

    const defs = svg.append("defs");

    // Glow filter
    const glowFilter = defs.append("filter").attr("id", "node-glow-rt");
    glowFilter.append("feGaussianBlur").attr("stdDeviation", "4").attr("result", "blur");
    glowFilter.append("feMerge").selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"]).join("feMergeNode").attr("in", d => d);

    // Soft shadow
    const shadowFilter = defs.append("filter").attr("id", "soft-shadow");
    shadowFilter.append("feGaussianBlur").attr("stdDeviation", "8").attr("result", "blur");
    shadowFilter.append("feColorMatrix").attr("type", "matrix")
      .attr("values", "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.3 0")
      .attr("in", "blur").attr("result", "shadow");
    shadowFilter.append("feMerge").selectAll("feMergeNode")
      .data(["shadow", "SourceGraphic"]).join("feMergeNode").attr("in", d => d);

    // Gradient for each edge
    nodes.forEach((d, i) => {
      const color = PALETTE[i % PALETTE.length];
      const angle = i * angleStep - Math.PI / 2;
      const grad = defs.append("linearGradient")
        .attr("id", `edge-grad-rt-${i}`)
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", cx).attr("y1", cy)
        .attr("x2", cx + Math.cos(angle) * radius)
        .attr("y2", cy + Math.sin(angle) * radius);
      grad.append("stop").attr("offset", "0%").attr("stop-color", color).attr("stop-opacity", 0.02);
      grad.append("stop").attr("offset", "100%").attr("stop-color", color).attr("stop-opacity", 0.5);
    });

    const g = svg.append("g").attr("transform", `translate(${cx},${cy})`);

    // Animated background rings
    [0.3, 0.6, 1.0].forEach((scale, idx) => {
      g.append("circle")
        .attr("r", radius * scale)
        .attr("fill", "none")
        .attr("stroke", "rgba(100, 150, 255, 0.04)")
        .attr("stroke-width", 0.5)
        .attr("stroke-dasharray", "4,8")
        .attr("opacity", 0)
        .transition()
        .duration(800)
        .delay(200 + idx * 150)
        .attr("opacity", 1);
    });

    // Outer boundary ring (animated)
    g.append("circle")
      .attr("r", radius + 30)
      .attr("fill", "none")
      .attr("stroke", "rgba(70, 130, 255, 0.12)")
      .attr("stroke-width", 1)
      .attr("opacity", 0)
      .transition()
      .duration(1200)
      .delay(400)
      .attr("opacity", 1);

    // Center hub with pulse animation
    const hubGroup = g.append("g");

    hubGroup.append("circle")
      .attr("r", 42)
      .attr("fill", "none")
      .attr("stroke", "#6c8fff")
      .attr("stroke-width", 0.5)
      .attr("stroke-opacity", 0)
      .attr("stroke-dasharray", "4,4")
      .transition()
      .duration(1000)
      .delay(300)
      .attr("stroke-opacity", 0.2);

    hubGroup.append("circle")
      .attr("r", 32)
      .attr("fill", "rgba(100, 140, 255, 0.03)")
      .attr("stroke", "#6c8fff")
      .attr("stroke-width", 2)
      .attr("filter", "url(#node-glow-rt)")
      .attr("opacity", 0)
      .transition()
      .duration(600)
      .delay(200)
      .attr("opacity", 1);

    hubGroup.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("fill", "#fff")
      .attr("font-size", "14px")
      .attr("font-weight", "600")
      .attr("font-family", "'Inter', sans-serif")
      .attr("opacity", 0)
      .text("⬡")
      .transition()
      .duration(600)
      .delay(400)
      .attr("opacity", 1);

    // Draw edges with staggered animation
    nodes.forEach((d, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const ex = Math.cos(angle) * radius;
      const ey = Math.sin(angle) * radius;
      const color = PALETTE[i % PALETTE.length];

      // Curved edge (bezier for elegance)
      const midX = Math.cos(angle) * radius * 0.5;
      const midY = Math.sin(angle) * radius * 0.5;
      const ctrl1x = Math.cos(angle + 0.02) * radius * 0.3;
      const ctrl1y = Math.sin(angle + 0.02) * radius * 0.3;
      const ctrl2x = Math.cos(angle - 0.02) * radius * 0.7;
      const ctrl2y = Math.sin(angle - 0.02) * radius * 0.7;

      g.append("path")
        .attr("d", `M0,0 C${ctrl1x},${ctrl1y} ${ctrl2x},${ctrl2y} ${ex},${ey}`)
        .attr("fill", "none")
        .attr("stroke", `url(#edge-grad-rt-${i})`)
        .attr("stroke-width", 1.8)
        .attr("stroke-dasharray", function() { return this.getTotalLength(); })
        .attr("stroke-dashoffset", function() { return this.getTotalLength(); })
        .transition()
        .duration(900)
        .delay(300 + i * 40)
        .ease(d3.easeCubicOut)
        .attr("stroke-dashoffset", 0);

      // Number badge (animated)
      const badgeDist = radius * 0.35;
      const bx = Math.cos(angle) * badgeDist;
      const by = Math.sin(angle) * badgeDist;

      const badge = g.append("g")
        .attr("transform", `translate(${bx},${by})`)
        .attr("opacity", 0);

      badge.transition()
        .duration(400)
        .delay(700 + i * 40)
        .attr("opacity", 1);

      badge.append("circle")
        .attr("r", 10)
        .attr("fill", `${color}15`)
        .attr("stroke", color)
        .attr("stroke-width", 1)
        .attr("stroke-opacity", 0.6);

      badge.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.38em")
        .attr("font-size", "8px")
        .attr("font-weight", "700")
        .attr("fill", color)
        .attr("font-family", "'JetBrains Mono', monospace")
        .text(i + 1);
    });

    // Child nodes (animated entrance)
    const nodeEls = g.selectAll(".child-node")
      .data(nodes)
      .join("g")
      .attr("class", "child-node")
      .attr("transform", (d, i) => {
        const angle = i * angleStep - Math.PI / 2;
        return `translate(${Math.cos(angle) * radius},${Math.sin(angle) * radius})`;
      })
      .style("cursor", "pointer")
      .attr("opacity", 0);

    // Staggered entrance
    nodeEls.transition()
      .duration(500)
      .delay((d, i) => 500 + i * 50)
      .attr("opacity", 1);

    // Outer glow ring
    nodeEls.append("circle")
      .attr("r", d => d.children ? 28 : 22)
      .attr("fill", "none")
      .attr("stroke", (d, i) => PALETTE[i % PALETTE.length])
      .attr("stroke-width", 0.5)
      .attr("stroke-opacity", 0.15)
      .attr("filter", "url(#node-glow-rt)");

    // Main node circle
    nodeEls.append("circle")
      .attr("class", "node-circle")
      .attr("r", d => d.children ? 20 : 15)
      .attr("fill", (d, i) => `${PALETTE[i % PALETTE.length]}0a`)
      .attr("stroke", (d, i) => PALETTE[i % PALETTE.length])
      .attr("stroke-width", 2)
      .attr("stroke-opacity", 0.85)
      .attr("filter", "url(#soft-shadow)");

    // Inner dot with pulse
    nodeEls.append("circle")
      .attr("class", "inner-dot")
      .attr("r", 3)
      .attr("fill", (d, i) => PALETTE[i % PALETTE.length])
      .attr("opacity", 0.7);

    // Child count badge
    nodeEls.filter(d => d.children && d.children.length > 0)
      .append("g")
      .attr("transform", d => `translate(${d.children ? 14 : 10}, ${d.children ? -14 : -10})`)
      .each(function(d) {
        const el = d3.select(this);
        const parentIdx = nodes.indexOf(d);
        const col = PALETTE[parentIdx % PALETTE.length];
        el.append("circle").attr("r", 8).attr("fill", col).attr("opacity", 0.9);
        el.append("text")
          .attr("text-anchor", "middle")
          .attr("dy", "0.35em")
          .attr("font-size", "7px")
          .attr("font-weight", "700")
          .attr("fill", "#000")
          .attr("font-family", "'JetBrains Mono', monospace")
          .text(d.children.length);
      });

    // Node label
    nodeEls.append("text")
      .attr("y", d => d.children ? 32 : 26)
      .attr("text-anchor", "middle")
      .attr("font-size", d => d.children ? "10px" : "9px")
      .attr("font-weight", d => d.children ? "600" : "500")
      .attr("fill", (d, i) => d.children ? "#fff" : PALETTE[i % PALETTE.length])
      .attr("font-family", "'Inter', system-ui, sans-serif")
      .attr("paint-order", "stroke")
      .attr("stroke", "rgba(6, 6, 18, 0.9)")
      .attr("stroke-width", 3)
      .text(d => {
        const name = d.name.replace(/\n/g, " ");
        return name.length > 22 ? name.slice(0, 20) + "…" : name;
      });

    // Year label
    nodeEls.filter(d => d.year)
      .append("text")
      .attr("y", d => d.children ? 44 : 38)
      .attr("text-anchor", "middle")
      .attr("font-size", "7.5px")
      .attr("fill", "rgba(255,255,255,0.25)")
      .attr("font-family", "'JetBrains Mono', monospace")
      .text(d => d.year);

    // Hover interactions with smooth transitions
    nodeEls.on("mouseover", function(event, d) {
      const i = nodes.indexOf(d);
      const color = PALETTE[i % PALETTE.length];

      d3.select(this).select(".node-circle")
        .transition().duration(150)
        .attr("stroke-width", 3)
        .attr("fill", `${color}20`)
        .attr("r", d.children ? 24 : 19);

      d3.select(this).select(".inner-dot")
        .transition().duration(150)
        .attr("r", 5)
        .attr("opacity", 1);

      d3.select(this)
        .transition().duration(200)
        .ease(d3.easeBackOut)
        .attr("transform", () => {
          const angle = i * angleStep - Math.PI / 2;
          const boost = radius + 10;
          return `translate(${Math.cos(angle) * boost},${Math.sin(angle) * boost})`;
        });
    });

    nodeEls.on("mouseout", function(event, d) {
      const i = nodes.indexOf(d);
      const color = PALETTE[i % PALETTE.length];

      d3.select(this).select(".node-circle")
        .transition().duration(250)
        .attr("stroke-width", 2)
        .attr("fill", `${color}0a`)
        .attr("r", d.children ? 20 : 15);

      d3.select(this).select(".inner-dot")
        .transition().duration(250)
        .attr("r", 3)
        .attr("opacity", 0.7);

      d3.select(this)
        .transition().duration(250)
        .ease(d3.easeCubicOut)
        .attr("transform", () => {
          const angle = i * angleStep - Math.PI / 2;
          return `translate(${Math.cos(angle) * radius},${Math.sin(angle) * radius})`;
        });
    });

    // Click with ripple effect
    nodeEls.on("click", function(event, d) {
      event.stopPropagation();
      const i = nodes.indexOf(d);
      const color = PALETTE[i % PALETTE.length];

      // Ripple effect
      const angle = i * angleStep - Math.PI / 2;
      const nx = Math.cos(angle) * radius;
      const ny = Math.sin(angle) * radius;

      g.append("circle")
        .attr("cx", nx).attr("cy", ny)
        .attr("r", 20)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 2)
        .attr("opacity", 0.8)
        .transition().duration(500)
        .attr("r", 50)
        .attr("opacity", 0)
        .remove();

      if (onNodeClick) onNodeClick(d);
    });

  }, [nodes, width, height, onNodeClick]);

  useEffect(() => {
    renderTree();
  }, [renderTree]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      style={{ display: 'block', margin: '0 auto' }}
    />
  );
}
