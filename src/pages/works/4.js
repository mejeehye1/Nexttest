import PortfolioDetail from '../../components/PortfolioDetail';
import Footer from '../../components/Footer';

export default function Work4() {
  // 상단 두 이미지는 ovitz(works/3)와 동일하게 고정
  const project = {
    title: 'Editorial Design',
    imgSrc: '/images/ifact.webp',
    imgSrc2: '/images/editorial_thumb.webp',
    overview: '정보를 효과적으로 전달하면서도 시각적으로 임팩트 있는 인쇄물과 홍보물, 리플렛 디자인을 추구합니다. 브랜드의 메시지를 명확하게 담아내는 구성과 감각적인 레이아웃으로 보는 이의 관심을 끄는 작업에 자신이 있습니다.',
    client: 'English Education, Kiast, Oxford, Kais, Cisf etc',
    year: '2021-2023',
    category: '편집디자인, 인쇄디자인',
    largeImages: [
      '/images/ifact.webp',
      '/images/english_education_brochure.jpg', '/images/food_brochure2.webp',


      '/images/magazin_overview.jpg',
      '/images/kais_2_portfolio.jpg',
      '/images/kais_2.jpg',
      '/images/poster.jpg',
      '/images/oxford_brochure.webp',
      '/images/chung2.jpg',
      '/images/chung1.jpg',
      '/images/cisf.webp',
      '/images/business.webp',
    ],
    otherWorksImages: [
      { src: '/images/fe_2.webp', link: '/works/3' },
      { src: '/images/tarot_thumb.jpg', link: '/works/6' },
      { src: '/images/ovitz/imgi_5_brochure_inside.jpg', link: '/works/5' },
    ],
  };

  return (
    <>
      <PortfolioDetail project={project} />
      <Footer />
    </>
  );
} 