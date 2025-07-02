"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const blogPosts = [
  // 디자인 관련 포스트 (1개)
  {
    id: 4,
    title: "2024년 UI/UX 디자인 트렌드 완벽 분석",
    excerpt: "2024년에 주목해야 할 UI/UX 디자인 트렌드를 분석하고, 실제 프로젝트에 적용할 수 있는 방법을...",
    date: "22",
    month: "Jun",
    comments: 20,
    image: "https://picsum.photos/seed/design1/400/300",
    category: "design"
  },
  
  // 코딩 관련 포스트 (1개)
  {
    id: 1,
    title: "React Hooks 완벽 가이드: useState부터 Custom Hook까지",
    excerpt: "React Hooks의 모든 것을 알아보는 완벽한 가이드입니다. useState, useEffect, useContext 등 기본 훅부터 커스텀 훅까지...",
    date: "20",
    month: "Jun",
    comments: 15,
    image: "https://picsum.photos/seed/coding1/400/300",
    category: "coding"
  },
  
  // 데일리라이프 관련 포스트 (1개)
  {
    id: 7,
    title: "개발자의 하루: 생산성을 높이는 루틴 만들기",
    excerpt: "개발자의 일과를 효율적으로 관리하고 생산성을 높이는 방법, 시간 관리 팁을 공유합니다...",
    date: "21",
    month: "Jun",
    comments: 18,
    image: "https://picsum.photos/seed/life1/400/300",
    category: "life"
  }
];

export default function Blog() {
  // return null; // 완전 숨기기
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f3ed] text-black">
      <h1 className="text-3xl font-bold">블로그는 현재 준비중입니다.</h1>
    </div>
  );
} 