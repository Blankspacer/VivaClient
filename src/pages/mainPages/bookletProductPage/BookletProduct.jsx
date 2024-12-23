import { useParams } from "react-router-dom";

const BookletProduct = () => {
  const { category } = useParams();
  console.log(category);
  const products = [
    {
      imageUrl:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg", // Replace with actual image URL
      title: "CATALOGS",
      shopNowLink: "#",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg", // Replace with actual image URL
      title: "DIRECT MAIL CATALOGS",
      shopNowLink: "#",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg", // Replace with actual image URL
      title: "DIRECT MAIL PERFECT BOUND BOOKLETS",
      shopNowLink: "#",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534158/cld-sample-2.jpg", // Replace with actual image URL
      title: "DIRECT MAIL SADDLE STITCH BOOKLETS",
      shopNowLink: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 text-white text-center">
        Booklet Printing
      </h2>

      {/* Description */}
      <p className="mb-8 text-white">
        We love printing custom booklets. In fact, we pride ourselves on
        delivering high-quality custom booklet printing, completely personalized
        for catalogs, manuals, lookbooks and more. Our ordering process is
        streamlined to ensure excellent customer service and a quick turnaround.
        With binding options ranging from saddle stitched to perfect bound, plus
        an abundance of paper stocks (including recycled), coatings and
        finishes, we guarantee top-notch print quality in every project. This is
        custom printing at its finest, tailored to meet your specific needs.
        <a href="#" className="text-blue-500">
          Get inspired &gt;
        </a>
      </p>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-sm font-bold text-blue-700 mb-1">
                {product.title}
              </h3>
              <a
                href={product.shopNowLink}
                className="text-xs text-blue-500 font-medium hover:underline"
              >
                shop now &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookletProduct;
