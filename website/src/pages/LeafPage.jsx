import { useParams, useNavigate } from 'react-router-dom';
import { treeData } from '../data/treeData';

const MONTHS = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function LeafPage() {
  const { categoryId, subId, leafId } = useParams();
  const navigate = useNavigate();

  const category = treeData.children.find(c => c.id === categoryId);
  const subCategory = category?.children?.find(s => s.id === subId);
  const leaf = subCategory?.children?.find(l => l.id === leafId);

  if (!category || !subCategory || !leaf) {
    return (
      <div className="page">
        <p>Not found.</p>
        <button className="back-btn" onClick={() => navigate('/')}>← Back to Root</button>
      </div>
    );
  }

  const hasChildren = leaf.children && leaf.children.length > 0;

  return (
    <div className="page">
      <header className="page-header">
        <h1>{leaf.name.replace(/\n/g, ' ')}</h1>
        <p className="page-subtitle">
          {hasChildren ? `${leaf.children.length} papers` : 'Paper'}
        </p>
      </header>

      <div className="page-breadcrumb">
        <button className="crumb" onClick={() => navigate('/')}>Root</button>
        <span className="crumb-sep">›</span>
        <button className="crumb" onClick={() => navigate(`/category/${categoryId}`)}>
          {category.name.replace(/\n/g, ' ')}
        </button>
        <span className="crumb-sep">›</span>
        <button className="crumb" onClick={() => navigate(`/category/${categoryId}/${subId}`)}>
          {subCategory.name.replace(/\n/g, ' ')}
        </button>
        <span className="crumb-sep">›</span>
        <span className="crumb active">{leaf.name.replace(/\n/g, ' ')}</span>
      </div>

      <div className="papers-list">
        {/* If the leaf itself is a paper (has url, no children) */}
        {!hasChildren && leaf.url && (
          <div className="paper-card-large">
            <div className="paper-icon">📄</div>
            <div className="paper-title-large">{leaf.name}</div>
            <div className="paper-meta-large">
              {leaf.year && (
                <span className="paper-date">
                  {leaf.month ? `${MONTHS[leaf.month]} ` : ''}{leaf.year}
                </span>
              )}
            </div>
            <a
              href={leaf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-open-btn"
            >
              Open Paper ↗
            </a>
          </div>
        )}

        {/* If the leaf has children (multiple papers) */}
        {hasChildren && leaf.children.map((paper) => (
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
                onClick={(e) => e.stopPropagation()}
              >
                Open ↗
              </a>
            )}
          </div>
        ))}
      </div>

      <button className="back-btn" onClick={() => navigate(`/category/${categoryId}/${subId}`)}>
        ← Back to {subCategory.name.replace(/\n/g, ' ')}
      </button>
    </div>
  );
}
