/* eslint-disable react/prop-types */

const VivaSelect = ({ title, optionData }) => {
  return (
    <div>
      <label
        htmlFor="finishedSize"
        className="text-xs font-medium mb-1 flex justify-between items-center"
      >
        {/* Finished Size in Inches (W X H) */}
        {title}
        <span className="text-blue-500 ml-1 text-xs">?</span>
      </label>
      <select
        id="finishedSize"
        className={`w-full px-2 py-2 rounded-sm text-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 content-center ${
          !optionData && "disabled:opacity-50"
        }`}
      >
        {!optionData ? (
          <option className="bg-gray-800 text-white">N/A</option> // Display N/A when no data
        ) : (
          optionData.map((option, index) => (
            <option key={index} className="bg-gray-800 text-white">
              {option.title}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default VivaSelect;
