import {
  BookmarkIcon,
  UserGroupIcon,
  CalendarIcon,
  UsersIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import SidebarComponents from "./SidebarComponents";

function Sidebar() {
  return (
    <div className="hidden lg:inline-block border-r w-60 bg text-white">
      <SidebarComponents Icon={UsersIcon} title="Anas Abbasi" />
      <SidebarComponents Icon={PersonIcon} title="Anas Abbasi" />
      <SidebarComponents Icon={PersonIcon} title="Anas Abbasi" />
      <SidebarComponents Icon={PersonIcon} title="Anas Abbasi" />
      <SidebarComponents Icon={PersonIcon} title="Anas Abbasi" />
      <SidebarComponents Icon={PersonIcon} title="Anas Abbasi" />
      <SidebarComponents Icon={PersonIcon} title="Anas Abbasi" />
      <SidebarComponents Icon={PersonIcon} title="Anas Abbasi" />
      <SidebarComponents Icon={PersonIcon} title="Anas Abbasi" />
    </div>
  );
}

export default Sidebar;
