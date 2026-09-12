import { useState, useCallback, lazy, Suspense } from 'react';
import { ThemeProvider } from './components/layout/ThemeProvider';
import { Navigation } from './components/layout/Navigation';
import { CustomCursor } from './components/ui/CustomCursor';
import { Loader } from './components/sections/Loader';
import { ScrollProgress } from './components/sections/ScrollProgress';
import { EasterEgg } from './components/ui/EasterEgg';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Terminal } from './components/sections/Terminal';
import { WhatIBuild } from './components/sections/WhatIBuild';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { useLenis } from './hooks/useLenis';
import { useScrollRestore } from './hooks/useScrollRestore';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import './styles/global.css';
import './styles/mixins.css';

// Lazy load below-the-fold sections for better initial bundle
const Skills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const Journey = lazy(() => import('./components/sections/Journey').then(m => ({ default: m.Journey })));
const GitHub = lazy(() => import('./components/sections/GitHub').then(m => ({ default: m.GitHub })));

function LazyFallback() {
  return <div style={{ minHeight: '40vh' }} aria-hidden="true" />;
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  useLenis();
  const restoreScroll = useScrollRestore();

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
    restoreScroll();
  }, [restoreScroll]);

  return (
    <>
      {isLoading && <Loader onComplete={handleLoadComplete} />}
      <CustomCursor />
      <ScrollProgress />
      <EasterEgg />
      <ErrorBoundary>
        <Navigation />
      </ErrorBoundary>

      <main>
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LazyFallback />}>
            <Skills />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LazyFallback />}>
            <Projects />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LazyFallback />}>
            <Journey />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LazyFallback />}>
            <GitHub />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Terminal />
        </ErrorBoundary>
        <ErrorBoundary>
          <WhatIBuild />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </main>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
