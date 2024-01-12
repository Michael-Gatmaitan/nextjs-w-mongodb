import Link from "next/link";
import NavButtons from "./NavButtons";

const Nav = () => {
  return (
    <nav className="w-full p-4 bg-indigo-800 mb-4 flex justify-between items-center">
      <Link href="/">
        <h3 className="text-3xl text-white font-bold">pdemian tweets 🐦</h3>
      </Link>

      <NavButtons />
    </nav>
  );
};

export default Nav;
