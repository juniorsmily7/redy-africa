import React from "react";

const RightForEducation = () => {
  return (
    <section className="py-20 px-6 bg-red-700 text-white" id="right-for-education">
      <div className="container mx-auto text-center">
        <img
          src="https://rightforeducation.org/wp-content/uploads/2021/03/RED-Logo-RGB.jpg"
          alt="Right for Education Logo"
          className="mx-auto mb-6"
          style={{ maxWidth: '200px' }}
        />
        <h2 className="text-4xl font-bold mb-4">Right for Education</h2>
        <p className="mb-6 text-lg">
          Right for Education is a unique Pan-African movement, dedicated to educating and empowering people in over 35 countries in Africa. We use the democratising power of the internet to connect and build a community of Africans who, like us, believe that the future is Africa’s!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Culturally Relevant Education</h3>
            <p className="text-gray-700">
              We ensure that all our learning materials are relevant and respectful of the diversity of African culture, making education accessible and culturally appropriate for everyone.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">E-Library</h3>
            <p className="text-gray-700">
              Our E-Library consists of hundreds of texts on topics such as business, health, and human rights. It’s the foundation of what we do, and we provide resources to over 10 million people in Africa.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Global Opportunities</h3>
            <p className="text-gray-700">
              Right for Education connects Africans to opportunities, ranging from market research, recruitment of talent, and educational programs, helping Africa’s global presence grow.
            </p>
          </div>
        </div>
        <a
          href="https://rightforeducation.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-red-700 py-2 px-6 rounded-full text-xl hover:bg-gray-200"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default RightForEducation;
