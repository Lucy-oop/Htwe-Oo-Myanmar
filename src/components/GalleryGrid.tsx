import React, { useMemo, useState, useEffect } from 'react';
import { GALLERY_IMAGES, buildLayout } from '../constants';

interface GalleryGridProps {
  panelRef: React.RefObject<HTMLDivElement | null>;
  innerRef: React.RefObject<HTMLDivElement | null>;
}

export default function GalleryGrid({ panelRef, innerRef }: GalleryGridProps) {
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      if (w < 640) setCols(2);
      else if (w < 1024) setCols(3);
      else setCols(4);
    };

    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const layoutRows = useMemo(() => {
    return buildLayout(GALLERY_IMAGES.length, cols);
  }, [cols]);

  return (
    <div
      ref={panelRef}
      id="black-panel"
      className="fixed inset-0 bg-black z-10 overflow-hidden will-change-transform pointer-events-none"
      style={{
        transform: 'translateY(100vh)',
      }}
    >
      <div
        ref={innerRef}
        id="black-panel-inner"
        className="w-full will-change-transform"
        style={{
          paddingBottom: '30vh',
        }}
      >
        <div
          className="grid gap-4 sm:gap-6 lg:gap-8 w-full max-w-450 mx-auto px-4 sm:px-8"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            paddingTop: 'min(20px, 40vh)',
          }}
        >
          {layoutRows.map((row, rIdx) =>
            row.map((imgIdx, cIdx) => {
              if (imgIdx === -1) {
                return (
                  <div
                    key={`spacer-${rIdx}-${cIdx}`}
                    className="w-full aspect-[2/3] invisible pointer-events-none"
                  />
                );
              }

              const isLeftHalf = cIdx < cols / 2;
              const transformOrigin = isLeftHalf ? 'right bottom' : 'left bottom';

              return (
                <div
                  key={`card-${imgIdx}`}
                  data-card-index={imgIdx}
                  className="bp-card w-full aspect-[2/3] overflow-hidden rounded-xs bg-stone-900 shadow-2xl"
                  style={{
                    transformOrigin,
                    transform: 'scale(0)',
                  }}
                >
                  <img
                    src={GALLERY_IMAGES[imgIdx]}
                    alt={`Archive product item ${imgIdx + 1}`}
                    loading="eager"
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
