import Image from "next/image";

import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  UserGroupIcon,
  BellIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";

import { FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex items-center">
          <SearchIcon className="h-6" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* center */}
      <div className=""></div>
      {/* Right */}
      <div className=""></div>
    </header>
  );
}

export default Header;
