import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const SocialShare = () => {
  const shareUrl = window.location.href;
  const title = "Sufiza Property - Your Dream Home Awaits";

  return (
    <div className="flex gap-1">
      <div>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <div>
          <FacebookShareCount url={shareUrl} className="">
            {(count) => count}
          </FacebookShareCount>
        </div>
      </div>

      {/* <div>
        <FacebookMessengerShareButton url={shareUrl} appId="521270401588372">
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
      </div> */}

      <div>
        <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>

      {/* <div>
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body={`Check out this amazing property: ${shareUrl}`}
          onClick={() => {
            if (!window.navigator.userAgent.includes("Mobile")) {
              window.location.href = `mailto:?subject=${encodeURIComponent(
                title
              )}&body=${encodeURIComponent(
                `Check out this amazing property: ${shareUrl}`
              )}`;
            }
          }}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div> */}

      <div>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default SocialShare;
