import PropTypes from "prop-types";

const Button = ({ label, style }) => {
  return (
    <span
      className={`${
        style ? style : "text-gray-900 hover:text-white bg-transparent"
      } py-1.5 px-4 relative group overflow-hidden font-medium  inline-block uppercase rounded-sm  border-[#7e6e2a] border hover:border-[#7e6e2a] bg-[#7e6e2a]  `}
    >
      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-[#7e6e2a] group-hover:h-full opacity-90"></span>
      <span className="relative tracking-[2px] text-sm">{label}</span>
    </span>
  );
};

Button.propTypes = {
  label: PropTypes.any,
  style: PropTypes.any,
};

export default Button;
