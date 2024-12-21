import { useState } from "react";

const ProductTab = () => {
  const products = [
    {
      id: 1,
      name: "Direct mail",
      category: "BOOKLETS",
      image: "/api/placeholder/280/400",
    },
    {
      id: 2,
      name: "Handcover",
      category: "BROUCHERS",
      image: "/api/placeholder/280/400",
    },
    {
      id: 3,
      name: "Catalogs",
      category: "BUSINESS_CARDS",
      image: "/api/placeholder/280/400",
    },
    {
      id: 4,
      name: "Paper back Books",
      category: "CARDS_AND_INVITATIONS",
      image: "/api/placeholder/280/400",
    },
    {
      id: 5,
      name: "Banner Display",
      category: "SINGS_BANNER_DISPLAY",
      image: "/api/placeholder/280/400",
    },
  ];

  const tabs = [
    { id: "SHOW_ALL", label: "SHOW ALL" },
    { id: "BOOKLETS", label: "BOOKLETS" },
    { id: "ADVERTISING_ESSENTIALS", label: "ADVERTISING ESSENTIALS" },
    { id: "BROUCHERS", label: "BROUCHERS" },
    { id: "BUSINESS_CARDS", label: "BUSINESS CARDS" },
    { id: "CARDS_AND_INVITATIONS", label: "CARDS AND INVITATIONS" },
    { id: "BUSINESS_ESSENTIALS", label: "BUSINESS ESSENTIALS" },
    { id: "SINGS_BANNER_DISPLAY", label: "SINGS BANNER DISPLAY" },
  ];

  const [activeTab, setActiveTab] = useState("SHOW_ALL");

  const filteredProducts = products.filter((product) =>
    activeTab === "SHOW_ALL" ? true : product.category === activeTab
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Products & Services
      </h1>

      {/* tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm transition-colors
              ${
                activeTab === tab.id
                  ? " text-orange-600 border border-orange-600"
                  : " text-white border border-gray-600 hover:border-orange-600 hover:text-orange-600"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <div className="mt-4 mb-4">
              <h3 className="text-lg font-medium text-center text-gray-600">
                {product.name}
              </h3>
            </div>
            <div className="group rounded-lg border border-gray-200 bg-white shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
              <div className="p-4">
                <div className="relative aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <button className="w-full mt-2 py-2 text-gray-100 hover:text-gray-200 transition-colors">
              shop now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTab;
