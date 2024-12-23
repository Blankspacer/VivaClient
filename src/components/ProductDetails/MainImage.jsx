/* eslint-disable react/prop-types */
export function MainImage({ image }) {
  return (
    <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
      <img
        src={image.fullSize}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
