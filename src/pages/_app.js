import '@/styles/globals.css';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import 'animate.css/animate.min.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/all';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('wowjs').then(wowModule => {
      new wowModule.WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: false,
      }).init();
    });
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    if (typeof window !== 'undefined') {
      if (!window._scrollSmoother) {
        window._scrollSmoother = ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 0.6,
          effects: false,
        });
      }
    }
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="bg-white">
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

// Footer will be added here later 