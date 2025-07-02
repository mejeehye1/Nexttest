import { FaCode, FaPaintBrush, FaMobileAlt, FaServer, FaChartBar } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={40} className="text-blue-600 mb-4" />,
    title: '웹 개발',
    desc: '최신 기술로 반응형 웹사이트를 개발합니다.'
  },
  {
    icon: <FaPaintBrush size={40} className="text-green-500 mb-4" />,
    title: 'UI/UX 디자인',
    desc: '사용자 경험을 고려한 감각적인 디자인을 제공합니다.'
  },
  {
    icon: <FaMobileAlt size={40} className="text-purple-500 mb-4" />,
    title: '모바일 최적화',
    desc: '모든 기기에서 최적의 화면을 보장합니다.'
  },
  {
    icon: <FaServer size={40} className="text-orange-500 mb-4" />,
    title: '백엔드 개발',
    desc: '안정적인 서버와 API를 구축합니다.'
  },
  {
    icon: <FaChartBar size={40} className="text-pink-500 mb-4" />,
    title: '데이터 분석',
    desc: '데이터 기반의 인사이트를 제공합니다.'
  }
];

// 카드 설명 색상
const descColor = '#333333';

export default function ServiceSection() {
  return (
    <section className="w-full flex justify-center py-24 bg-[#f4f3ed]">
      <div className="max-w-screen-xl w-full px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-left">Skills</h2>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* 첫 번째 박스 커스텀 */}
          <div className="bg-white rounded-2xl px-[40px] py-[60px] flex flex-col min-h-[340px] w-full md:w-[70%]">
            <h5 className="text-lg font-bold mb-2 text-left">1</h5>
            <h3 className="font-bold text-left" style={{ fontSize: '20px', marginBottom: '0.5rem' }}>Brand Identity Design</h3>
            <p className="text-left" style={{ fontSize: '16px', color: descColor, marginTop: '0.5rem' }}>최신 기술로 반응형 웹사이트를 개발합니다.</p>
          </div>
          {/* 두 번째 박스 기존 방식 */}
          {services.slice(1,2).map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl px-[40px] py-[60px] flex flex-col items-center text-center min-h-[340px] w-full md:w-[30%]">
              {service.icon}
              <h3 className="font-bold text-center" style={{ fontSize: '20px', marginBottom: '0.5rem' }}>{service.title}</h3>
              <p className="text-center" style={{ fontSize: '16px', color: descColor, marginTop: '0.5rem' }}>{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {services.slice(2,3).map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl px-[40px] py-[60px] flex flex-col items-center text-center min-h-[340px] w-full md:w-[30%]">
              {service.icon}
              <h3 className="font-bold text-center" style={{ fontSize: '20px', marginBottom: '0.5rem' }}>{service.title}</h3>
              <p className="text-center" style={{ fontSize: '16px', color: descColor, marginTop: '0.5rem' }}>{service.desc}</p>
            </div>
          ))}
          {services.slice(3,4).map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl px-[40px] py-[60px] flex flex-col items-center text-center min-h-[340px] w-full md:w-[70%]">
              {service.icon}
              <h3 className="font-bold text-center" style={{ fontSize: '20px', marginBottom: '0.5rem' }}>{service.title}</h3>
              <p className="text-center" style={{ fontSize: '16px', color: descColor, marginTop: '0.5rem' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 