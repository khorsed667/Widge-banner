import { useState, useRef, useEffect } from "react";
import { GoQuestion } from "react-icons/go";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { TfiWidgetized } from "react-icons/tfi";

const GalleryWidget = () => {
  const [images, setImages] = useState([
    { id: 1, url: "/cat.jpg" },
    { id: 2, url: "/cat2.jpg" },
    { id: 3, url: "/cat3.jpg" },
    { id: 4, url: "/cat4.jpg" }
  ]);

  const [currentPage, setCurrentPage] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(2); // Default to 2 images per page
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = {
        id: images.length + 1,
        url: URL.createObjectURL(file),
      };
      setImages([...images, newImage]);
    }
  };

  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(images.length / imagesPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const updateImagesPerPage = () => {
    if (window.innerWidth >= 1024) {
      setImagesPerPage(3);
    } else {
      setImagesPerPage(2);
    }
  };

  useEffect(() => {
    updateImagesPerPage();
    window.addEventListener("resize", updateImagesPerPage);
    return () => window.removeEventListener("resize", updateImagesPerPage);
  }, []);

  const paginatedImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  return (
    <div className="w-full bg-gray-800 md:px-2 lg:px-5 xl:px-12 pt-2 pb-8 rounded-2xl text-white">
        <GoQuestion className="text-xl relative top-10" />
        <TfiWidgetized className="text-xl relative top-32" />
      <div className="flex justify-between items-center mb-4 mx-7 xl:mx-10">
        <button className="bg-black text-white md:px-4 md:py-2 xl:px-8 xl:py-4 rounded-xl text-lg">
          Gallery
        </button>

        <button
          onClick={handleAddImageClick}
          className="bg-gray-600 hover:bg-gray-500 shadow-deep-black md:px-2 md:py-1 xl:px-4 xl:py-2 rounded-full text-white transition-all duration-300"
        >
          + ADD IMAGE
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden "
          accept="image/*"
        />

        <div className="flex justify-between w-1/6">
          <button
            onClick={handlePrevPage}
            className="bg-gray-700 xl:p-2 shadow-deep-black rounded-full"
            disabled={currentPage === 0}
          >
            <HiChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            onClick={handleNextPage}
            className="bg-gray-700 xl:p-2 shadow-deep-black rounded-full"
            disabled={currentPage === Math.ceil(images.length / imagesPerPage) - 1}
          >
            <HiChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between  mx-7 xl:mx-10 space-x-4 overflow-x-auto">
        {paginatedImages.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Gallery Image ${image.id}`}
            className="w-32 h-32 object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
