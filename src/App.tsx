/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export default function App() {
  return (
    <div id="mainframe-app" className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Mouse-scrub controlled background video */}
      <BackgroundVideo />

      {/* Fixed top navigation bar */}
      <Navbar />

      {/* Main hero section */}
      <Hero />
    </div>
  );
}
