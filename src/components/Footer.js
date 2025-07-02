import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0">
            <div className="flex space-x-6 mb-2">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Medium</a>
            </div>
            <p className="text-gray-600 text-sm">
              All Right Reserved @2025<br />
              Design by Anne
            </p>
          </div>
          <div className="text-right">
            <Link href="/contact" className="text-6xl lg:text-7xl font-bold text-black hover:text-[#e95a16] transition-colors">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 