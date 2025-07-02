import React from 'react';
import Link from 'next/link';

export default function PortfolioDetail({ project }) {
  const { largeImages = [], otherWorksImages = [] } = project;

  if (!project) return <div>Project not found</div>;

  return (
    <div className="bg-white text-black min-h-screen">
      {/* 상단 타이틀 */}
      <section className="container mx-auto px-4 pt-32 pb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
          {project.title}
        </h1>
      </section>

      {/* 이미지 두 개를 하나의 div에 */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center justify-center mb-16">
        <img
          src={project.imgSrc}
          alt={project.title}
          className="rounded-2xl w-full max-w-[800px] max-h-[800px] aspect-square object-cover"
        />
        {project.imgSrc2 && (
          <img
            src={project.imgSrc2}
            alt={project.title + ' detail'}
            className="rounded-2xl w-full max-w-[800px] max-h-[800px] aspect-square object-cover"
          />
        )}
      </div>

      {/* 프로젝트 개요/정보를 하나의 div에 나눠서 */}
      <div className="mx-auto px-4 max-w-[1300px] flex flex-col md:flex-row gap-12 mb-[250px]">
        <div className="flex-grow-0 flex-shrink-0 w-full md:w-[70%] mb-[150px] md:mb-0">
          <h2 className="text-2xl font-bold mb-4">프로젝트 개요</h2>
          <p className="text-lg text-gray-800 whitespace-pre-line">{project.overview}</p>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-full md:w-5/12">
          <h3 className="text-xl font-semibold mb-2">Project Info</h3>
          <ul className="text-gray-700 text-base space-y-1">
            <li><b>Client:</b> {project.client}</li>
            <li><b>Year:</b> {project.year}</li>
            <li><b>Category:</b> {project.category}</li>
          </ul>
        </div>
      </div>

      {/* large 이미지 5개 (세로 스크롤) */}
      {largeImages.map((src, idx) => (
        <div key={idx} className="mx-auto px-4 max-w-[900px] mb-12 flex justify-center">
          {(project.id === 3 && idx === 0) ? (
            <a href="https://www.ovitz.us/" target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={`Large Example ${idx + 1}`}
                className="rounded-2xl w-full object-cover"
              />
            </a>
          ) : (
            <img
              src={src}
              alt={`Large Example ${idx + 1}`}
              className="rounded-2xl w-full object-cover"
            />
          )}
        </div>
      ))}

      {/* other works 섹션 */}
      {/* <div className="mx-auto px-4 max-w-[1300px] mb-4 flex items-center gap-4">
        <hr className="flex-grow border-t border-gray-300" />
        <h2 className="text-2xl font-bold mb-6 text-center whitespace-nowrap">other works</h2>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <div className="mx-auto px-4 max-w-[1300px] flex flex-row flex-wrap gap-6 justify-center items-center mb-[100px]">
        ... (otherWorksImages 관련 코드 전체)
      </div> */}
    </div>
  );
}