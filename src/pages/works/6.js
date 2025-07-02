import PortfolioDetail from '../../components/PortfolioDetail';
import Footer from '../../components/Footer';

export default function Work6() {
  // 상단 두 이미지는 ovitz(works/3)와 동일하게 고정
  const project = {
    title: 'Online Banner',
    imgSrc: '/images/tarot_thumb.jpg',
    imgSrc2: '/images/ovitz/cakethumb.jpg',
    overview: '감각적인 디자인과 사용자 경험을 중요하게 생각하며, 브랜드의 매력을 극대화하는 상세페이지와 이벤트페이지 제작을 즐깁니다. 트렌디하면서도 목적에 부합하는 구성으로 사용자의 시선을 사로잡는 작업에 열정을 가지고 있습니다.',
    client: 'Online and Offline business',
    year: '2022-2024',
    category: '배너디자인, 웹디자인, 브랜딩',
    largeImages: [
      '/images/banner.jpg',
      '/images/dgms.jpg', 
      '/images/banner/mail_design.jpg',
      '/images/banner/chinese.jpg',
    ],
    otherWorksImages: [
      '/images/ov_thumbnail.jpg',
      '/images/fe_2.webp',
      '/images/taco_nuts.jpg',
    ],
  };

  return (
    <>
      <PortfolioDetail project={project} />
      <Footer />
    </>
  );
} 