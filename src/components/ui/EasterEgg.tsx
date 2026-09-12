import { useEffect, useState } from 'react';
import './EasterEgg.css';

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export function EasterEgg() {
  const [activated, setActivated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let index = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI[index]) {
        index++;
        if (index === KONAMI.length) {
          setActivated(true);
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 4000);
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!activated) return null;

  return (
    <div className={`easter-egg ${showMessage ? 'easter-egg--show' : ''}`}>
      <div className="easter-egg__text mono">
        $ ./azhan --secret
      </div>
      <div className="easter-egg__message mono">
        &gt; Azhan found the Konami code. Achievement unlocked! 🏆
      </div>
    </div>
  );
}
