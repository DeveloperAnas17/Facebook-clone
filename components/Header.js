import Image from "next/image";

import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  UserGroupIcon,
  BellIcon,
  ViewGridAddIcon,
  ChevronDownIcon,
  ChatIcon,
} from "@heroicons/react/solid";

import { FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 rounded-full items-center bg-gray-100 p-2">
          <SearchIcon className="h-6" />
          <input
            className="hidden ml-2 md:inline-flex bg-transparent border-0 outline-none placeholder-gray-500 text-gray-600 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow items-center">
        <div className="flex space-x-7 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* <Image src="" /> */}
        <p className="whitespace-nowrap font-semibold p-3">Aman Abbasi</p>
        <ViewGridAddIcon className="icons" />
        <ChatIcon className="icons" />
        <BellIcon className="icons" />
        <ChevronDownIcon className="icons" />
      </div>
    </header>
  );
}

export default Header;
