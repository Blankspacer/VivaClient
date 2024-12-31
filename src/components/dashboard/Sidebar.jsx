import SmallDevice from "./SmallDevice";
import VerticalMenu from "./VerticalMenu";

const SidebarNav = () => {
  return (
    <>
      <SmallDevice />

      <div
        id="hs-offcanvas-example"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[150] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
        role="dialog"
        aria-label="Sidebar"
      >
        {/* logo */}
        <div className="px-6">
          <h1>Viva</h1>
        </div>

        {/* menu */}
        <VerticalMenu />
      </div>
    </>
  );
};

export default SidebarNav;
