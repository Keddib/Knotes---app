import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "src/assets/icons/arrow-small-right.svg";
import { ReactComponent as Notes } from "src/assets/icons/apps.svg";
import { ReactComponent as Tags } from "src/assets/icons/tags.svg";
import { ReactComponent as Box } from "src/assets/icons/box.svg";
import { ReactComponent as Trash } from "src/assets/icons/trash.svg";
import { ReactComponent as Add } from "src/assets/icons/add.svg";
import { useState, useRef, useEffect } from "react";
import useOutsideClick from "src/hooks/useClickOutside";

export default function SideBar() {
  const [extanded, setExtanded] = useState(false);
  const SideRef = useRef(null);
  const clickOutSide = useOutsideClick(SideRef);

  useEffect(() => {
    if (clickOutSide) {
      setExtanded(false);
    }
  }, [clickOutSide]);

  return (
    <aside
      ref={SideRef}
      className={`absolute top-0 left-0 h-full transition-all duration-200 bg-grey ${
        extanded ? "w-52 shadow-xl" : "w-20"
      }`}
    >
      <div className="mx-4 mt-8">
        <div className="flex justify-end items-center w-full bg-white rounded-xl hover:bg-orange/50 shadow-sm">
          <button
            onClick={() => setExtanded(!extanded)}
            type="button"
            className="flex justify-center items-center p-2 "
          >
            <Arrow
              className={`w-6 h-6 fill-black/80 hover:fill-black transition-all duration-500 ${
                extanded && "rotate-180 mr-2"
              }`}
            />
          </button>
        </div>
        <nav className="mt-10">
          <ul className="flex flex-col gap-6 bg-white rounded-xl py-6 shadow-sm">
            <li className={` ${extanded && "ml-2"}`}>
              <NavLink
                to="/notes"
                className={({ isActive }) => {
                  const str = isActive ? "bg-orange" : "";
                  return `flex justify-start items-center gap-2 p-2 hover:bg-orange/50 rounded-xl w-fit ml-1 ${str}`;
                }}
              >
                <Notes className="w-6 h-6 fill-black/80 hover:fill-black" />
                <span
                  className={`whitespace-nowrap ${
                    extanded ? "block" : "hidden"
                  }`}
                >
                  All Notes
                </span>
              </NavLink>
            </li>
            <li className={` ${extanded && "ml-2"}`}>
              <NavLink
                to="/tags"
                className={({ isActive }) => {
                  const str = isActive ? "bg-orange" : "";
                  return `flex justify-start items-center gap-2 p-2 hover:bg-orange/50 rounded-xl w-fit ml-1 ${str}`;
                }}
              >
                <Tags className="w-6 h-6 fill-black/80 hover:fill-black" />
                <span
                  className={`transition-all duration-200 ${
                    extanded ? "block" : "hidden"
                  }`}
                >
                  Tags
                </span>
              </NavLink>
            </li>
            <li className={` ${extanded && "ml-2"}`}>
              <NavLink
                to="/archive"
                className={({ isActive }) => {
                  const str = isActive ? "bg-orange" : "";
                  return `flex justify-start items-center gap-2 p-2 hover:bg-orange/50 rounded-xl w-fit ml-1 ${str}`;
                }}
              >
                <Box className="w-6 h-6 fill-black/80 hover:fill-black" />
                <span className={`${extanded ? "block" : "hidden"}`}>
                  Archive
                </span>
              </NavLink>
            </li>
            <li className={` ${extanded && "ml-2"}`}>
              <NavLink
                to="/trash"
                className={({ isActive }) => {
                  const str = isActive ? "bg-orange" : "";
                  return `flex justify-start items-center gap-2 p-2 hover:bg-orange/50 rounded-xl w-fit ml-1 ${str}`;
                }}
              >
                <Trash className="w-6 h-6 fill-black/80 hover:fill-black" />
                <span className={`${extanded ? "block" : "hidden"}`}>
                  Trash
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="mt-10 bg-white rounded-xl w-full overflow-hidden hover:bg-orange shadow-sm">
          <button
            type="button"
            className={`flex justify-start items-center gap-2 p-1 ${
              extanded && "ml-4 pl-0"
            }`}
          >
            <Add className="w-10 h-10 fill-black/80 hover:fill-black min-w-10" />
            <span
              className={`whitespace-nowrap ${extanded ? "block" : "hidden"}`}
            >
              New Note
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
