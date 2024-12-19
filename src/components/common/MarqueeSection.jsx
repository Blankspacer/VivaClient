import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <Marquee className="h-20">
      <div className="flex gap-5 ">
        <img
          className="h-14"
          src="https://www.react-fast-marquee.com/static/media/dell.09332c44.png"
          alt=""
        />
        <img
          className="h-14"
          src="https://www.react-fast-marquee.com/static/media/ibm.bcec6b9a.png"
          alt=""
        />
        <img
          className="h-14"
          src="https://www.react-fast-marquee.com/static/media/nasa.3bf5af29.png"
          alt=""
        />
        <img
          className="h-14"
          src="https://www.react-fast-marquee.com/static/media/us_navy.331c47b8.png"
          alt=""
        />
        <img
          className="h-14"
          src="https://www.react-fast-marquee.com/static/media/mit.1af911d7.png"
          alt=""
        />
      </div>
    </Marquee>
  );
};

export default MarqueeSection;
