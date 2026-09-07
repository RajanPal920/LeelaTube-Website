export default function Logo({ variant = 'color', height = 48, className = '' }) {
  if (variant === 'white') {
    return (
      <div
        className={`site-logo-wrap site-logo-wrap--white ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: '#ffffff',
          padding: '8px 16px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.18)',
        }}
      >
        <img
          src="/logo-sideways.png"
          alt="Leela Tubes Private Limited"
          style={{ height: `${height}px`, width: 'auto', objectFit: 'contain', display: 'block' }}
        />
      </div>
    );
  }

  return (
    <img
      src="/logo-sideways.png"
      alt="Leela Tubes Private Limited"
      className={`site-logo ${className}`}
      style={{ height: `${height}px`, width: 'auto', objectFit: 'contain', display: 'block' }}
    />
  );
}
