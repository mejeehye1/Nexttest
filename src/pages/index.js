import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/all';
import ServiceSection from '../components/ServiceSection';
import WorksPreview from '../components/WorksPreview';

export default function Home() {
  const stats = [
    { number: 8240, label: "Hours of Works" },
    { number: 315, label: "Projects Done" },
    { number: 250, label: "Satisfied Customers" },
    { number: 32, label: "Awards Winning" }
  ];

  const featuredWorks = [
    {
      id: 1,
      title: "Adidas",
      category: "E-Commerce Website",
      year: "2024",
      image: "https://picsum.photos/seed/adidas/400/300"
    },
    {
      id: 2,
      title: "WWF",
      category: "Custom Website Development",
      year: "2023",
      image: "https://picsum.photos/seed/wwf/400/300"
    }
  ];

  const worksProjects = [
    { id: 3, title: 'Ovitz', category: 'Front-End Development', year: '2024', imgSrc: '/images/ov_thumbnail.JPG' },
    { id: 4, title: 'Editorial', category: 'Social Media Integration', year: '2023', imgSrc: '/images/ifact.webp' },
    { id: 5, title: 'Pharmaceutical design', category: 'Website Optimization', year: '2022', imgSrc: '/images/up/fe_6.webp' },
    { id: 6, title: 'Banner design', category: 'Online Promotion design, Webdesign', year: '2022', imgSrc: '/images/dgms.jpg' },
    { id: 2, title: 'Todo List', category: 'Custom Website Development', year: '2025', imgSrc: '#' },
  ];

  const heroImgRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const movingTextRef = useRef(null);
  const suitcaseImgRef = useRef(null);

  useEffect(() => {
    const heroImg = heroImgRef.current;
    if (heroImg) {
      heroImg.style.transform = 'rotate(15deg)';
    }
  }, []);

  useEffect(() => {
    const heroImg = heroImgRef.current;
    if (heroImg) {
      if (isHovered) {
        heroImg.style.transform = 'rotate(0deg)';
      } else {
        heroImg.style.transform = 'rotate(15deg)';
      }
    }
  }, [isHovered]);

  useEffect(() => {
    if (movingTextRef.current) {
      gsap.to(movingTextRef.current, {
        x: 100,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollSmoother);
    if (typeof window !== 'undefined') {
      if (!window._scrollSmoother) {
        window._scrollSmoother = ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 1.2,
          effects: true,
        });
      }
    }
    gsap.from('.fade-in', {
      scrollTrigger: {
        trigger: '.fade-in',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power4.out',
    });
  }, []);

  useEffect(() => {
    // GSAP wordDelimiter 효과
    gsap.set('.word', { opacity: 0, y: 30 });
    gsap.to('.word', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      delay: 0.3,
    });
  }, []);

  useEffect(() => {
    // suitcase shake 효과
    if (typeof window !== 'undefined' && window.gsap && suitcaseImgRef.current) {
      window.gsap.to(suitcaseImgRef.current, {
        x: '+=10',
        rotation: 3,
        yoyo: true,
        repeat: 5,
        duration: 0.08,
        ease: 'power1.inOut',
        onComplete: () => {
          window.gsap.to(suitcaseImgRef.current, { x: 0, rotation: 0, duration: 0.1 });
        }
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content" className="bg-[#f4f3ed] text-black">
          {/* Hero Section */}
          <section className="w-full flex justify-center bg-[#f4f3ed] relative">
            <div className="max-w-screen-xl w-full px-12 grid grid-cols-11 items-center min-h-screen gap-6 relative">
              {/* 왼쪽 6: 텍스트 */}
              <div className="col-span-6 z-10 flex flex-col justify-center items-start">
                <h1 className="text-[4rem] font-bold mb-4 flex flex-wrap gap-x-2">
                  {`Hi, I'm a visual designer on a journey.`.split(' ').map((word, idx) => (
                    <span key={idx} className="word inline-block">{word}</span>
                  ))}
                </h1>
                <p className="text-gray-700 mb-6">안녕하세요:) 애나입니다. 저는 그래픽 디자이너로 5년 이상의 
                  실무 경험을 쌓아왔으며, UX 중심의 사고방식으로 
                  사용자에게 직관적이고 설득력 있는 시각 경험을 
                  제공하는 디자인을 추구합니다. 또한, 브랜드의 가치를 시각적으로 풀어내는것을 
                    좋아해요! 프리랜서와 인하우스 디자이너로 일하며 
                    다양한 업종의 브랜드를 경험했고, 제품의 특성과 
                    고객의 니즈를 깊이 이해한 후, 시각적으로 
                    효과적인 솔루션을 설계하는 데 집중해 왔습니다.
</p>
                {/* 필요시 추가 텍스트 이곳에 */}
              </div>
              {/* 오른쪽 5: suitcase 이미지 */}
              <div className="col-span-5 flex justify-center items-center relative">
                <img
                  ref={suitcaseImgRef}
                  src="/images/suitcase.png"
                  alt="Suitcase"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Skills Section */}
          {/* Works Preview Section */}
          <WorksPreview projects={worksProjects} />
        </div>
      </div>
      <Footer />
    </>
  )
} 