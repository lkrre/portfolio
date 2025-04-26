import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PixelEntranceProps {
  children: React.ReactNode;
  triggerKey?: string | number;
  pixelSize?: number;
}

const PixelEntrance: React.FC<PixelEntranceProps> = ({
  children,
  triggerKey,
  pixelSize = 80,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pixelRefs = useRef<HTMLDivElement[]>([]);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [grid, setGrid] = useState({ rows: 0, cols: 0 });

  useEffect(() => {
    const updateGrid = () => {
      if (!containerRef.current) return;
      const { offsetWidth, offsetHeight } = containerRef.current;
      const cols = Math.ceil(offsetWidth / pixelSize);
      const rows = Math.ceil(offsetHeight / pixelSize);
      setGrid({ rows, cols });
    };

    const resizeObserver = new ResizeObserver(updateGrid);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updateGrid();

    return () => {
      resizeObserver.disconnect();
    };
  }, [pixelSize]);

  useEffect(() => {
    if (grid.rows === 0 || grid.cols === 0) return;

    setOverlayVisible(true);
  }, [triggerKey, grid]);

  useEffect(() => {
    if (!overlayVisible) return;

    const timeout = setTimeout(() => {
      pixelRefs.current.forEach((pixel) => {
        if (!pixel) return;
        gsap.killTweensOf(pixel);
        gsap.set(pixel, { opacity: 1 });
        gsap.to(pixel, {
          opacity: 0,
          delay: Math.random() * 0.6,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      gsap.delayedCall(0.7, () => {
        setOverlayVisible(false);
      });
    }, 0);

    return () => clearTimeout(timeout);
  }, [overlayVisible]);

  const createPixels = () => {
    const total = grid.rows * grid.cols;
    pixelRefs.current = [];

    return Array.from({ length: total }, (_, i) => (
      <div
        key={i}
        ref={(el) => {
          if (el) pixelRefs.current[i] = el;
        }}
        className="bg-bg border border-onyx w-full h-full opacity-100"
      />
    ));
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {children}

      {overlayVisible && (
        <div
          key={triggerKey}
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
            gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
          }}
        >
          {createPixels()}
        </div>
      )}
    </div>
  );
};

export default PixelEntrance;
