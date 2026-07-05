import { useParams, useNavigate } from 'react-router-dom';
import RadialDendrogram from '../components/RadialDendrogram';
import { treeData } from '../data/treeData';

const MONTHS = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function SubCategoryPage() {
  const { categoryId, subId } = useParams();
  const navigate = useNavigate();

  const category = treeData.children.find(c => c.id === categoryId);
  const subCategory = category?.children?.find(s => s.id === subId);

  if (!category || !subCategory) {
    return (
      <div className="page">
        <p>Not found.</p>
        <button className="back-btn" onClick={() => navigate('/')}>← Back to Root</button>
      </div>
    );
  }

  const children = subCategory.children || [];
  const allLeaves = children.every(c => !c.children || c.children.length === 0);

  const handleNodeClick = (nodeData, depth) => {
    navigate(`/category/${categoryId}/${subId}/${nodeData.id}`);
  };

  const itemCount = children.length;
  const itemLabel = itemCount === 1 ? '1 item' : `${itemCount} items`;

  return (
    <div className="page">
      <header className="page-header">
        <h1>{subCategory.name.replace(/\n/g, ' ')}</h1>
        <p className="page-subtitle">{itemLabel} • {allLeaves ? 'Papers' : 'Click to view papers • Scroll to zoom'}</p>
      </header>

      <div className="page-breadcrumb">
        <button className="crumb" onClick={() => navigate('/')}>Root</button>
        <span className="crumb-sep">›</span>
        <button className="crumb" onClick={() => navigate(`/category/${categoryId}`)}>
          {category.name.replace(/\n/g, ' ')}
        </button>
        <span className="crumb-sep">›</span>
        <span className="crumb active">{subCategory.name.replace(/\n/g, ' ')}</span>
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

      {/* If all children are leaves (papers), show as card list */}
      {allLeaves ? (
        <div className="papers-list">
          {children.map((paper) => (
            <div key={paper.id} className="paper-card">
              <div className="paper-info">
                <div className="paper-title">{paper.name}</div>
                <div className="paper-meta">
                  {paper.year && (
                    <span className="paper-year">
                      {paper.month ? `${MONTHS[paper.month]} ` : ''}{paper.year}
                    </span>
                  )}
                </div>
              </div>
              {paper.url && (
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paper-open-btn-sm"
                >
                  Open ↗
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="graph-area">
          <RadialDendrogram
            data={subCategory}
            onNodeClick={handleNodeClick}
            width={Math.min(window.innerWidth - 40, window.innerHeight - 220, 1100)}
            height={Math.min(window.innerWidth - 40, window.innerHeight - 220, 1100)}
          />
        </div>
      )}
    </div>
  );
}
