import { useNavigate } from 'react-router-dom';
import RadialDendrogram from '../components/RadialDendrogram';
import { treeData } from '../data/treeData';

export default function RootPage() {
  const navigate = useNavigate();

  const handleNodeClick = (nodeData, depth) => {
    if (depth === 1) {
      navigate(`/category/${nodeData.id}`);
    } else if (depth === 2) {
      const parent = treeData.children.find(c =>
        c.children && c.children.some(sub => sub.id === nodeData.id)
      );
      if (parent) {
        navigate(`/category/${parent.id}/${nodeData.id}`);
      }
    } else if (depth >= 3) {
      let categoryId = null;
      let subId = null;
      for (const cat of treeData.children) {
        if (!cat.children) continue;
        for (const sub of cat.children) {
          if (!sub.children) continue;
          const found = sub.children.find(l => l.id === nodeData.id);
          if (found) {
            categoryId = cat.id;
            subId = sub.id;
            break;
          }
        }
        if (categoryId) break;
      }
      if (categoryId && subId) {
        navigate(`/category/${categoryId}/${subId}/${nodeData.id}`);
      }
    }
  };

  return (
    <div className="page home-page">
      <header className="page-header animate-fade-in">
        <h1><span className="gradient-text">Transformer Ecosystem</span></h1>
        <p className="page-subtitle">Interactive Knowledge Graph • Click nodes to explore • Scroll to zoom • Drag to pan</p>
      </header>

      <div className="graph-area">
        <RadialDendrogram
          data={treeData}
          onNodeClick={handleNodeClick}
          width={Math.min(window.innerWidth - 40, window.innerHeight - 160, 1200)}
          height={Math.min(window.innerWidth - 40, window.innerHeight - 160, 1200)}
        />
      </div>
    </div>
  );
}
