import PropTypes from "prop-types";

const Paragraph = ({ para, style }) => {
  return <p className={`${style ? style : ""} text-gray-950`}>{para}</p>;
};

Paragraph.propTypes = {
  para: PropTypes.string,
  style: PropTypes.string,
};

export default Paragraph;
