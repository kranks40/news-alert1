import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 item-center">
        <img src="favicon1.png" alt="icon" className="w-20 h-10 rounded" />

        <Link href="/" prefetch={false}>
          <h1 className="text-4xl font-serif text-center ">
            The {""}
            <span className="underline decoration-6 decoration-blue-600">
              Greenz
            </span>{" "}
            {""}
            News
          </h1>
        </Link>

        <div className="flex item-center justify-end space-x-2">
          {/* darkmode */}
          <button className="hidden md:inline bg-slate-600 text-white px-4 lg:px-8 py-2 lg:py-2 rounded-full dark:bg-slate-600">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* navigationLink */}
      <NavLinks />

      {/* searchbox */}
      < SearchBox />
    </header>
  );
};

export default Header;
