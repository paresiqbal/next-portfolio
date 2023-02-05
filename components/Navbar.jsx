import Link from "next/link";

import { BsFillMoonFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="px-10 py-5 shadow-sm mb-12 flex justify-between sticky">
      <h1 className="text-xl">Pahreza Iqbal</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonFill className="cursor-pointer text-2xl" />
        </li>
        <li>
          <Link
            href="/"
            className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}
