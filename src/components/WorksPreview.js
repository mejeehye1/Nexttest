import Link from 'next/link';

export default function WorksPreview({ projects }) {
  return (
    <section className="w-screen flex justify-center pt-[100px] pb-24 bg-black overflow-x-hidden">
      <div className="w-screen max-w-none px-8 md:px-20">
        <h2 className="text-4xl font-extrabold mb-12 text-left px-8 md:px-20 text-white">Recent Works</h2>
        {/* 첫 줄 2개, 둘째 줄 3개 */}
        <div className="flex flex-col gap-y-[30px] w-full">
          <div className="flex w-full gap-0">
            {projects.slice(0,2).map((project, idx) => (
              <div key={project.id} className="relative group flex-1 aspect-square overflow-hidden mx-[15px]" style={{ borderRadius: '20px', minWidth: 0 }}>
                <Link href={`/works/${project.id}`}>
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      style={{ borderRadius: '20px' }}
                    />
                  </div>
                </Link>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full gap-0">
            {projects.slice(2,5).map((project, idx) => (
              <div key={project.id} className="relative group flex-1 aspect-square overflow-hidden mx-[15px]" style={{ borderRadius: '20px', minWidth: 0 }}>
                {project.imgSrc === '#' ? (
                  <div className="absolute inset-0 w-full h-full overflow-hidden cursor-not-allowed opacity-60">
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '20px' }}
                    />
                  </div>
                ) : (
                  <Link href={`/works/${project.id}`}>
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <img
                        src={project.imgSrc}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        style={{ borderRadius: '20px' }}
                      />
                    </div>
                  </Link>
                )}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}