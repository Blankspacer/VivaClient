/* eslint-disable no-unused-vars */
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../ui/Loading";
import { generateTabs, transformProducts } from "@/helpers/transformProduct";

const ProductTab = () => {
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();
  const [activeTab, setActiveTab] = useState("SHOW_ALL");
  // const { data, refetch, isLoading } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: async () => {
  //     const { data } = await axiosSecure.get("/api/categories");
  //     console.log(data.data);
  //     return data;
  //   },
  // });

  const {
    data: productsData,
    refetch: productReFetch,
    isLoading: productLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/api/products");

      return data;
    },
  });

  // if (isLoading) {
  //   return <Loading />;
  // }

  if (productLoading) {
    return <Loading />;
  }

  // console.log({ data });

  const products = transformProducts(productsData);
  const tabs = generateTabs(productsData);

  console.log({ products, tabs });

  const filteredProducts = products.filter((product) =>
    activeTab === "SHOW_ALL" ? true : product.category === activeTab
  );

  const handleProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center uppercase mb-8 text-white">
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

      {/* cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} onClick={() => handleProduct(product.id)}>
              <div className="mt-4 mb-4">
                <h3 className="text-lg font-medium text-center text-gray-600">
                  {product.name}
                </h3>
              </div>
              <div className="group rounded-lg shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative aspect-[3/4]">
                  <img
                    src={product.image.url}
                    alt={product.name}
                    className="w-full h-full object-cover bg-white rounded-lg"
                  />
                </div>
              </div>
              <button
                onClick={() => handleProduct(product.id)}
                className="w-full mt-2 py-2 text-gray-100 hover:text-gray-200 transition-colors"
              >
                shop now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="mt-16 mb-8 text-4xl font-extrabold text-red-500 min-w-full text-center align-middle  place-content-center">
          No products in this Category
        </h1>
      )}
    </div>
  );
};

export default ProductTab;
