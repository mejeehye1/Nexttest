import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      title: "Custom Website Design",
      description: "Tailored websites to match your brand's unique identity and goals."
    },
    {
      title: "E-commerce Website",
      description: "Creating user-friendly online stores with secure payment gateways."
    },
    {
      title: "Landing Page Design",
      description: "High-conversion landing pages for specific marketing campaigns."
    },
    {
      title: "Front-end Development",
      description: "Implementing designs with clean and efficient code using HTML, CSS, JS."
    },
    {
      title: "Back-end Development",
      description: "Building robust back-end systems using technologies like PHP and databases."
    },
    {
      title: "Content Management System",
      description: "Integrating and customizing CMS platforms for easy content management."
    },
    {
      title: "Website Optimization",
      description: "Enhancing website performance, speed, and search engine optimisation."
    },
    {
      title: "Website Audits",
      description: "Conducting audits to identify areas for improvement in design and performance."
    },
    {
      title: "Content Strategy & Creation",
      description: "Developing effective content strategies and providing copywriting services."
    },
    {
      title: "Social Media Integration",
      description: "Integrating social media platforms to enhance engagement."
    }
  ];

  return (
    <>
      <Head>
        <title>What I Do - ANNE SONG</title>
        <meta name="description" content="Services offered by Anne Song" />
      </Head>
      
      <Navbar />
      
      <div className="bg-white text-black">
        {/* Hero Section */}
        <section className="wow animate__fadeInUp flex h-[400px] flex-col items-center justify-center text-center pt-32">
          <div className="relative z-10 px-4">
            <h1 className="text-black text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-4">
              What I Do
            </h1>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white text-black border-2 border-black rounded-lg p-8 h-full hover:transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-2xl lg:text-3xl font-bold leading-tight">
                        {service.title}
                      </h4>
                    </div>
                    <div>
                      <p className="text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
} 