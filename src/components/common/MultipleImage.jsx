/* eslint-disable react/prop-types */

const MultipleImage = ({ previewImages, setPreviewImages, setImageFiles }) => {
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Create preview URLs
    const imagePreviews = files.map((file) => URL.createObjectURL(file));

    // Update preview images state
    setPreviewImages((prev) => [...prev, ...imagePreviews]);

    // Convert files to File objects and update imageFiles state
    const fileObjects = files.map((file) => {
      return new File([file], file.name, { type: file.type });
    });
    setImageFiles((prev) => [...prev, ...fileObjects]);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload Images
      </label>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG, GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            type="file"
            className="hidden"
            multiple
            name="files"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {previewImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Preview ${index}`}
            className="w-full h-24 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default MultipleImage;
