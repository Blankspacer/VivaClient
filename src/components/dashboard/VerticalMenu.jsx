// import toast from "react-hot-toast";
import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { GrDocumentConfig } from "react-icons/gr";
import { IoDocuments, IoLocationOutline } from "react-icons/io5";
import {
  MdAddLocationAlt,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdLeaderboard,
  MdNoteAdd,
  MdOutlineDashboardCustomize,
  MdOutlinePostAdd,
} from "react-icons/md";
import { RiBloggerLine, RiLogoutCircleLine } from "react-icons/ri";
import {
  TbLocationHeart,
  TbLocationPlus,
  TbLocationShare,
} from "react-icons/tb";
import { TfiLayoutSlider } from "react-icons/tfi";
import { VscFeedback } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";

const VerticalMenu = () => {
  // handle logout
  //   const handleLogOut = async () => {
  //     const res = await logout();

  //     if (res.success) {
  //       toast.success(res.message);
  //     } else {
  //       toast.error(res.message);
  //     }
  //   };

  return (
    <nav
      className="hs-accordion-group p-6 w-full flex flex-col flex-wrap font-medium"
      data-hs-accordion-always-open
    >
      <ul className="space-y-1.5">
        {/* dashboard */}
        <li>
          <NavLink
            end
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                isActive ? "bg-gray-100  text-[#7e6e2a]" : "text-gray-950"
              }`
            }
          >
            <MdOutlineDashboardCustomize className="text-base text-gray-700" />
            Dashboard
          </NavLink>
        </li>

        {/* Properties */}
        <li className="hs-accordion" id="properties-accordion">
          <button
            type="button"
            className="hs-accordion-toggle hs-accordion-active:text-[#7e6e2a] hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-950 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            aria-expanded="true"
            aria-controls="properties-accordion"
          >
            <GoProjectSymlink className="text-base" />
            Product
            <MdKeyboardArrowUp className="hs-accordion-active:block ms-auto hidden text-gray-600 group-hover:text-gray-500 text-[18px]" />
            <MdKeyboardArrowDown className="hs-accordion-active:hidden ms-auto block text-gray-600 group-hover:text-gray-500 text-[18px]" />
          </button>

          <div
            id="properties-accordion"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            role="region"
            aria-labelledby="properties-accordion"
          >
            <ul className="pt-2 ps-2">
              {/* add */}
              <li>
                <NavLink
                  to="/dashboard/add-product"
                  className={({ isActive }) =>
                    `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                      isActive ? "bg-gray-100  text-[#7e6e2a]" : "text-gray-950"
                    }`
                  }
                >
                  <MdNoteAdd className="text-base text-gray-700" />
                  Add Product
                </NavLink>
              </li>

              {/* all */}
              <li>
                <NavLink
                  to="/dashboard/all-product"
                  className={({ isActive }) =>
                    `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                      isActive ? "bg-gray-100  text-[#7e6e2a]" : "text-gray-950"
                    }`
                  }
                >
                  <IoDocuments className="text-base text-gray-700" />
                  All Product
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* Location */}
        <li className="hs-accordion" id="locations-accordion">
          <button
            type="button"
            className="hs-accordion-toggle hs-accordion-active:text-[#7e6e2a] hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-950 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            aria-expanded="true"
            aria-controls="locations-accordion"
          >
            <IoLocationOutline className="text-base" />
            Category
            <MdKeyboardArrowUp className="hs-accordion-active:block ms-auto hidden text-gray-600 group-hover:text-gray-500 text-[18px]" />
            <MdKeyboardArrowDown className="hs-accordion-active:hidden ms-auto block text-gray-600 group-hover:text-gray-500 text-[18px]" />
          </button>

          <div
            id="locations-accordion"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            role="region"
            aria-labelledby="locations-accordion"
          >
            <ul className="pt-2 ps-2">
              {/* add */}
              <li>
                <NavLink
                  to="/dashboard/add-category"
                  className={({ isActive }) =>
                    `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                      isActive ? "bg-gray-100  text-[#7e6e2a]" : "text-gray-950"
                    }`
                  }
                >
                  <MdAddLocationAlt className="text-base text-gray-700" />
                  Add Category
                </NavLink>
              </li>

              {/* all */}
              <li>
                <NavLink
                  to="/dashboard/all-category"
                  className={({ isActive }) =>
                    `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                      isActive ? "bg-gray-100  text-[#7e6e2a]" : "text-gray-950"
                    }`
                  }
                >
                  <FaLocationDot className="text-base text-gray-700" />
                  All Category
                </NavLink>
              </li>

              <li className="hs-accordion" id="feature-location">
                <button
                  type="button"
                  className="hs-accordion-toggle hs-accordion-active:text-[#7e6e2a] hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-950 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  aria-expanded="true"
                  aria-controls="feature-location"
                >
                  <TbLocationHeart className="text-base " />
                  Feature Location
                  <MdKeyboardArrowUp className="hs-accordion-active:block ms-auto hidden text-gray-600 group-hover:text-gray-500 text-[18px]" />
                  <MdKeyboardArrowDown className="hs-accordion-active:hidden ms-auto block text-gray-600 group-hover:text-gray-500 text-[18px]" />
                </button>

                <div
                  id="feature-location"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                  role="region"
                  aria-labelledby="feature-location"
                >
                  <ul className="pt-2 ps-2">
                    {/* add */}
                    <li>
                      <NavLink
                        to="/dashboard/add-feature-location"
                        className={({ isActive }) =>
                          `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                            isActive
                              ? "bg-gray-100  text-[#7e6e2a]"
                              : "text-gray-950"
                          }`
                        }
                      >
                        <TbLocationPlus className="text-base text-gray-700" />
                        Add
                      </NavLink>
                    </li>

                    {/* all */}
                    <li>
                      <NavLink
                        to="all-feature-location"
                        className={({ isActive }) =>
                          `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                            isActive
                              ? "bg-gray-100  text-[#7e6e2a]"
                              : "text-gray-950"
                          }`
                        }
                      >
                        <TbLocationShare className="text-base text-gray-700" />
                        All
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>

        {/* Blogs */}
        <li className="hs-accordion" id="properties-accordion">
          <button
            type="button"
            className="hs-accordion-toggle hs-accordion-active:text-[#7e6e2a] hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-950 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            aria-expanded="true"
            aria-controls="properties-accordion"
          >
            <RiBloggerLine className="text-base" />
            Blogs
            <MdKeyboardArrowUp className="hs-accordion-active:block ms-auto hidden text-gray-600 group-hover:text-gray-500 text-[18px]" />
            <MdKeyboardArrowDown className="hs-accordion-active:hidden ms-auto block text-gray-600 group-hover:text-gray-500 text-[18px]" />
          </button>

          <div
            id="properties-accordion"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            role="region"
            aria-labelledby="properties-accordion"
          >
            <ul className="pt-2 ps-2">
              {/* add */}
              <li>
                <NavLink
                  to="/dashboard/add-blog"
                  className={({ isActive }) =>
                    `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                      isActive ? "bg-gray-100  text-[#7e6e2a]" : "text-gray-950"
                    }`
                  }
                >
                  <MdOutlinePostAdd className="text-base text-gray-700" />
                  Add
                </NavLink>
              </li>

              {/* all */}
              <li>
                <NavLink
                  to="/dashboard/all-blogs"
                  className={({ isActive }) =>
                    `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                      isActive ? "bg-gray-100  text-[#7e6e2a]" : "text-gray-950"
                    }`
                  }
                >
                  <IoDocuments className="text-base text-gray-700" />
                  All
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* Properties */}
        <li className="hs-accordion" id="others-accordion">
          <button
            type="button"
            className="hs-accordion-toggle hs-accordion-active:text-[#7e6e2a] hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-950 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            aria-expanded="true"
            aria-controls="others-accordion"
          >
            <GrDocumentConfig className="text-base" />
            Others
            <MdKeyboardArrowUp className="hs-accordion-active:block ms-auto hidden text-gray-600 group-hover:text-gray-500 text-[18px]" />
            <MdKeyboardArrowDown className="hs-accordion-active:hidden ms-auto block text-gray-600 group-hover:text-gray-500 text-[18px]" />
          </button>

          <div
            id="others-accordion"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            role="region"
            aria-labelledby="others-accordion"
          >
            <ul className="pt-2 ps-2">
              {/* Feedback */}
              <li>
                <NavLink
                  to="/dashboard/feedbacks"
                  className={({ isActive }) =>
                    `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                      isActive ? "bg-gray-100  text-[#7e6e2a]" : "text-gray-950"
                    }`
                  }
                >
                  <VscFeedback className="text-base text-gray-700" />
                  Feedbacks
                </NavLink>
              </li>

              {/* slider */}
              <li>
                <NavLink
                  to="/dashboard/banner-slider"
                  className={({ isActive }) =>
                    `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                      isActive ? "bg-gray-100  text-[#7e6e2a]" : "text-gray-950"
                    }`
                  }
                >
                  <TfiLayoutSlider className="text-base text-gray-700" />
                  Banner Slider
                </NavLink>
              </li>
              {/* lead */}
              <li>
                <NavLink
                  to="/dashboard/lead"
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-950 rounded-lg hover:bg-gray-100 ${
                      isActive ? "bg-gray-100  text-[#7e6e2a]" : "text-gray-950"
                    }`
                  }
                >
                  <MdLeaderboard className="text-base text-gray-700" />
                  Lead Information
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* home page */}
        <li>
          <Link
            to={"/"}
            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-950 rounded-lg hover:bg-gray-100"
          >
            <FaHome className="text-base" />
            Home
          </Link>
        </li>

        {/* logout */}
        <li>
          <button className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-950 rounded-lg hover:bg-gray-100">
            <RiLogoutCircleLine className="text-base" />
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default VerticalMenu;
