const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534131/samples/ecommerce/leather-bag-gray.jpg",
      title: "Booklets",
      description:
        "At Viva Printing Press we have modern printing machine for booklet printing. The quality is ensured. Get the best printing service from us.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534159/cld-sample-5.jpg",
      title: "Marketing Essentials",
      description:
        "Are you looking for custom sign printing service? Then Viva pritnting Pack is the right choice for you.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534159/cld-sample-5.jpg",
      title: "Brouchers",
      description:
        "We provide lookrative and Dynamic brouchers for your company.We always esure the printing and paper quality",
    },
  ];

  return (
    <div className=" text-white py-16 px-4">
      <h2 className="text-4xl uppercase font-bold text-center mb-16">
        Our featured Products
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col h-full">
            <div className="relative aspect-[4/3] mb-6">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-center mb-4">
                {product.title}
              </h3>

              <p className="text-gray-400 text-center mb-6 flex-grow">
                {product.description}
              </p>

              <div className="text-center mt-auto">
                <button
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                  onClick={() =>
                    console.log(`Learn more about ${product.title}`)
                  }
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
