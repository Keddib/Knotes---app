import { ReactComponent as Filter } from "src/assets/icons/settings-sliders.svg";
import { NavLink } from "react-router-dom";
import Note from "./note";

export default function Home() {
  return (
    <div className="h-full max-h-full rounded-3xl px-4 pt-10 overflow-hidden flex flex-col gap-2">
      <div className="flex justify-between items-center py-4 px-6 bg-white rounded-3xl shadow-sm">
        <nav>
          <ul className="flex items-start gap-10">
            <li className="text-black/50 font-semibold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-orange p-2 px-4 rounded-xl text-black"
                    : "hover:bg-orange/50 p-2 px-4 rounded-xl hover:text-black"
                }
              >
                All
              </NavLink>
            </li>
            <li className="text-black/50 font-semibold">
              <NavLink
                to="personal"
                className={({ isActive }) =>
                  isActive
                    ? "bg-grey p-2 px-4 rounded-xl text-black"
                    : "hover:bg-grey/50 p-2 px-4 rounded-xl hover:text-black"
                }
              >
                Personal
              </NavLink>
            </li>
            <li className="text-black/50 font-semibold">
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue p-2 px-4 rounded-xl text-black"
                    : "hover:bg-blue/50 p-2 px-4 rounded-xl hover:text-black"
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="text-black/50 font-semibold">
              <NavLink
                to="business"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red/30 p-2 px-4 rounded-xl text-black"
                    : "hover:bg-red/20 p-2 px-4 rounded-xl hover:text-black"
                }
              >
                Business
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="group p-2 rounded-xl hover:bg-orange/50"
        >
          <Filter className="w-5 h-5 fill-black/50 group-hover:fill-black" />
        </button>
      </div>
      <div className="overflow-auto grow ">
        <ul className="flex items-center flex-wrap">
          <li>
            <Note />
          </li>
          <li>
            <Note />
          </li>
          <li>
            <Note />
          </li>
          <li>
            <Note />
          </li>
        </ul>
      </div>
    </div>
  );
}
