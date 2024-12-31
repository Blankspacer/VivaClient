/* eslint-disable react/prop-types */
import { Controller, useFormContext } from "react-hook-form";

const EHSelect = ({
  name,
  title,
  // fullWidth,
  options,
  size = "small",
  required = true,
  onChange,
  defaultValue,
  disabled = false,
}) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  console.log(control);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange: fieldOnChange, ...field },
        fieldState: { error },
      }) => (
        <div>
          <label
            {...field}
            label={title}
            required={required}
            disabled={disabled}
            size={size}
            onChange={(e) => {
              fieldOnChange(e);
              if (onChange) {
                onChange(e.target.value);
              }
            }}
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
              !options && "disabled:opacity-50"
            }`}
          >
            {!options ? (
              <option
                defaultValue={defaultValue}
                className="bg-gray-800 text-white"
              >
                N/A
              </option> // Display N/A when no data
            ) : (
              options.map((option, index) => (
                <option key={index} className="bg-gray-800 text-white">
                  {option.title}
                </option>
              ))
            )}
          </select>
          {isError && (
            <p>{formState.errors[name]?.message || !error?.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default EHSelect;
