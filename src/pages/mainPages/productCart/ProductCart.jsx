import { useState } from "react";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(100);
  const pricePerItem = 1.8704; // Price per catalog (187.04 / 100)
  const subtotal = quantity * pricePerItem;

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
              {" "}
              {/* Added for horizontal scrolling */}
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-black">
                    <th className="py-2 px-4 text-left"></th>
                    <th className="py-2 px-4 text-left">QUANTITY</th>
                    <th className="py-2 px-4 text-left">PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 px-4 border-b">
                      <div className="flex items-center">
                        <span className="mr-2">Catalogs</span>
                        <button className="text-xs text-blue-500">
                          [ CATALOGS ]
                        </button>
                      </div>
                      <div className="flex items-center mt-2">
                        {/* <button className="text-xs text-blue-500 mr-2">
                          ADD FILE[S]
                        </button> */}
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
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-20 border rounded px-2 py-1 text-black"
                      />
                    </td>
                    <td className="py-4 px-4 border-b">
                      ${pricePerItem.toFixed(2)}
                    </td>
                  </tr>
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
            <div className="mb-2">SUBTOTAL: ${subtotal.toFixed(2)}</div>
            <div className="mb-2">ESTIMATE DELIVERY: $--</div>
            <div className="mb-2">SALES TAX: $-</div>
            <div className="font-semibold">TOTAL: ${subtotal.toFixed(2)}</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-700">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
