import VivaSelect from "../common/VivaSelect";

const sizeData = [
  { title: "8.5 x 11" },
  { title: "8.5 x 14" },
  { title: "11 x 17" },
  { title: "12 x 18" },
  { title: "13 x 19" },
  { title: "Custom Size}" },
];

const paperStockData = [
  { title: "Coated Gloss - White" },
  { title: "Coated Matte - White" },
  { title: "Uncoated - White" },
  { title: "Uncoated - Natural" },
  { title: "Uncoated - Bright White" },
  { title: "Uncoated - Cream" },
  { title: "Uncoated - Gray" },
  { title: "Uncoated - Ivory" },
  { title: "Uncoated - Pastel Blue" },
  { title: "Uncoated - Pastel Green" },
  { title: "Uncoated - Pastel Pink" },
];

const paperCoatingData = [
  { title: "N/A For Selected Weight" },
  { title: "N/A For Selected Weight" },
];

const ProductCustomization = () => {
  return (
    <div className="p-6 shadow-md w-full max-w-2xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-2">Sell Sheets</h1>
      <div className="flex items-center mb-4">
        <span className="text-xl font-bold mr-2">$52.47</span>
        <span className="text-gray-200 text-sm mr-2">QTY: 100</span>
        <span className="text-gray-200 text-sm">UNIT PRICE: $0.52</span>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-yellow-400 mr-1">★★★★☆</span>{" "}
        {/* Use stars directly */}
        <span className="text-blue-500 mr-2 text-sm">125 Reviews</span>
        <span className="text-blue-500 text-sm">Write a Review</span>
      </div>

      <p className="mb-6 text-sm">
        Get your messages across succinctly and strategically with Sell Sheets.
        Also known as one sheets, they&apos;re a simple advertising tool with
        high-impact dividends to help you market products, promotions and
        services. Our business printing services let you customize yours for any
        business need, with premium stocks and protective coatings. You can even
        create marketing one sheets with variable data to tailor designs to
        targeted audiences.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Printing</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <VivaSelect
              title="Finished Size in Inches (W X H)"
              optionData={sizeData}
            />

            <button className="text-blue-500 text-xs mt-1">
              Use Custom Dimensions
            </button>
          </div>

          <div>
            <label
              htmlFor="finishedSize"
              className="text-xs font-medium mb-1 flex justify-between items-center"
            >
              Total Quantity
            </label>

            <input
              type="number"
              className="w-full px-2 py-2 rounded-sm text-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 content-center"
            />
            <button className="text-blue-500 text-xs mt-1">Add Versions</button>
          </div>
          <VivaSelect title="Paper Stock" optionData={paperStockData} />
          <VivaSelect title="Paper Weight" optionData={paperStockData} />

          <VivaSelect
            title="Printing on the Front"
            optionData={[{ title: "Full Color" }, { title: "Black Only" }]}
          />

          <VivaSelect
            title="Printing on the Back"
            optionData={[
              { title: "None" },
              { title: "Full Color" },
              { title: "Black Only" },
            ]}
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Finishing</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Finishing Options */}

          <VivaSelect title="Coating" optionData={paperCoatingData} />

          <VivaSelect title="Laminating" optionData={paperCoatingData} />

          <VivaSelect title="Perforating" />

          <VivaSelect title="Variable Data Personalization" />

          <VivaSelect title="Drilling Options" />

          <VivaSelect title="Rounded Corners" optionData={paperCoatingData} />

          <VivaSelect title="Shrink-wrapping service" />
        </div>
      </div>
    </div>
  );
};

export default ProductCustomization;
