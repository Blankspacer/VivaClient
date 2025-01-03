/* eslint-disable no-unused-vars */
import Loading from "@/components/ui/Loading";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [quantity, setQuantity] = useState(100);

  const {
    data: cart,
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/api/cart`);
      return data.data;
    },
  });

  // Mutation for deleting an item from the cart
  const deleteMutation = useMutation({
    mutationFn: async (itemId) => {
      const { data } = await axiosSecure.delete(`/api/cart/${itemId}`);
      return data;
    },
    onSuccess: () => {
      toast.success("Item removed from cart");
      queryClient.invalidateQueries(["products"]); // Refetch cart data
    },
    onError: (error) => {
      toast.error("Failed to remove item from cart");
      console.error(error);
    },
  });

  const handleDelete = (itemId) => {
    deleteMutation.mutate(itemId);
  };

  if (isError) {
    return (
      <h1 className="mt-16 mb-8 text-4xl font-extrabold text-red-500 min-w-full text-center align-middle place-content-center">
        Failed to fetch products. Please try again later.
      </h1>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  console.log(cart);

  const total = (cart || [])?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.totalPrice;
  }, 0);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10) || 0;
    setQuantity(newQuantity);
  };

  return (
    <div className="container mx-auto p-4 min-h-fit my-10">
      <div className="flex flex-col md:flex-row">
        {/* Main Cart Area */}
        <div className="md:w-3/4 pr-4">
          <div className="mb-4">
            <a href="#" className="text-blue-500 hover:underline">
              &lt; Continue Shopping
            </a>
          </div>

          <div className="p-4 text-white shadow bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
            <h2 className="text-lg font-semibold mb-2">SHOPPING CART</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-black">
                    <th className="py-2 px-4 text-left"></th>
                    <th className="py-2 px-4 text-left">QUANTITY</th>
                    <th className="py-2 px-4 text-left">PRICE</th>
                    <th className="py-2 px-4 text-left">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {cart && cart.length > 0 ? (
                    cart.map((data) => (
                      <tr key={data._id}>
                        <td className="py-4 px-4 border-b">
                          <div className="flex items-center">
                            <span className="mr-2">{data?.name}</span>
                            <button className="text-xs text-blue-500">
                              [ {data?.name} ]
                            </button>
                          </div>
                          <div className="flex items-center mt-2">
                            <button className="text-xs text-blue-500 mr-2">
                              configuration
                            </button>
                            <button className="text-xs text-blue-500 mr-2">
                              duplicate
                            </button>
                            <button className="text-xs text-blue-500">
                              save for later
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-4 border-b">
                          <input
                            type="number"
                            min="0"
                            value={data?.quantity}
                            onChange={handleQuantityChange}
                            className="w-20 border rounded px-2 py-1 text-black"
                          />
                        </td>
                        <td className="py-4 px-4 border-b">
                          $
                          {Math.ceil(
                            Number(data?.basePrice) * Number(data?.quantity)
                          )}
                        </td>
                        <td className="py-4 px-4 border-b">
                          <button
                            onClick={() => handleDelete(data._id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        <h1 className="text-3xl text-red-500">
                          No Product in Cart
                        </h1>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Summary Area */}
        <div className="md:w-1/4 pl-4 mt-4 md:mt-0">
          <div className="p-4 text-white shadow bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
            <div className="mb-4">
              <input
                type="text"
                placeholder="PROMO CODE"
                className="w-full border rounded px-2 py-1 mb-2"
              />
              <button className="bg-blue-500 text-white px-4 py-1 rounded w-full hover:bg-blue-700">
                APPLY
              </button>
            </div>
            <div className="mb-2">SUBTOTAL: ${total}</div>
            <div className="mb-2">ESTIMATE DELIVERY: $--</div>
            <div className="mb-2">SALES TAX: $-</div>
            <div className="font-semibold">TOTAL: ${total}</div>
            <Link to="/cart/checkout">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-700">
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
