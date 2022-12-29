import { Outlet } from "react-router-dom";
import Header from "./header";
import SideBar from "./sidebar";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col bg-grey">
      <Header />
      <div className="pl-20 relative grow main-content overflow-hidden">
        <SideBar />
        <main className="h-full p-4 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
