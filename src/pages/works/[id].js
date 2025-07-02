"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import PortfolioDetail from '../../components/PortfolioDetail';

const projects = [
  { 
    id: 1, 
    title: 'Contemporary Art poster', 
    category: 'E-Commerce Website', 
    year: '2024',
    overview: 'Adidas is a global leader in athletic footwear and sportswear. The project focused on creating a modern, user-friendly e-commerce platform that enhances the shopping experience while maintaining the brand\'s strong identity and heritage.',
    awards: 'Best E-commerce Design',
    client: 'Adidas',
    imgSrc: '/images/museum.jpg'
  },
  { 
    id: 2, 
    title: 'Todo List and Weather app(ㅊ', 
    category: 'Web development(React, JS)', 
    year: '2025',
    overview: '프론트엔드 기초를 다지기 위해 처음부터 끝까지 직접 구현한 프로젝트입니다. 라이브러리 없이 JavaScript만으로 UI 동작과 상태 관리를 구현하면서 DOM 구조와 이벤트 흐름을 깊이 이해할 수 있었습니다.',
    Objective: 'JS/React로 구현',
    client: 'none',
    imgSrc: 'https://picsum.photos/seed/wwf/600/400'
  },
  { 
    id: 3, 
    title: 'Ovitz', 
    category: 'Marketing Design(리디자인)', 
    year: '2023',
    overview: '온라인 홍보물 리디자인입니다. 타깃 마케팅의 연령대가 넓어짐에 따라, 젊은 층부터 중장년층까지 아우를 수 있도록 디자인 범위를 확장하였고, 전반적인 스타일을 현대적으로 재구성하였습니다. 웹사이트 또한 워드프레스 플랫폼으로 리디자인하였습니다.',
    Objective: 'Redesign, Web design',
    client: 'Ovitz',
    imgSrc: '/images/ovitz/imgi_1_o_brochure.webp',
    imgSrc2: '/images/ovitz/imgi_2_ov_logo.webp',
    largeImages: [
      '/images/ovitz/imgi_6_O_website.jpg',
      '/images/ovitz/imgi_4_lents.webp',
      '/images/ovitz/imgi_3_flyer.webp',
      '/images/ovitz/imgi_1_o_brochure.webp',
      '/images/ovitz/imgi_5_brochure_inside.jpg',
    ],
    otherWorksImages: [
      '/images/editorial_thumb.webp',
      '/images/fe_2.webp',
      '/images/editorial_thumb.webp',
    ]
  },
  { 
    id: 4, 
    title: 'Editorial', 
    category: 'Magazine, Brochure, Poster, leaflet ', 
    year: '2020-2023',
    overview: 'Uniqlo is a well-established e-commerce retailer specializing in contemporary fashion. The brand has a significant presence on social media platforms like Instagram, Facebook, Pinterest, and Twitter, but their website\'s integration with these platforms was minimal, resulting in missed opportunities for engagement and sales.',
    Objective: 'Promotion, Redeisgn',
    client: 'Kaist, Nonghyup Bank, Oxford College etc',
    imgSrc: '/images/ifact.webp',
    imgSrc2: '/images/editorial_thumb.webp',
    largeImages: [
      '/images/ifact.webp',
      'images/ovitz/imgi_6_O_website.jpg',
      '/images/editorial_large3.jpg',
      '/images/editorial_large4.jpg',
      '/images/editorial_large5.jpg',
    ],
    otherWorksImages: [
      '/images/editorial_other1.jpg',
      '/images/editorial_other2.jpg',
      '/images/editorial_other3.jpg',
    ]
  },
  { 
    id: 5, 
    title: 'Pharmaceutical design', 
    category: 'Branding, Package design, Web design', 
    year: '2022',
    overview: '2년 이상 제약회사에 재직하며 회사 웹사이트와 다양한 제품디자인, 웹사이트를 기획, 디자인, 운영하였습니다. 또한 인스타그램과 페이스북을 위한 소셜미디어 콘텐츠를 다수 제작하였고, 여러 제품의 브랜딩 및 런칭을 성공적으로 이끌었습니다. 시각적 자산(VISUAL ASSETS) 제작, FDA 가이드라인 등 제약 산업 규정을 준수한 디자인 작업 수행, 마케팅, 인허가, 제품개발 등 다양한 부서와 협업, 업계 트렌드와 디자인 흐름에 대한 지속적인 리서치 및 반영, 브랜드 일관성 유지 및 관리를 하였습니다.',
    client: 'United pharma',
    imgSrc: '/images/UP/bg.jpg',
    imgSrc2: '/images/UP/fe_thumbnail2.jpg'

  },
  { 
    id: 6, 
    title: 'Banner design', 
    category: 'Online Promotion design, Webdesign', 
    year: '2022',
    overview: 'Starbucks required a mobile app redesign to enhance customer experience, streamline ordering processes, and strengthen their digital presence in the competitive coffee market.',
    awards: 'Mobile App Excellence',
    client: 'Starbucks',
    imgSrc: 'https://picsum.photos/seed/starbucks/600/400'
  },
];

const testimonials = {
  // 모든 후기 데이터 삭제
};

export default function WorkDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const project = projects.find(p => p.id === parseInt(id));
  const testimonial = testimonials[parseInt(id)];

  useEffect(() => {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    const onScroll = () => {
      btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    window.addEventListener('scroll', onScroll);
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      btn.removeEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    };
  }, []);

  if (!project) {
    return <div className="pt-24 text-center">Project not found</div>;
  }

  return (
    <>
      <PortfolioDetail project={project} />
      <Footer />
    </>
  );
} 