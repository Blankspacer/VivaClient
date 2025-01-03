/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Controller, useFormContext } from "react-hook-form";

const VivaInput = ({
  name,
  required = "false",
  label,
  addLabel = false,
  size = "small",
  className,
  defaultValue,
  type = "text",
  placeholder,
  disabled = false,
  hidden = false,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div style={{ display: hidden ? "none" : "block" }}>
          {addLabel && label && (
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
          )}
          <input
            {...field}
            required={required}
            placeholder={placeholder || label}
            type={type}
            size={size}
            disabled={disabled}
            className={`w-full px-2 py-2 rounded-sm text-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400 content-center ${className}`}
          />
        </div>
      )}
    />
  );
};

export default VivaInput;
