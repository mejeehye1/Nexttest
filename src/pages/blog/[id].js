import { useState } from 'react';
import Link from 'next/link';

// 블로그 포스트 데이터
const blogPosts = [
  {
    id: 4,
    title: "2024년 UI/UX 디자인 트렌드 완벽 분석",
    category: "디자인/UX",
    categoryId: "design",
    date: "22 Jun 2024",
    content: `
      <p><span class="dropcap">2</span>024년은 UI/UX 디자인 분야에서 많은 변화가 일어난 해입니다. 이 글에서는 주목해야 할 주요 트렌드들을 분석하고, 실제 프로젝트에 적용할 수 있는 방법을 제시합니다.</p>

      <p>Neumorphism과 Glassmorphism의 조합이 새로운 디자인 트렌드로 떠오르고 있습니다. 부드러운 그림자와 반투명 효과를 활용하여 현실감 있는 인터페이스를 만들 수 있습니다.</p>

      <p>마이크로 인터랙션과 애니메이션도 중요한 요소입니다. 사용자의 행동에 즉각적으로 반응하는 세밀한 애니메이션은 사용자 경험을 크게 향상시킵니다.</p>
    `,
    image: "https://picsum.photos/seed/design1/800/400",
    comments: []
  },
  {
    id: 1,
    title: "React Hooks 완벽 가이드: useState부터 Custom Hook까지",
    category: "웹/앱",
    categoryId: "coding",
    date: "20 Jun 2024",
    content: `
      <p><span class="dropcap">R</span>eact Hooks는 함수형 컴포넌트에서 상태와 생명주기를 관리할 수 있게 해주는 강력한 기능입니다. 이 글에서는 useState, useEffect, useContext 등 기본 훅부터 커스텀 훅까지 모든 것을 다뤄보겠습니다.</p>

      <p>useState는 가장 기본적인 훅으로, 컴포넌트에서 상태를 관리할 수 있게 해줍니다. 배열 구조분해를 사용하여 상태값과 상태를 변경하는 함수를 받아올 수 있습니다. 이 함수를 호출하면 컴포넌트가 리렌더링되어 UI가 업데이트됩니다.</p>

      <p>useEffect는 컴포넌트가 렌더링된 후에 실행되는 부수 효과를 처리하는 훅입니다. API 호출, 이벤트 리스너 등록, 구독 설정 등 다양한 작업을 수행할 수 있습니다. 의존성 배열을 통해 언제 실행될지를 제어할 수 있어 매우 유연합니다.</p>
    `,
    image: "https://picsum.photos/seed/coding1/800/400",
    comments: [
      {
        id: 1,
        name: "김개발",
        date: "2 days ago",
        avatar: "https://picsum.photos/seed/avatar1/60/60",
        comment: "정말 유용한 글이네요! useState와 useEffect의 차이점을 명확하게 설명해주셔서 이해하기 쉬웠습니다.",
        replies: [
          {
            id: 2,
            name: "박코딩",
            date: "2 days ago",
            avatar: "https://picsum.photos/seed/avatar2/60/60",
            comment: "저도 같은 생각입니다. 커스텀 훅 부분도 정말 도움이 되었어요!"
          }
        ]
      },
      {
        id: 3,
        name: "이프론트",
        date: "1 day ago",
        avatar: "https://picsum.photos/seed/avatar3/60/60",
        comment: "실제 프로젝트에서 바로 적용할 수 있는 팁들이 많아서 좋았습니다.",
        replies: [
          {
            id: 4,
            name: "최리액트",
            date: "1 day ago",
            avatar: "https://picsum.photos/seed/avatar4/60/60",
            comment: "특히 의존성 배열 관리 부분이 정말 실용적이었어요!"
          }
        ]
      },
      {
        id: 5,
        name: "정웹개발",
        date: "1 day ago",
        avatar: "https://picsum.photos/seed/avatar5/60/60",
        comment: "React Hooks를 처음 배우는 사람에게도 추천할 수 있는 좋은 글이네요."
      }
    ]
  },
  {
    id: 2,
    title: "Next.js 13 App Router vs Pages Router 비교 분석",
    category: "웹/앱",
    categoryId: "coding",
    date: "18 Jun 2024",
    content: `
      <p><span class="dropcap">N</span>ext.js 13에서 도입된 App Router는 기존 Pages Router와 많은 차이점을 가지고 있습니다. 이 글에서는 두 방식의 장단점을 비교하고, 언제 어떤 것을 사용해야 하는지 알아보겠습니다.</p>

      <p>App Router는 React Server Components를 기본적으로 지원하며, 더 나은 성능과 사용자 경험을 제공합니다. 파일 기반 라우팅 시스템을 사용하지만, 레이아웃과 중첩 라우팅을 더 직관적으로 처리할 수 있습니다.</p>

      <p>Pages Router는 기존의 안정적인 방식으로, 많은 개발자들이 익숙한 구조를 가지고 있습니다. Server-Side Rendering과 Static Site Generation을 지원하며, 복잡한 라우팅 로직을 구현하기에 적합합니다.</p>
    `,
    image: "https://picsum.photos/seed/coding2/800/400",
    comments: []
  },
  {
    id: 7,
    title: "개발자의 하루: 생산성을 높이는 루틴 만들기",
    category: "데일리라이프",
    categoryId: "life",
    date: "21 Jun 2024",
    content: `
      <p><span class="dropcap">개</span>발자의 생산성은 일과를 어떻게 구성하느냐에 따라 크게 달라집니다. 이 글에서는 효율적인 개발 루틴과 시간 관리 방법을 공유합니다.</p>

      <p>아침 루틴은 하루의 시작을 좌우합니다. 명상, 운동, 계획 수립 등 개인에게 맞는 활동을 통해 집중력을 높일 수 있습니다. 특히 깊은 작업이 필요한 시간대를 파악하여 중요한 작업을 우선순위로 배치하는 것이 중요합니다.</p>

      <p>업무 중간에 휴식을 취하는 것도 생산성 향상에 도움이 됩니다. 25분 집중 작업 후 5분 휴식을 취하는 Pomodoro 기법을 활용하면 지속적인 집중력을 유지할 수 있습니다.</p>
    `,
    image: "https://picsum.photos/seed/life1/800/400",
    comments: []
  }
];

function CommentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      onSubmit(formData);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div id="comment-form-wrapper" className="mt-12">
      <h4 className="text-2xl font-bold mb-6">Leave a Comment</h4>
      <div className="comment_form_holder">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea 
              cols="10" 
              rows="6" 
              name="message" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black resize-none"
              required
            ></textarea>
          </div>

          <div>
            <button 
              type="submit" 
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function BlogDetail({ post }) {
  const [newComments, setNewComments] = useState([]);

  const handleCommentSubmit = (commentData) => {
    const newComment = {
      id: Date.now(),
      name: commentData.name,
      date: "Just now",
      avatar: `https://picsum.photos/seed/${Date.now()}/60/60`,
      comment: commentData.message
    };
    setNewComments([...newComments, newComment]);
  };

  const totalComments = (post.comments?.length || 0) + newComments.length;

  return (
    <div className="bg-white text-black">
      {/* 헤더 섹션 */}
      <div className="wow animate__fadeInUp flex h-[400px] flex-col items-center justify-center text-center">
        <h1 className="text-[120px] font-bold leading-none text-black mb-6">
          My Blog
        </h1>
        <div className="flex h-[34px] w-[200px] items-center justify-center rounded-[20px] bg-black text-base font-semibold text-[#B8FF65]">
          Available for Work
        </div>
      </div>

      {/* 블로그 포스트 헤더 */}
      <section className="px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 이미지 */}
            <div className="relative rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              {/* 카테고리 배지 */}
              <div className="absolute top-3 right-3">
                <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                  post.categoryId === 'coding' ? 'bg-blue-500' :
                  post.categoryId === 'design' ? 'bg-purple-500' :
                  'bg-green-500'
                }`}>
                  {post.category}
                </span>
              </div>
            </div>
            
            {/* 포스트 정보 */}
            <div className="bg-gray-100 rounded-lg p-8 lg:p-12">
              <div className="subtitle mb-4">
                <span className="inline-block text-sm font-bold me-6">
                  <i className="icofont-tag text-black me-2">🏷️</i>{post.category}
                </span>
                <span className="inline-block text-sm font-semibold">
                  <i className="icofont-ui-calendar text-black me-2">📅</i>{post.date}
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-tight">{post.title}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* 블로그 본문 */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="blog-read">
              <div className="post-text text-lg leading-relaxed" 
                   dangerouslySetInnerHTML={{ __html: post.content }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 댓글 섹션 */}
      <section className="px-4 pb-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div id="blog-comment">
              <h4 className="text-2xl font-bold mb-6">Comments ({totalComments})</h4>

              {/* 기존 댓글들 */}
              {post.comments && post.comments.map((comment) => (
                <div key={comment.id} className="mb-8">
                  <div className="flex space-x-4">
                    <div className="avatar">
                      <img src={comment.avatar} alt="" className="w-12 h-12 rounded-full" />
                    </div>
                    <div className="flex-1">
                      <div className="comment-info mb-2">
                        <span className="c_name font-bold mr-4">{comment.name}</span>
                        <span className="c_date text-[#B8FF65] text-sm">{comment.date}</span>
                        <span className="c_reply ml-4">
                          <a href="#" className="text-blue-600 hover:underline">Reply</a>
                        </span>
                      </div>
                      <div className="comment text-gray-700 mb-4">{comment.comment}</div>
                      
                      {/* 답글들 */}
                      {comment.replies && comment.replies.map((reply) => (
                        <div key={reply.id} className="ml-12 mb-4">
                          <div className="flex space-x-4">
                            <div className="avatar">
                              <img src={reply.avatar} alt="" className="w-10 h-10 rounded-full" />
                            </div>
                            <div className="flex-1">
                              <div className="comment-info mb-2">
                                <span className="c_name font-bold mr-4">{reply.name}</span>
                                <span className="c_date text-[#B8FF65] text-sm">{reply.date}</span>
                                <span className="c_reply ml-4">
                                  <a href="#" className="text-blue-600 hover:underline">Reply</a>
                                </span>
                              </div>
                              <div className="comment text-gray-700">{reply.comment}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* 새로 추가된 댓글들 */}
              {newComments.map((comment) => (
                <div key={comment.id} className="mb-8">
                  <div className="flex space-x-4">
                    <div className="avatar">
                      <img src={comment.avatar} alt="" className="w-12 h-12 rounded-full" />
                    </div>
                    <div className="flex-1">
                      <div className="comment-info mb-2">
                        <span className="c_name font-bold mr-4">{comment.name}</span>
                        <span className="c_date text-[#B8FF65] text-sm">{comment.date}</span>
                      </div>
                      <div className="comment text-gray-700">{comment.comment}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* 댓글 작성 폼 */}
              <CommentForm onSubmit={handleCommentSubmit} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id)) || blogPosts[0];
  
  return {
    props: {
      post
    }
  };
} 