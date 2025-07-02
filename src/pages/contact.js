"use client";
import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Hire() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const scrambleRef = useRef(null);
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
          text: 'Contact',
          chars: 'lowerCase',
          revealDelay: 0.2,
          tweenLength: true
        },
        delay: 1.2,
        ease: 'power1.inOut'
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직을 여기에 추가할 수 있습니다
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
        <script src="https://assets.codepen.io/16327/SplitText3.min.js"></script>
        <script src="https://assets.codepen.io/16327/ScrambleTextPlugin3.min.js"></script>
      </Head>
      <div className="bg-[#F9F4EB] text-black">
        {/* 상단 섹션 - Works 페이지와 동일한 스타일 */}
        <div className="flex h-[400px] flex-col items-center justify-center text-center pt-32">
          <h1
            ref={scrambleRef}
            className="text-[120px] font-bold leading-none text-black"
            style={{ minHeight: '1em' }}
          >
            Contact
          </h1>
        </div>

        {/* 폼 섹션 */}
        <div className="pb-24 sm:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 wow animate__fadeInUp">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Whether you have a question, a suggestion, or just want to say hello, this is the place to do it. Please fill out the form below with your details and message, and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* 폼 전체를 flex로 감싸고, 세로 중앙 정렬 및 max-w-2xl로 조정 */}
              <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="w-full max-w-[1400px] flex flex-col items-center">
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* 왼쪽: name, email, phone */}
                    <div className="space-y-6 flex flex-col justify-center">
                      <div>
                        <label htmlFor="name" className="d-label">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control border-2 border-black bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="d-label">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control border-2 border-black bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="d-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control border-2 border-black bg-white"
                        />
                      </div>
                    </div>
                    {/* 오른쪽: message */}
                    <div className="flex flex-col justify-center h-full">
                      <label htmlFor="message" className="d-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="8"
                        className="form-control border-2 border-black resize-none flex-1 min-h-[180px] bg-white"
                        required
                      ></textarea>
                    </div>
                  </div>
                  {/* 전송 버튼 */}
                  <div className="text-center mt-8 w-full" style={{ marginTop: '68px' }}>
                    <button
                      type="submit"
                      className="border-2 border-black bg-transparent text-black font-bold py-4 px-12 rounded-none text-lg transition-all duration-300 mx-auto block hover:bg-black hover:text-white"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 