/* eslint-disable react/prop-types */
const PriceDisplay = ({ cost }) => {
  console.log(cost);
  return (
    <div className="mb-4 text-white">
      <div className=" text-sm mb-1">INSTANT QUOTE:</div>
      <div className="text-3xl font-bold text-blue-500">${cost?.total}</div>
      <div className="text-sm  mt-1">
        <span>UNIT COST: ${cost?.unitCost}</span>
        <span className="mx-2">|</span>
        <a href="#" className="text-blue-500 hover:underline">
          Estimate Shipping
        </a>
      </div>
    </div>
  );
};

export default PriceDisplay;
