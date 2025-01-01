/* eslint-disable react/prop-types */
const ImageThumbnail = ({ image, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(image)}
      className={`w-16 h-16 mb-2 border-2 rounded-md overflow-hidden transition-all ${
        isActive ? "border-blue-500" : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <img src={image} alt={image.alt} className="w-full h-full object-cover" />
    </button>
  );
};

export default ImageThumbnail;
