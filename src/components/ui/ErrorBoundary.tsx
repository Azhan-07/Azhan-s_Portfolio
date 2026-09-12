import { Component, type ReactNode } from 'react';
import { siteConfig } from '../../data/site';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

function RegionFallback() {
  const reload = () => window.location.reload();

  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: '#050505',
        color: '#f0f0f0',
        fontFamily: 'Inter, sans-serif',
        padding: 24,
        boxSizing: 'border-box',
      }}
    >
      <div>
        <p
          style={{
            fontSize: 12,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#a855f7',
            margin: '0 0 12px',
          }}
        >
          Something went wrong
        </p>
        <h1 style={{ fontSize: 28, margin: '0 0 8px', fontWeight: 700 }}>
          {siteConfig.author}
        </h1>
        <p style={{ color: '#888888', fontSize: 14, margin: '0 0 28px' }}>
          This section could not load on your device.
        </p>
        <button
          onClick={reload}
          style={{
            background: '#a855f7',
            border: 0,
            color: '#fff',
            padding: '14px 28px',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 600,
            fontFamily: 'inherit',
          }}
        >
          Reload page
        </button>
      </div>
    </div>
  );
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error('[ErrorBoundary] Render error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <RegionFallback />;
    }
    return this.props.children;
  }
}