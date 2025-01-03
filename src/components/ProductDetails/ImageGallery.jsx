/* eslint-disable react/prop-types */
import { useState } from "react";
import ImageThumbnail from "./ImageThumbnail";
import { MainImage } from "./MainImage";

export function ImageGallery({ data }) {
  const [selectedImage, setSelectedImage] = useState(data[0].url);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-center">
        {data.map((image) => (
          <ImageThumbnail
            key={image._id}
            image={image.url}
            isActive={selectedImage._id === image._id}
            onClick={setSelectedImage}
          />
        ))}
      </div>

      {/* Main Image */}
      <MainImage image={selectedImage} />
    </div>
  );
}
