import PropTypes from "prop-types";

const Heading = ({ title, style }) => {
  return (
    <h3
      className={`${
        style ? style : "font-semibold text-2xl md:text-4xl"
      } text-gray-900`}
    >
      {title}
    </h3>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  style: PropTypes.string,
};

export default Heading;
