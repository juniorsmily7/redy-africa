import React from "react";

const RedyTalent = () => {
  return (
    <section className="py-20 px-6 bg-gray-100" id="redy-talent">
      <div className="container mx-auto text-center">
        <img
          src="https://redytalent.com/jobs/storage/redy-talent-logo-1.png"
          alt="REdy Talent Logo"
          className="mx-auto mb-6"
          style={{ maxWidth: '200px' }}
        />
        <h2 className="text-4xl font-bold mb-4">REdy Talent</h2>
        <p className="mb-6 text-lg">
          REdy Talent is your one-stop destination for global job opportunities, offering a wide array of positions from remote, hybrid, to in-person roles worldwide. Our platform streamlines the entire recruitment process, providing comprehensive support on visa acquisition, travel logistics, and fund transfers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Good Human Relations</h3>
            <p className="text-gray-700">
              At REdy Talent, we prioritize the significance of a fulfilling career, ensuring that all our clients prioritize employee well-being and growth.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Talent Pool</h3>
            <p className="text-gray-700">
              With a diverse pool of over 4000 candidates and 6.5 million followers across 45 African countries, we offer high-quality talent for international companies.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Efficient Processes</h3>
            <p className="text-gray-700">
              Our services are designed to quickly connect you with opportunities, ensuring minimal delays and prompt feedback on all inquiries.
            </p>
          </div>
        </div>
        <a
          href="https://redytalent.com/jobs/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-700 text-white py-2 px-6 rounded-full text-xl hover:bg-gray-800"
        >
          Start Your Career
        </a>
      </div>
    </section>
  );
};

export default RedyTalent;
