/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Controller, useFormContext } from "react-hook-form";

const VivaInput = ({
  name,
  required = "false",
  label,
  size = "small",
  className,
  // fullWidth = true,
  type = "text",
  placeholder,
  disabled = false,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <input
          {...field}
          required={required}
          placeholder={placeholder || label}
          type={type}
          label={label}
          size={size}
          disabled={disabled}
          className={`w-full px-2 py-2 rounded-sm text-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400 content-center ${className}`}
        />
      )}
    />
  );
};

export default VivaInput;
