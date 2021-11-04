import Image from "next/image";

function SidebarRow({ Icon, title }) {
  return (
    <div className="flex items-center">
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
