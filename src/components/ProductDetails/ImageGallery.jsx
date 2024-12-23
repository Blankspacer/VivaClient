import { useState } from "react";
import ImageThumbnail from "./ImageThumbnail";
import { MainImage } from "./MainImage";

const productImages = [
  {
    id: 1,
    thumbnail:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg",
    fullSize:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg",
    alt: "Product view 1",
  },
  {
    id: 2,
    thumbnail:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg",
    fullSize:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg",
    alt: "Product view 2",
  },
  {
    id: 3,
    thumbnail:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg",
    fullSize:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg",
    alt: "Product view 3",
  },
  {
    id: 4,
    thumbnail:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg",
    fullSize:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg",
    alt: "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg",
  },
  {
    id: 5,
    thumbnail:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1712596948/un21p5amgim7vbc3yokf.jpg",
    fullSize:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1712596948/un21p5amgim7vbc3yokf.jpg",
    alt: "Product view 5",
  },
];

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-center">
        {productImages.map((image) => (
          <ImageThumbnail
            key={image.id}
            image={image}
            isActive={selectedImage.id === image.id}
            onClick={setSelectedImage}
          />
        ))}
      </div>

      {/* Main Image */}
      <MainImage image={selectedImage} />
    </div>
  );
}
