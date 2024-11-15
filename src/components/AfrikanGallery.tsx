import React from "react";

const AfrikanGallery = () => {
  return (
    <section className="py-20 px-6 bg-red-800 text-white" id="afrikan-gallery">
      <div className="container mx-auto text-center">
        <img
          src="https://afrikan-gallery.org/wp-content/uploads/2024/09/cropped-AG-LOGO.jpg"
          alt="Afrikan Gallery Logo"
          className="mx-auto mb-6"
          style={{ maxWidth: '200px' }}
        />
        <h2 className="text-4xl font-bold mb-4">Afrikan Gallery</h2>
        <p className="mb-6 text-lg">
          Afrikan Gallery is a platform for photographers across Africa looking for exposure or inspiration. Our mission is to democratize the African voice and provide photographers with tools to grow and thrive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Partnerships</h3>
            <p className="text-gray-700">
              In partnership with Right for Education, we’ve grown to over 1.2 million photographers and fans in just one year, fostering collaboration and talent sharing.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p className="text-gray-700">
              Afrikan Gallery is committed to representing the cutting edge in tech and media, ensuring our photographers have the best tools for success.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Marketplace</h3>
            <p className="text-gray-700">
              Our marketplace showcases the best of Afrikan photography, honoring our roots as a social media community and providing an authentic, uplifting platform for African photographers.
            </p>
          </div>
        </div>
        <a
          href="https://afrikan-gallery.org"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-red-800 py-2 px-6 rounded-full text-xl hover:bg-gray-200"
        >
          Explore More
        </a>
      </div>
    </section>
  );
};

export default AfrikanGallery;
