/* eslint-disable react/prop-types */
export function MainImage({ image }) {
  console.log(image);
  return (
    <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
      <img
        src={image}
        alt={image.alt || "product"}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
