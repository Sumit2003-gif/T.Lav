import React, { useState } from "react";

const properties = [
  {
    residence: "RESIDENT TOWER",
    bedBath: "3/1",
    sqFt: 700,
    salePrice: "66,800",
    rentPrice: "700/M",
    images: [
      "https://placehold.co/800x600/E8DED8/382C1E?text=RESIDENT+TOWER+1",
      "https://placehold.co/800x600/E8DED8/382C1E?text=RESIDENT+TOWER+2",
      "https://placehold.co/800x600/E8DED8/382C1E?text=RESIDENT+TOWER+3",
    ],
  },
  {
    residence: "UNIQ VILLA",
    bedBath: "4/2",
    sqFt: 1200,
    salePrice: "56,800",
    rentPrice: "-",
    images: [
      "https://placehold.co/800x600/C1C3BC/382C1E?text=UNIQ+VILLA+1",
      "https://placehold.co/800x600/C1C3BC/382C1E?text=UNIQ+VILLA+2",
      "https://placehold.co/800x600/C1C3BC/382C1E?text=UNIQ+VILLA+3",
    ],
  },
  {
    residence: "LOCAL TOWER",
    bedBath: "4/1",
    sqFt: 120,
    salePrice: "9,000",
    rentPrice: "-",
    images: [
      "https://placehold.co/800x600/808E9E/382C1E?text=LOCAL+TOWER+1",
      "https://placehold.co/800x600/808E9E/382C1E?text=LOCAL+TOWER+2",
      "https://placehold.co/800x600/808E9E/382C1E?text=LOCAL+TOWER+3",
    ],
  },
  {
    residence: "RED CITY",
    bedBath: "6/2",
    sqFt: 8500,
    salePrice: "909,800",
    rentPrice: "-",
    images: [
      "https://placehold.co/800x600/F5A623/382C1E?text=RED+CITY+1",
      "https://placehold.co/800x600/F5A623/382C1E?text=RED+CITY+2",
      "https://placehold.co/800x600/F5A623/382C1E?text=RED+CITY+3",
    ],
  },
  {
    residence: "ZCUBE TOWER",
    bedBath: "5/2",
    sqFt: 1800,
    salePrice: "-",
    rentPrice: "2,000/M",
    images: [
      "https://placehold.co/800x600/98C1D9/382C1E?text=ZCUBE+TOWER+1",
      "https://placehold.co/800x600/98C1D9/382C1E?text=ZCUBE+TOWER+2",
      "https://placehold.co/800x600/98C1D9/382C1E?text=ZCUBE+TOWER+3",
    ],
  },
  {
    residence: "ALANI MENTION",
    bedBath: "6/2",
    sqFt: 2400,
    salePrice: "20,000",
    rentPrice: "2,000/W",
    images: [
      "https://placehold.co/800x600/98C1D9/382C1E?text=ALANI+MENTION+1",
      "https://placehold.co/800x600/98C1D9/382C1E?text=ALANI+MENTION+2",
      "https://placehold.co/800x600/98C1D9/382C1E?text=ALANI+MENTION+3",
    ],
  },
];

const Avability = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (images) => {
    setCurrentImages(images);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () =>
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);

  const prevImage = () =>
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length
    );

  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20 font-[Inter]">
      {/* Header Section */}
      <div className="text-center mb-14">
        <p className="text-lg tracking-widest text-gray-600 uppercase">Our Plans</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-yellow-700 mb-4 drop-shadow-md">
          Availability
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our available residences with flexible sale and rental options. 
          View detailed floor plans and select the best one that fits your needs.
        </p>
      </div>

      {/* Table Section */}
      <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
        <table className="w-full text-left table-auto">
          <thead className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-white text-sm uppercase">
            <tr>
              <th className="px-6 py-4">Residence</th>
              <th className="px-6 py-4">Bed/Bath</th>
              <th className="px-6 py-4 hidden md:table-cell">Sq.Ft</th>
              <th className="px-6 py-4 hidden sm:table-cell">Sale Price</th>
              <th className="px-6 py-4 hidden sm:table-cell">Rent Price</th>
              <th className="px-6 py-4 text-center">Floor Plan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {properties.map((prop, index) => (
              <tr
                key={index}
                className={`transition duration-300 hover:bg-yellow-50 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {prop.residence}
                </td>
                <td className="px-6 py-4 text-gray-600">{prop.bedBath}</td>
                <td className="px-6 py-4 text-gray-600 hidden md:table-cell">
                  {prop.sqFt}
                </td>
                <td className="px-6 py-4 text-gray-600 hidden sm:table-cell">
                  {prop.salePrice}
                </td>
                <td className="px-6 py-4 text-gray-600 hidden sm:table-cell">
                  {prop.rentPrice}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => openModal(prop.images)}
                    className="px-5 py-2 bg-yellow-600 cursor-pointer hover:bg-yellow-700 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-110"
                  >
                    View Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Section */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 hover:scale-[1.01]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-800 cursor-pointer hover:text-red-500 transition-transform hover:rotate-90 z-10 text-2xl"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Image Viewer */}
            <div className="relative w-full h-80 sm:h-[28rem] flex items-center justify-center bg-gray-100">
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 text-white bg-black/60 p-3 rounded-full hover:bg-black/80 transition transform hover:scale-110"
                aria-label="Previous image"
              >
                ❮
              </button>

              <img
                src={currentImages[currentImageIndex]}
                alt={`Property ${currentImageIndex + 1}`}
                className="object-contain w-full h-full transition-transform duration-500"
              />

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 text-white bg-black/60 p-3 rounded-full hover:bg-black/80 transition transform hover:scale-110"
                aria-label="Next image"
              >
                ❯
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avability;
