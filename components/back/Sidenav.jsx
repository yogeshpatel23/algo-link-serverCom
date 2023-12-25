import Link from "next/link";
import Navlinks from "./Navlinks";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

const Sidenav = async () => {
  return (
    <div className="flex flex-col h-full px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex items-end justify-start h-20 bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white">AlgoLink</div>
      </Link>
      <div className="flex flex-row flex-grow justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Navlinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex h-12 w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidenav;
