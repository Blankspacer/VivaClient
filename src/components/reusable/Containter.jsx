import PropTypes from "prop-types";

const Containter = ({ children, style }) => {
  return (
    <section
      className={`container w-[85%] mx-auto ${
        style ? style : "py-10 lg:py-20"
      }`}
    >
      {children}
    </section>
  );
};

Containter.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
};

export default Containter;
