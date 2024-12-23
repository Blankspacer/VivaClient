const Turnaround = () => {
  return (
    <div className="p-6 ">
      <h2 className="text-xl font-semibold mb-4">Turnaround</h2>

      <div className="text-white p-4  mb-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
        <div className="flex gap-4  items-center">
          <div>
            <h3 className="text-sm font-medium text-center mb-1">
              Print & Coating Sample Sheet
            </h3>
            <p className="text-xs text-center text-white">
              Review your colors, designs, image resolution and more. <br />
              (Note: This is NOT your proof. Select your proof in the Proof
              dropdown.)
            </p>
          </div>
          <button className="border border-blue-500 text-blue-500 px-4 py-0.5 rounded-lg text-xs hover:border-blue-700 hover:text-blue-700">
            VIEW SAMPLE SHEET
          </button>
        </div>
      </div>

      <div className="flex justify-between mb-4">
        <div className="flex items-start gap-1 flex-col">
          <label htmlFor="proof" className="mr-2 text-xs font-medium">
            Proof
          </label>
          <select
            id="proof"
            className="px-2 py-2 rounded-sm text-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 content-center"
          >
            <option className="bg-gray-800 text-white">No Proof Needed</option>
            <option className="bg-gray-800 text-white">Pdf Soft Proof</option>
          </select>
        </div>
        <div className="flex items-start gap-1 flex-col">
          <label htmlFor="productionTime" className="mr-2 text-sm font-medium">
            Production Time
          </label>
          <select
            id="proof"
            className="px-2 py-2 rounded-sm text-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 content-center"
          >
            <option className="bg-gray-800 text-white">2 Business Days</option>
            <option className="bg-gray-800 text-white">1 Business Days</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 text-center">
        <div className="border border-gray-300 rounded-lg h-[200px] p-4">
          <div className="text-blue-500 text-4xl mb-2">
            {/* Replace with your icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 01-1.141-8.419m0 0A4.5 4.5 0 0112 19.5c0 .993.24 1.92.66 2.75m0 0a4.5 4.5 0 01-2.01-1.426m0 0c-.013-.004-.026-.004-.039-.008m0 0a4.5 4.5 0 01-1.431 1.985"
              />
            </svg>
          </div>
          <h4 className="font-medium text-xs mb-1">SUBMIT ORDER & ARTWORK</h4>
          <p className="text-xs ">
            Upload your artwork on the shopping cart page and submit your order.
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg h-[200px] p-4">
          <div className="text-blue-500 text-4xl mb-2">
            {/* Replace with your icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h4 className="font-medium text-xs mb-1">YOUR ORDER GETS PRODUCED</h4>
          <p className="text-xs ">
            Your order goes through our production process.
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg h-[200px] p-4">
          <div className="text-blue-500 text-4xl mb-2">
            {/* Replace with your icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12h3m-3 0v4m0-4H9m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h4 className="font-medium text-xs mb-1">ORDER LEAVES OUR SHOP</h4>
          <p className="text-xs ">
            After production has been complete, your order gets shipped!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Turnaround;
