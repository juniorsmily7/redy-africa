import React from "react";

const Insights = () => {
  return (
    <section className="py-20 px-6 bg-gray-200" id="insights">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Company Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
            <p className="text-gray-700">
              With combined social media channels, we engage millions of young adults across Africa, opening doors to international opportunities and ideas.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Innovative Approach</h3>
            <p className="text-gray-700">
              We create transparency and build bridges between investors and Africans, fostering a mutually beneficial partnership in global commerce and learning.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Collaborative Network</h3>
            <p className="text-gray-700">
              Our chapters across Africa help businesses and individuals navigate markets, ensuring seamless collaboration for all parties involved.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Access to Resources</h3>
            <p className="text-gray-700">
              Through our extensive partnerships, we provide valuable resources such as educational materials, business consultancy, and cross-border networking.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Sustainable Development</h3>
            <p className="text-gray-700">
              We champion sustainable development initiatives that benefit both the local communities and global partners, fostering long-term economic growth.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Empowering Youth</h3>
            <p className="text-gray-700">
              We empower young African leaders by offering them educational programs and workshops to further their personal and professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
