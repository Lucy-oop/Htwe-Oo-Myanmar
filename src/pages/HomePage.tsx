import React, { useEffect, useRef } from 'react';
import CustomCursor from '../components/CustomCursor';
import VideoBackground from '../components/VideoBackground';
import HeroTitle from '../components/HeroTitle';
import GalleryGrid from '../components/GalleryGrid';
import ContentSections from '../components/ContentSections';
import { useBooking } from '../components/SiteLayout';

export default function HomePage() {
  const spacerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const { openBooking } = useBooking();

  useEffect(() => {
    let animationFrameId: number;

    const mainCanvas = document.getElementById('main-canvas');
    const heroTitle = document.getElementById('hero-title');

    const updateLoop = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const vh = window.innerHeight;

      // Update dynamic spacer height
      if (innerRef.current && spacerRef.current) {
        const wrapScrollHeight = innerRef.current.scrollHeight;
        const maxScroll = Math.max(0, wrapScrollHeight - vh);
        // The gallery starts moving as soon as the panel has finished rising.
        const galleryEnd = vh + maxScroll;
        const heroScrollTotal = galleryEnd + 2 * vh;
        spacerRef.current.style.height = `${heroScrollTotal}px`;

        // SCROLL PHASES
        if (scrollY <= vh) {
          // PHASE 1: Hero Phase (0 to 100vh)
          // Black panel slides up from 100vh to 0.
          const panelY = Math.max(0, vh - scrollY);
          if (panelRef.current) {
            panelRef.current.style.transform = `translate3d(0, ${panelY}px, 0)`;
          }
          if (innerRef.current) {
            innerRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }

          if (mainCanvas) mainCanvas.style.visibility = 'visible';
          if (heroTitle) heroTitle.style.visibility = 'visible';
        } else if (scrollY <= galleryEnd) {
          // PHASE 2: Gallery Phase
          // Panel is fixed at top, inner wrapper translates upwards, bringing
          // the grid into frame.
          if (panelRef.current) {
            panelRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
          const innerY = -(scrollY - vh);
          if (innerRef.current) {
            innerRef.current.style.transform = `translate3d(0, ${innerY}px, 0)`;
          }

          if (mainCanvas) mainCanvas.style.visibility = 'hidden';
          if (heroTitle) heroTitle.style.visibility = 'hidden';
        } else if (scrollY <= heroScrollTotal) {
          // OUTRO PHASE: inner wrapper stays pinned at maximum scroll
          if (panelRef.current) {
            panelRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
          if (innerRef.current) {
            innerRef.current.style.transform = `translate3d(0, -${maxScroll}px, 0)`;
          }

          if (mainCanvas) mainCanvas.style.visibility = 'hidden';
          if (heroTitle) heroTitle.style.visibility = 'hidden';
        } else {
          // Past hero section into main content
          if (panelRef.current) {
            panelRef.current.style.transform = `translate3d(0, -${scrollY - heroScrollTotal}px, 0)`;
          }

          if (mainCanvas) mainCanvas.style.visibility = 'hidden';
          if (heroTitle) heroTitle.style.visibility = 'hidden';
        }

        // CARDS SCALE IN/OUT PER-FRAME
        const cards = document.querySelectorAll<HTMLElement>('.bp-card');
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          if (rect.bottom <= 0 || rect.top >= vh) {
            card.style.transform = 'scale(0)';
          } else {
            const enter = Math.min(1, (vh - rect.top) / (vh * 0.6));
            const exit = Math.min(1, rect.bottom / (vh * 0.4));
            const scale = Math.max(0, Math.min(1, Math.min(enter, exit)));
            card.style.transform = `scale(${scale})`;
          }
        });
      }

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Hero-only cursor; it self-hides past the hero scroll range. */}
      <CustomCursor />

      {/* SECTION 1 & 2: HERO & BLACK PANEL GALLERY CONTAINER */}
      <div
        ref={spacerRef}
        id="scroll-spacer"
        className="relative select-none"
        style={{ height: '500vh' }}
      >
        <VideoBackground />
        <HeroTitle />
        <GalleryGrid panelRef={panelRef} innerRef={innerRef} />
      </div>

      {/* SECTION 3: FULL LANDING PAGE MAIN CONTENT */}
      <div id="main-content-section" className="relative z-30 w-full">
        <ContentSections onOpenBooking={openBooking} />
      </div>
    </>
  );
}
