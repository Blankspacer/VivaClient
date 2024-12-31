// /* eslint-disable react/prop-types */

// const VivaSelect = ({ title, optionData, name }) => {
//   return (
//     <div>
//       <label
//         htmlFor="finishedSize"
//         className="text-xs font-medium mb-1 flex justify-between items-center"
//       >
//         {/* Finished Size in Inches (W X H) */}
//         {title}
//         <span className="text-blue-500 ml-1 text-xs">?</span>
//       </label>
//       <select
//         id="finishedSize"
//         className={`w-full px-2 py-2 rounded-sm text-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 content-center ${
//           !optionData && "disabled:opacity-50"
//         }`}
//       >
//         {!optionData ? (
//           <option className="bg-gray-800 text-white">N/A</option> // Display N/A when no data
//         ) : (
//           optionData.map((option, index) => (
//             <option key={index} className="bg-gray-800 text-white">
//               {option.title}
//             </option>
//           ))
//         )}
//       </select>
//     </div>
//   );
// };

// export default VivaSelect;

/* eslint-disable react/prop-types */
/*

import { useFormContext, Controller } from "react-hook-form";

const options = [
  {
    key: "key",
    value: "Hello",
  },
  {
    key: "key2",
    value: "Hello",
  },
  {
    key: "key3",
    value: "Hello",
  },
];

const VivaSelect = ({
  name,
  title,
  // options = options,
  size = "small",
  required = true,
  onChange,
  defaultValue = "",
  disabled = false,
}) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <div>
      <label
        label={title}
        required={required}
        disabled={disabled}
        size={size}
        htmlFor="finishedSize"
        className="text-xs font-medium mb-1 flex justify-between items-center"
      >
        {title}
        <span className="text-blue-500 ml-1 text-xs">?</span>
      </label>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange: fieldOnChange, value, ...field } }) => (
          <>
            <select
              value={value}
              onChange={fieldOnChange}
              {...field}
              id="finishedSize"
              className={`w-full px-2 py-2 rounded-sm text-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 content-center ${
                !options && "disabled:opacity-50"
              }`}
            >
              {!options ? (
                <option
                  defaultValue={defaultValue}
                  className="bg-gray-800 text-white"
                >
                  N/A
                </option>
              ) : (
                options.map((option, index) => (
                  <option
                    key={index}
                    value={option.key}
                    className="bg-gray-800 text-white"
                  >
                    {option.value}
                  </option>
                ))
              )}
            </select>
            {isError && <p>{formState.errors[name]?.message || ""}</p>}
          </>
        )}
      />
    </div>
  );
};

export default VivaSelect;

*/
// Select.js

import { Controller } from "react-hook-form";

const VivaSelect = ({
  control,
  name,
  options,
  label,
  defaultValue = "",
  required = false,
  disabled = false,
  size = "medium",
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{ required }}
        render={({ field: { onChange, ...field }, fieldState }) => (
          <>
            <select
              {...field}
              id={name}
              onChange={onChange}
              className={`w-full px-2 py-2 rounded-sm text-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 content-center ${
                size === "small" ? "text-sm" : "text-base"
              } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}`}
              disabled={disabled}
            >
              {!label && (
                <option className="bg-gray-800 text-white" value="" disabled>
                  Select {name}
                </option>
              )}
              {options?.map((option, index) => (
                <option
                  className="bg-gray-800 text-white"
                  key={index}
                  value={option.id ? option.id : name}
                >
                  {option.title}
                </option>
              ))}
            </select>
            {fieldState?.error && (
              <span className="text-red-500 text-sm">
                {fieldState.error.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default VivaSelect;
