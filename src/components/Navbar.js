import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const router = useRouter();
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const isActive = (path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  };

  // Works 상세 페이지인지 확인
  const isWorkDetailPage = router.pathname.startsWith('/works/') && router.pathname !== '/works';

  useEffect(() => {
    // ScrambleTextPlugin CDN 동적 import
    const loadScramble = async () => {
      if (!gsap.plugins.ScrambleTextPlugin) {
        await import('gsap/ScrambleTextPlugin');
      }
      gsap.to('#scramble-title', {
        duration: 2,
        scrambleText: {
          text: 'ANNE SONG',
          chars: 'upperCase',
          revealDelay: 0.5,
        },
        ease: 'power1.inOut',
      });
    };
    loadScramble();
  }, []);

  // bounce 애니메이션 함수
  const handleMouseEnter = (ref) => {
    if (ref.current) {
      gsap.to(ref.current, {
        keyframes: [
          { scale: 1.12, y: -6, duration: 0.18, ease: 'power2.out' },
          { scale: 0.98, y: 2, duration: 0.12, ease: 'power2.in' },
          { scale: 1, y: 0, duration: 0.18, ease: 'bounce.out' },
        ]
      });
    }
  };
  const handleMouseLeave = (ref) => {
    if (ref.current) {
      gsap.to(ref.current, { scale: 1, y: 0, duration: 0.18, ease: 'power2.out' });
    }
  };

  return (
    <section className={`${(router.pathname === '/about') ? 'bg-black text-white' : (["/works/3","/works/4","/works/5","/works/6"].includes(router.asPath) ? 'bg-white text-black' : 'bg-[#F9F4EB] text-black')} bg-opacity-90 w-full fixed top-0 left-0 z-50 backdrop-blur-sm`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className={`text-2xl font-bold tracking-wider ${(router.pathname === '/about') ? 'text-white' : (["/works/3","/works/4","/works/5","/works/6"].includes(router.asPath) ? 'text-black' : 'text-black')}`}>
            <span id="scramble-title">ANNE SONG</span>
          </Link>
          <nav className={`hidden md:flex items-center space-x-8 text-base font-medium absolute left-1/2 transform -translate-x-1/2 h-16 ${(router.pathname === '/about') ? 'text-[#F9F4EB]' : (['/works/3','/works/4','/works/5','/works/6'].includes(router.asPath) ? 'text-black' : '')}`}>
            {/*
            <Link 
              href="/about" 
              ref={aboutRef}
              className={`px-4 py-2 rounded-[30px] transition-all duration-200 ${
                router.pathname === '/about' ? 'border-2 border-[#F9F4EB]' : ''
              } ${
                router.pathname === '/about' && isActive('/about')
                  ? 'bg-[#F9F4EB] text-black'
                  : router.pathname === '/about'
                    ? 'bg-transparent text-[#F9F4EB] hover:bg-[#F9F4EB] hover:text-black'
                    : isActive('/about')
                      ? 'bg-black text-white'
                      : 'text-black hover:text-gray-600'
              }`}
              onMouseEnter={() => handleMouseEnter(aboutRef)}
              onMouseLeave={() => handleMouseLeave(aboutRef)}
            >
              ABOUT
            </Link>
            */}
            <Link 
              href="/works" 
              ref={worksRef}
              className={`px-4 py-2 rounded-[30px] transition-all duration-200 ${
                router.pathname === '/about' ? 'border-2 border-[#F9F4EB]' : ''
              } ${
                router.pathname === '/about' && isActive('/works')
                  ? 'bg-[#F9F4EB] text-black'
                  : router.pathname === '/about'
                    ? 'bg-transparent text-[#F9F4EB] hover:bg-[#F9F4EB] hover:text-black'
                    : isActive('/works')
                      ? 'bg-black text-white'
                      : 'text-black hover:text-gray-600'
              }`}
              onMouseEnter={() => handleMouseEnter(worksRef)}
              onMouseLeave={() => handleMouseLeave(worksRef)}
            >
              WORKS
            </Link>
            {/*
            <Link 
              href="/blog" 
              className={`px-4 py-2 rounded-[30px] transition-all duration-200 ${
                isActive('/blog') 
                  ? 'bg-[#B8FF65] text-black' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              BLOG
            </Link>
            */}
            <Link 
              href="/contact" 
              ref={contactRef}
              className={`px-4 py-2 rounded-[30px] transition-all duration-200 ${
                router.pathname === '/about' ? 'border-2 border-[#F9F4EB]' : ''
              } ${
                router.pathname === '/about' && isActive('/contact')
                  ? 'bg-[#F9F4EB] text-black'
                  : router.pathname === '/about'
                    ? 'bg-transparent text-[#F9F4EB] hover:bg-[#F9F4EB] hover:text-black'
                    : isActive('/contact')
                      ? 'bg-black text-white'
                      : 'text-black hover:text-gray-600'
              }`}
              onMouseEnter={() => handleMouseEnter(contactRef)}
              onMouseLeave={() => handleMouseLeave(contactRef)}
            >
              CONTACT
            </Link>
          </nav>
          <button className={`md:hidden ${router.pathname === '/about' ? 'text-white' : 'text-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 