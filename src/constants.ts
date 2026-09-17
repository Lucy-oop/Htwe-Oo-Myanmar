import { asset } from './lib/images';

/**
 * The two hero clips, scrubbed by cursor position and never played through, so
 * each must start head-on at t=0 and reach a full turn on its final frame.
 * `left` is the clip shown when the cursor sits right of centre, and vice
 * versa — the keys name the cursor side, not the direction of the turn.
 *
 * Served from public/ rather than a remote host: seeking is the entire
 * animation here, and a cross-origin video can stall on every seek. The
 * Supabase copies these replace stopped resolving. asset() resolves them
 * against the Vite base so they survive the /Htweoo/ subpath on Pages.
 */
export const VIDEO_ASSETS = {
  left: asset('videos/hero/left.mp4'),
  right: asset('videos/hero/right.mp4'),
};

// Local gallery assets — files live in public/images/ and are served from /images/
// encodeURI (not encodeURIComponent) escapes the spaces but leaves the commas literal;
// Vite's static middleware does not resolve %2C and falls through to index.html.
const GALLERY_FILENAMES: string[] = [
  'ChatGPT Image Aug 31, 2026, 10_47_25 AM.png',
  'ChatGPT Image Aug 31, 2026, 10_51_39 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_03_10 AM.png',
  'ChatGPT Image Aug 31, 2026, 10_58_16 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_00_38 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_05_16 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_41_55 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_42_01 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_47_20 AM.png',
  'ChatGPT Image Aug 31, 2026, 11_47_33 AM.png',
];

export const GALLERY_IMAGES: string[] = GALLERY_FILENAMES.map((name) =>
  encodeURI(asset(`images/${name}`))
);

export const SYMBOLS = ['8', '$', '^^', '%', '/'];

export const EASE_BEZIER: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function buildLayout(count: number, cols: number): number[][] {
  const rows: number[][] = [];
  let imgIdx = 0;
  let r = 0;
  while (imgIdx < count) {
    const row = new Array(cols).fill(-1);
    const a = (r * 2 + (r % 2)) % cols;
    row[a] = imgIdx;
    imgIdx++;

    if (r % 3 === 0 && imgIdx < count) {
      let b = (a + 2) % cols;
      if (b === a) {
        b = (a + 1) % cols;
      }
      row[b] = imgIdx;
      imgIdx++;
    }
    rows.push(row);
    r++;
  }
  return rows;
}
