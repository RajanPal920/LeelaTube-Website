import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '48px 24px' }}>
      <div>
        <p style={{ fontSize: '6rem', fontWeight: 900, color: 'var(--light-gray)', lineHeight: 1 }}>404</p>
        <h1 className="display-md" style={{ margin: '16px 0 12px' }}>Page Not Found</h1>
        <p className="body-lg" style={{ marginBottom: '32px' }}>The page you're looking for doesn't exist or has been moved.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn--primary">Return to Home →</Link>
          <Link to="/products" className="btn btn--outline-green">View Products</Link>
        </div>
      </div>
    </div>
  );
}
