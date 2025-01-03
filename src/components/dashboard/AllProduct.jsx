import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../ui/Loading";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import EditProductModal from "./EditProductModal";

const AllProduct = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: productsData,
    refetch: productReFetch,
    isLoading: productLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/api/products");
      return data;
    },
  });

  if (productLoading) {
    return <Loading />;
  }

  console.log(productsData);

  const handleDelete = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/api/products/${id}`);
      if (data.success) {
        toast.success("Product deleted successfully");
        productReFetch();
      }
    } catch (error) {
      toast.error("Failed to delete product");
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Product Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Base Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ratings
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {productsData?.data?.map((product) => (
              <tr key={product._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product?.images[0].url}
                      alt={product?.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product?.category?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${product?.basePrice}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product?.rating}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center space-x-4">
                    <EditProductModal data={product} refetch={productReFetch} />
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProduct;
