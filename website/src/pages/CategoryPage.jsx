import { useParams, useNavigate } from 'react-router-dom';
import RadialDendrogram from '../components/RadialDendrogram';
import { treeData } from '../data/treeData';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = treeData.children.find(c => c.id === categoryId);

  if (!category) {
    return (
      <div className="page">
        <p>Category not found.</p>
        <button className="back-btn" onClick={() => navigate('/')}>← Back to Root</button>
      </div>
    );
  }

  const handleNodeClick = (nodeData, depth) => {
    if (depth === 1) {
      navigate(`/category/${categoryId}/${nodeData.id}`);
    } else if (depth >= 2) {
      for (const sub of (category.children || [])) {
        if (sub.id === nodeData.id) {
          navigate(`/category/${categoryId}/${sub.id}`);
          return;
        }
        if (sub.children) {
          const found = sub.children.find(l => l.id === nodeData.id);
          if (found) {
            navigate(`/category/${categoryId}/${sub.id}/${found.id}`);
            return;
          }
        }
      }
    }
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>{category.name.replace(/\n/g, ' ')}</h1>
        <p className="page-subtitle">{(category.children || []).length} sub-categories • Click to explore • Scroll to zoom</p>
      </header>

      <div className="page-breadcrumb">
        <button className="crumb" onClick={() => navigate('/')}>Root</button>
        <span className="crumb-sep">›</span>
        <span className="crumb active">{category.name.replace(/\n/g, ' ')}</span>
      </div>

      {/* Navigation Controls */}
      <div className="page-nav-controls">
        <button className="nav-ctrl-btn" onClick={() => navigate(-1)} title="Go Back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          <span>Back</span>
        </button>
        <button className="nav-ctrl-btn" onClick={() => navigate('/')} title="Go to Root">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
          <span>Home</span>
        </button>
        <button className="nav-ctrl-btn" onClick={() => navigate(1)} title="Go Forward">
          <span>Next</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      <div className="graph-area">
        <RadialDendrogram
          data={category}
          onNodeClick={handleNodeClick}
          width={Math.min(window.innerWidth - 40, window.innerHeight - 220, 1100)}
          height={Math.min(window.innerWidth - 40, window.innerHeight - 220, 1100)}
        />
      </div>
    </div>
  );
}
