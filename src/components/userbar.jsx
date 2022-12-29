import { ReactComponent as Bell } from "src/assets/icons/bell.svg";

export default function UserBar() {
  return (
    <div className="h-full flex items-center gap-8">
      <button
        className="group relative p-2 rounded-xl bg-white hover:bg-orange/50 shadow-sm"
        type="button"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red/70 rounded-full text-[8px] text-white ">
          2
        </span>
        <Bell className="w-5 h-5 fill-black/50 group-hover:fill-black/90" />
      </button>
      <div className="flex items-center gap-2 h-full">
        <span className="text-black/60">Daria Shynder</span>
        <div className="w-12 h-12 rounded-full bg-white shadow-sm" />
      </div>
    </div>
  );
}
