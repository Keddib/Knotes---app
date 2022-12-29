import { ReactComponent as MoreIcon } from "src/assets/icons/more.svg";
import { ReactComponent as Box } from "src/assets/icons/box.svg";
import { ReactComponent as Trash } from "src/assets/icons/trash.svg";
import { ReactComponent as Edit } from "src/assets/icons/edit.svg";
import useOutsideClick from "src/hooks/useClickOutside";
import { useState, useRef, useEffect } from "react";

export default function More() {
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef(null);
  const outSideClick = useOutsideClick(moreRef);

  useEffect(() => {
    if (outSideClick) {
      setShowMore(false);
    }
  }, [outSideClick]);

  return (
    <div className="relative">
      <button
        ref={moreRef}
        type="button"
        className={`p-2 hover:bg-grey rounded-xl ${showMore && "bg-grey"}`}
        onClick={() => setShowMore(!showMore)}
      >
        <MoreIcon className="w-4 h-5 fill-black" />
      </button>
      <div
        className={`absolute right-0 top-full p-4 bg-grey shadow-md rounded-xl mt-1 ${
          showMore ? "block" : "hidden"
        }`}
      >
        <ul>
          <li className="my-1 mx-2">
            <button type="button" className="group flex items-center gap-2">
              <span>
                <Edit className="w-4 h-4 group-hover:fill-black fill-black/70" />
              </span>
              <span className="text-black/70 group-hover:text-black">edit</span>
            </button>
          </li>
          <li className="my-1 mx-2">
            <button type="button" className="group flex items-center gap-2">
              <span>
                <Box className="w-4 h-4 group-hover:fill-black fill-black/70" />
              </span>
              <span className="text-black/70 group-hover:text-black">
                archive
              </span>
            </button>
          </li>
          <li className="my-1 mx-2">
            <button type="button" className="group flex items-center gap-2">
              <span>
                <Trash className="w-4 h-4 group-hover:fill-red/50 fill-black/70" />
              </span>
              <span className="text-black/70 group-hover:text-red/50">
                delete
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
