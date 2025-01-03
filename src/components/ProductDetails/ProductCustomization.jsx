/* eslint-disable react/prop-types */
import VivaSelect from "../common/VivaSelect";
import VivaForm from "../Forms/VivaForm";

const sizeData = [
  { title: "8.5 x 11", value: "8.5 x 11" },
  { title: "8.5 x 14", value: "8.5 x 11" },
  { title: "11 x 17", value: "8.5 x 11" },
  { title: "12 x 18", value: "12 x 18" },
  { title: "13 x 19", value: "13 x 19" },
  { title: "Custom Size}" },
];

const paperStockData = [
  { title: "Coated Gloss - White", value: "gloss" },
  { title: "Coated Matte - White", value: "matte" },
  { title: "Uncoated - White", value: "white" },
  { title: "Uncoated - Natural", value: "natural" },
  { title: "Uncoated - Bright White", value: "bright" },
  { title: "Uncoated - Cream", value: "cream" },
  { title: "Uncoated - Gray", value: "gray" },
  { title: "Uncoated - Ivory", value: "ivory" },
  { title: "Uncoated - Pastel Blue", value: "blue" },
  { title: "Uncoated - Pastel Green", value: "green" },
  { title: "Uncoated - Pastel Pink", value: "pink" },
];

const paperCoatingData = [
  { title: "N/A For Selected Weight", value: "n/a" },
  { title: "N/A For Selected Weight", value: "n/a" },
];

const ProductCustomization = ({ data }) => {
  console.log(data);
  const totalPrice = Math.ceil(
    Number(data?.basePrice) * Number(data?.pricingTiers[0].minQuantity)
  );

  const generateStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating || 0);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push("★");
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push("★");
      } else {
        stars.push("☆");
      }
    }
    return stars.join("");
  };

  const handleProduct = (data) => {
    console.log(data);
  };
  return (
    <div className="p-6 shadow-md w-full max-w-2xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-2">{data?.name}</h1>
      <div className="flex items-center mb-4">
        <span className="text-xl font-bold mr-2">${totalPrice}</span>
        <span className="text-gray-200 text-sm mr-2">
          QTY: {data?.pricingTiers[0].minQuantity}
        </span>
        <span className="text-gray-200 text-sm">
          UNIT PRICE: ${data?.basePrice}
        </span>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-yellow-400 mr-1">
          {generateStars(data?.rating || 4)}
        </span>

        <span className="text-blue-500 mr-2 text-sm">125 Reviews</span>
        <span className="text-blue-500 text-sm">Write a Review</span>
      </div>

      <p className="mb-6 text-sm">{data?.description}</p>

      <VivaForm onSubmit={handleProduct}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Printing</h2>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div>
              <VivaSelect
                label="Finished Size in Inches (W X H)"
                options={sizeData}
                name="size"
              />

              <button className="text-blue-500 text-xs mt-1">
                Use Custom Dimensions
              </button>
            </div>

            <div className="">
              <label
                htmlFor="finishedSize"
                className="text-xs font-semibold mb-4"
              >
                Total Quantity
              </label>

              <input
                type="number"
                className="w-full px-2 py-2 rounded-sm text-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 content-center"
              />
              <button className="text-blue-500 text-xs mt-1">
                Add Versions
              </button>
            </div>
            <VivaSelect
              label="Paper Stock"
              name="stock"
              options={paperStockData}
            />
            <VivaSelect
              label="Paper Weight"
              name="weight"
              options={paperStockData}
            />

            <VivaSelect
              label="Printing on the Front"
              name="front"
              options={[
                { title: "Full Color", value: "full" },
                { title: "Black Only", value: "black" },
              ]}
            />

            <VivaSelect
              label="Printing on the Back"
              name="back"
              options={[
                { title: "None", value: "n/a" },
                { title: "Full Color", value: "full" },
                { title: "Black Only", value: "black" },
              ]}
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Finishing</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Finishing Options */}

            <VivaSelect
              label="Coating"
              name="coat"
              options={paperCoatingData}
            />

            <VivaSelect
              label="Laminating"
              name="laminate"
              options={paperCoatingData}
            />

            <VivaSelect label="Perforating" name="perforate" />

            <VivaSelect label="Variable Data Personalization" name="size" />

            <VivaSelect label="Drilling Options" name="size" />

            {/* <VivaSelect
              label="Rounded Corners"
              name="size"
              options={paperCoatingData}
            />

            <VivaSelect
              label="Shrink-wrapping service"
              name="size"
              options={paperCoatingData}
            /> */}
            {/* <VivaInput className="text-red-500" name={"name"} label={"Name"} /> */}
          </div>
          <button type="submit">Submit</button>
        </div>
      </VivaForm>
    </div>
  );
};

export default ProductCustomization;
