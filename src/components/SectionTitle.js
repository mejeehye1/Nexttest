export default function SectionTitle({ subtitle, title }) {
  return (
    <div className="text-center mb-12">
      <h3 className="text-lg font-semibold text-gray-500 mb-2">{subtitle}</h3>
      <h2 className="text-4xl md:text-5xl font-bold text-black">{title}</h2>
    </div>
  );
} 