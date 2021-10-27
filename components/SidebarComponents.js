import { Icon } from "@mui/material";

function SidebarComponents({ Icons, title }) {
  return (
    <div className="flex items-center space-x-3 m-3 cursor-pointer p-2 hover:bg-[#1a1c20] rounded-3xl">
      {/* <img src={Icons} alt="" /> */}
      <Icon className="bg-gray-300 h-5 w-5">{Icons}</Icon>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

export default SidebarComponents;
