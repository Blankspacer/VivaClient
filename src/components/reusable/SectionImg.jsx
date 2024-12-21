import PropTypes from "prop-types";

const SectionImg = ({ data }) => {
  const { src, alt } = data || {};

  return (
    <div>
      <img src={src} alt={alt} className="h-full object-cover w-full" />
    </div>
  );
};

SectionImg.propTypes = {
  data: PropTypes.object,
};

export default SectionImg;
