import PortfolioDetail from '../../components/PortfolioDetail';
import Footer from '../../components/Footer';

export default function Work5() {
  // 상단 두 이미지는 ovitz(works/3)와 동일하게 고정
  const project = {
    title: 'Pharmaceutical Design',
    imgSrc: '/images/UP/poster_.jpg',
    imgSrc2: '/images/UP/uplab.jpg',
    overview: '2년 이상 제약회사에 재직하며 회사 웹사이트와 다양한 제품디자인, 웹사이트를 기획, 디자인, 운영하였습니다. 또한 인스타그램과 페이스북을 위한 소셜미디어 콘텐츠를 다수 제작하였고, 여러 제품의 브랜딩 및 런칭을 성공적으로 이끌었습니다. 시각적 자산(VISUAL ASSETS) 제작, FDA 가이드라인 등 제약 산업 규정을 준수한 디자인 작업 수행, 마케팅, 인허가, 제품개발 등 다양한 부서와 협업, 업계 트렌드와 디자인 흐름에 대한 지속적인 리서치 및 반영, 브랜드 일관성 유지 및 관리를 하였습니다.',
    client: 'United pharma, Ferosom Forte, Velon, Ditamin etc',
    year: '2021-2023',
    category: '웹사이트디자인, 브랜딩, 패키지디자인',
    largeImages: [
      '/images/UP/bg.jpg',
      '/images/UP/branding.jpg', 
      '/images/UP/up_medical.jpg',
      '/images/UP/up_flg.jpg',
      '/images/UP/fero_family.jpg',
      '/images/UP/fe_2.webp',
      '/images/UP/design.jpg',
      '/images/UP/fe_thumbnail2.jpg',
      '/images/UP/web_proposal_2x.jpg',
      '/images/UP/fero_web-2 (6).jpg',
      '/images/UP/multi_web.jpg',
      '/images/UP/velon_logo.jpg',
      '/images/UP/velon_products_mock.jpg',
      '/images/UP/velon.jpg',
      '/images/UP/brandguideline_velonn.jpg',
    ],
    otherWorksImages: [
      '/images/tarot_thumb.jpg',
      '/images/editorial_thumb.webp', 
      '/images/ovitz/imgi_5_brochure_inside.jpg',
    ],
  };

  return (
    <>
      <PortfolioDetail project={project} />
      <Footer />
    </>
  );
} 