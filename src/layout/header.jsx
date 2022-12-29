import Logo from "src/components/logo";
import Search from "src/components/search";
import UserBar from "src/components/userbar";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2">
      <Logo />
      <Search />
      <UserBar />
    </header>
  );
}
