import React from 'react';
import { handleImageError, asset } from '../lib/images';

/**
 * Living-legacy split, pull quote and "A Legacy Continued".
 * Shared by the home and history routes.
 */
interface LivingLegacyProps {
  onOpenBooking?: (eventTitle?: string) => void;
}

export default function LivingLegacy({ onOpenBooking }: LivingLegacyProps) {
  return (
    <>
    {/* SECTION 1: LIVING LEGACY & SANCTUARY */}
    <main id="living-legacy" className="w-full max-w-320 mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-20 relative">
      {/* Top Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        <div className="md:col-span-5 flex flex-col justify-center">
          <div className="font-sans text-[12px] uppercase tracking-widest font-semibold text-amber-500/90 mb-3 flex items-center gap-2">
            <span>—</span> OUR LIVING LEGACY
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-amber-50 tracking-tight leading-[1.1] mb-4 capitalize">
            We preserved slow living and{' '}
            <span className="font-serif italic text-[#d9b358] font-normal">royal puppetry</span> long before it became history.
          </h1>
          <p className="font-sans text-[14px] md:text-[16px] text-[#C4C4C4] leading-relaxed font-normal">
            Our master artisans dedicate decades to perfecting the intricate craft of traditional Myanmar marionettes, ensuring every carve and stitch honors the royal legacy.
          </p>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 grid-rows-2 gap-2 h-120 sm:h-150">
          <div className="col-span-1 row-span-2 relative overflow-hidden border border-[#534343]">
            <img
              onError={handleImageError}
              className="w-full h-full object-cover"
              alt="Close-up of an elderly master woodcarver's hands shaping a traditional Myanmar marionette head from dark wood."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaNnhCuc2xurw1LzcHbGexSEyAdJxU0bgq1TAN6LKFLG2_7HEAGvx1gnNkSvSmzQucmYtbLYXoOVQ8UZjzT1jz3s8twYmTpVj1Sx5PdXwIXcttdKrC1xMrlMu2CK6XKbyFHdJIvKIR0JqvP4yNH1KFwZt9KD-bkBV6CVNSoNhnm8I9S2bOVsN9Cfi1Dcju4wj3icwK_Wk40xeoqwzIU0XhZF31F3W8J1CpAY_9nh9FjueGcQoJoEBXMGTOdlPKQ4DpuNBHWmwwUtQkcQ"
            />
          </div>
          <div className="col-span-1 row-span-1 relative overflow-hidden border border-[#534343]">
            <img
              onError={handleImageError}
              className="w-full h-full object-cover"
              alt="Extreme close-up of intricate traditional Myanmar embroidery."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1CmvaSF6b24wwlITA-vpvdUMdRMeaZG0JWS7nc6Z579i9TSRVdfllPJJwSR8uBe-dkA6Z6rFmM7HkJ_BZVE9_Mh2yALWZaxB8qjqQYk_PTeCr9IUgCz7wsigqdopv00sT7d8wFyr6lGXFdgbhaMX7-fbUzJp-pg4fz5pBJTyXTIxqgf3yRJqgnEvTvOhxMyuVmTgiaCSHi8NJD7fLemyLwIPrbSlDUmnllqxcuaBjW6gNBJABAY7XUkPgMEzDNE57oTNud3XXL7Xo7Q"
            />
          </div>
          <div className="col-span-1 row-span-1 relative overflow-hidden border border-[#534343]">
            <img
              onError={handleImageError}
              className="w-full h-full object-cover"
              alt="A full ensemble of exquisite traditional Myanmar marionettes standing on a wooden stage."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5CoFrTbl6ZgL5OGZRojrmzNJ7oW4SrzL42jqyKLWsPNKzt4okvHdaH3NKaYheG49hXvqh9Tv_V3OQiLyDaR-9A6yY2AmsVylrmbrSFHtlP8sy2ddh6gP3f8C1GYiytVhAuVZcrstum2sxesZqA3O-Re3KrQLydLFFqeQkRxOCXzwFQEfWiKT5oCv8t5aYLs4DQNOQzElBIJNN9D0xIJiEeKGdg2CaY4R_skvG2tzZUpR6DYK2t9bAUHcZRFG74Gu2SB5RZyHFjNlylQ"
            />
            <svg
              className="absolute bottom-2 left-2 w-16 h-16 opacity-40 text-amber-400"
              fill="none"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="10" stroke="currentColor" strokeWidth="1" />
              <path d="M25 5 L25 15 M25 35 L25 45 M5 25 L15 25 M35 25 L45 25" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </section>

      {/* Center Quote Section */}
      <section className="mb-20 text-center px-4 md:px-24">
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#d9b358] font-normal text-center my-12 sm:my-16 px-6 max-w-3xl mx-auto leading-relaxed tracking-wide">
          "One day, we set out to create a sanctuary where the ancient magic of Myanmar marionettes could be felt on your own skin."
        </p>
      </section>

      {/* Bottom Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 grid grid-cols-2 gap-2 h-80 sm:h-100">
          <div className="col-span-1 relative overflow-hidden border border-[#534343]">
            <img
              onError={handleImageError}
              className="w-full h-full object-cover"
              alt="A young, apprentice puppeteer delicately holding the wooden control bar of a marionette."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5VFk4qs8wcoUQ-jRtHOXcRR72LlCdySsqu7rtlblNjDtLnYtSGcYu007mMiR90tfsC8W_Itu1FfipyrkYCZiWBUi4xhUzSxwzyNPstIMNS3ljQyt1XKmyc9exnXpkoKAmSRf6SNoTgzunumpxuDnjv_4MDKtOusT2TDQEPdAJXZdR0-b406I3NY6biJLdbUSCKw0mYJZ8KiL46NsgqBgq09VxkgihqLS9KXJz3hftWAXdDqr2GMmm3_vwHAnuRAB2Jm8TXwehn0T-LA"
            />
          </div>
          <div className="col-span-1 relative overflow-hidden border border-[#534343]">
            <img
              onError={handleImageError}
              className="w-full h-full object-cover"
              alt="Two costumed Myanmar marionettes, one red-faced and one green, dancing on a polished wooden stage."
              src={asset('images/legacy-stage.png')}
            />
            <svg
              className="absolute bottom-2 right-2 w-12 h-12 opacity-30 text-amber-400"
              fill="none"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="8" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col justify-center items-start pl-0 md:pl-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-amber-400 tracking-wide mb-3 capitalize">
            A Legacy Continued
          </h2>
          <p className="font-sans text-[14px] md:text-[16px] text-[#C4C4C4] leading-relaxed font-normal mb-8">
            Experience the majesty of a performance that transcends generations. Step into our world and witness stories woven in thread, wood, and shadow.
          </p>
          <button
            onClick={() => onOpenBooking?.('Royal Marionette Showcase')}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-sans text-[12px] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(217,119,6,0.25)] hover:shadow-[0_6px_24px_rgba(217,119,6,0.4)] hover:scale-[1.02] cursor-pointer"
          >
            Explore Our Shows
          </button>
        </div>
      </section>
    </main>
    </>
  );
}
