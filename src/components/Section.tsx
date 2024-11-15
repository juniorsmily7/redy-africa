import React from "react";

type SectionProps = {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
};

const Section: React.FC<SectionProps> = ({ id, title, description, imgSrc }) => {
  return (
    <section id={id} className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-700 mb-4 text-center">{title}</h2>
        <p className="text-lg mb-8 text-center">{description}</p>

        {/* Image and Content Layout */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <img src={imgSrc} alt={title} className="w-full max-w-sm rounded-lg shadow-lg" />
          
          {/* Expanded Service Cards */}
          <div className="flex flex-col space-y-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md">
              <div className="text-4xl mb-4">📘</div>
              <h3 className="text-xl font-semibold mb-2 text-red-700">Educational Resources</h3>
              <p>Our platform provides educational content on key issues such as health, law, and social welfare, giving users tools for informed decisions.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2 text-red-700">Career Development</h3>
              <p>REdy Talent supports job seekers in creating impactful resumes, enhancing skills, and navigating the career landscape with confidence.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-red-700">Cultural Exhibits</h3>
              <p>Afrikan Gallery features curated art pieces that showcase the diversity and vibrancy of African culture, connecting audiences worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
