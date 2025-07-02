"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';

const projects = [
  // {
  //   id: 2, 
  //   title: 'Todo List, Weather app', 
  //   category: 'JS/React', 
  //   year: '2025',
  //   imgSrc: 'https://picsum.photos/seed/wwf/400/500' 
  // },
  { 
    id: 3, 
    title: 'Ovitz', 
    category: 'Poster, Brochure, Website', 
    year: '2024',
    imgSrc: '/images/ov_thumbnail.JPG' 
  },
  { 
    id: 4, 
    title: 'Editorial', 
    category: 'Print,Poster,Editorial design', 
    year: '2021~',
    imgSrc: '/images/ifact.webp' 
  },
  { 
    id: 5, 
    title: 'Pharmaceutical design', 
    category: 'Branding, Packaging, Website', 
    year: '2022',
    imgSrc: '/images/UP/fe_6.webp' 
  },
  { 
    id: 6, 
    title: 'Banner Design', 
    category: 'Promotion design', 
    year: '2021-2024',
    imgSrc: '/images/tarot_thumb.jpg' 
  },
];

export default function Works() {
  const scrambleRef = useRef(null);
  const titleRefs = useRef([]);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.SplitText && window.ScrambleTextPlugin) {
      const split = new window.SplitText(scrambleRef.current, { type: 'chars' });
      window.gsap.from(split.chars, {
        duration: 1.2,
        opacity: 0,
        y: 80,
        stagger: 0.04,
        ease: 'back.out(2)'
      });
      window.gsap.to(scrambleRef.current, {
        duration: 0.5,
        scrambleText: {
          text: 'Works',
          chars: 'lowerCase',
          revealDelay: 0.2,
          tweenLength: true
        },
        delay: 1.2,
        ease: 'power1.inOut'
      });
      titleRefs.current.forEach((el, idx) => {
        if (el) {
          window.gsap.to(el, {
            duration: 1.2,
            scrambleText: {
              text: projects[idx].title,
              chars: 'lowerCase',
              revealDelay: 0.2,
              tweenLength: true
            },
            delay: 1.5 + idx * 0.2,
            ease: 'power1.inOut'
          });
        }
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
      </Head>
      <div className="bg-[#f4f3ed] text-black">
        {/* Hero Section */}
        <section className="flex h-[400px] flex-col items-center justify-center text-center pt-32">
          <div className="relative z-10 px-4">
            <h1
              ref={scrambleRef}
              className="text-black text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-4"
              style={{ minHeight: '1em' }}
            >
              Works
            </h1>
          </div>
        </section>

        {/* Works Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Featured Works 소개 카드 삭제됨 */}
              {projects.map((project, index) => (
                <div key={project.id}>
                  {/* 카드(이미지+내용) */}
                  <div className="bg-[#232323] rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Link href={index === 2 ? '/works/5' : `/works/${project.id}`}>
                        <div className="overflow-hidden aspect-square">
                          <img 
                            src={project.imgSrc} 
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* 카드 바깥, 아래쪽에 title 표시 */}
                  <div
                    className="mt-2 text-left text-black text-[22px] font-bold px-2 mb-24"
                  >
                    {project.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
} 