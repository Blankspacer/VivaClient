import { RiSidebarFoldFill } from "react-icons/ri";

const SmallDevice = () => {
  return (
    <header className="z-[300] bg-gray-50 border-b-2 border-[#7e6e2a] fixed top-0 w-full text-gray-900 flex justify-between px-[5%] py-2 lg:hidden">
      {/* logo */}
      <h1>Viva</h1>

      {/* button */}
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-offcanvas-example"
        aria-label="Toggle navigation"
        data-hs-overlay="#hs-offcanvas-example"
      >
        <RiSidebarFoldFill className="text-2xl sm:text-3xl text-[#7e6e2a]" />
      </button>
    </header>
  );
};

export default SmallDevice;
