import { ReactComponent as SearchIcon } from "src/assets/icons/search.svg";

export default function Search() {
  return (
    <div className=" bg-white rounded-xl w-96 h-8 p-1 flex items-center shadow-sm">
      <button type="button" className="px-2 h-full">
        <SearchIcon className="w-4 h-4 fill-black/50" />
      </button>
      <input
        className="w-full placeholder:text-black/50 placeholder:text-md px-2 focus:outline-none"
        placeholder="search..."
      />
    </div>
  );
}
