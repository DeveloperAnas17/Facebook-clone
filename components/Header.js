import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  UserGroupIcon,
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

function Header() {
  return (
    <header className="bg-black z-30 sticky top-0 h-16 flex items-center justify-between px-2 shadow-md w-full overflow-hidden border-b">
      {/* left */}
      <div className="flex items-center">
        <img
          className="h-12 w-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcOjVKk9jHPz7WfIRnSSPftbQ02XG1jJrvMw&usqp=CAU"
          alt=""
        />
        <div className="mx-3 flex items-center bg-[#25272c] p-2 rounded-3xl">
          <SearchIcon className="h-6 w-6 text-gray-500" />
          <input
            className="bg-transparent outline-none border-0 px-2"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* center */}
      <div className="hidden lg:flex lg:w-[570px] lg:items-center lg:justify-between  mx-12">
        <HomeIcon className="headerIcons text-blue-600" />
        <UserGroupIcon className="headerIcons" />
        <SubscriptionsIcon className="headerIcons" />
        <HomeIcon className="headerIcons" />
        <HomeIcon className="headerIcons" />
      </div>
      {/* Right */}
      <div className="flex items-center">
        <img
          className="hidden xl:inline-flex w-9 h-9 rounded-full cursor-pointer"
          src="https://pbs.twimg.com/profile_images/1428603821408747524/HAGiZnNl_400x400.jpg"
          alt=""
        />

        <div className="ml-6 flex items-center space-x-4">
          <UserIcon className="headerNav" />
          <UserIcon className="headerNav" />
          <UserIcon className="headerNav" />
          <UserIcon className="headerNav" />
        </div>
      </div>
    </header>
  );
}

export default Header;
