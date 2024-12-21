import PropTypes from "prop-types";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const SectionContent = ({
  containerStyle,
  title,
  para,
  titleStyle,
  paraStyle,
}) => {
  return (
    <div
      className={`${
        containerStyle ? containerStyle : "max-w-2xl mx-auto"
      } space-y-1 mb-10 lg:mb-14 text-center`}
    >
      {/* heading */}
      <Heading title={title} style={titleStyle} />

      {/* paragraph */}
      {para && <Paragraph para={para} style={paraStyle} />}
    </div>
  );
};

SectionContent.propTypes = {
  containerStyle: PropTypes.string,
  titleStyle: PropTypes.string,
  paraStyle: PropTypes.string,
  title: PropTypes.string,
  para: PropTypes.string,
};

export default SectionContent;
