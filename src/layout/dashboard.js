import { ThemeProvider } from "next-themes";
import { Sidenav } from "@/components/navigation/sidenav";
import TopNavigation from "@/components/navigation/top";
import { ThemeDataProvider } from "@/components/theme-data-provider";

import { AiOutlineProject } from "react-icons/ai";
import { FiLayout } from "react-icons/fi";
import { GoGear, GoTasklist } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiOutlineWallet } from "react-icons/hi2";
import { RiHome3Line, RiProgress6Line } from "react-icons/ri";
import { TbProgressCheck } from "react-icons/tb";
import { CiViewTable } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { TbApi } from "react-icons/tb";
import { GrInstall } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { GrDocumentConfig } from "react-icons/gr";
import { LuSettings2 } from "react-icons/lu";
import { RiLinkUnlinkM } from "react-icons/ri";

export default function DashboardLayout({ children }) {
  const navItems = [
    {
      label: "Builder",
      divider: true,
    },
    {
      label: "Database",
      icon: <GoDatabase className="h-5 w-5" />,
      href: "/dashboard/builder/database",
      active: true,
    },
    {
      label: "Table",
      icon: <CiViewTable className="h-5 w-5" />,
      href: "/dashboard/builder/table",
      active: true,
    },
    {
      label: "Api",
      icon: <RiLinkUnlinkM className="h-5 w-5" />,
      href: "/dashboard/builder/api",
      active: true,
    },
    {
      label: "Plugin",
      divider: true,
    },
    {
      label: "My Plugin",
      icon: <GrInstall className="h-5 w-5" />,
      href: "/dashboard/plugin/installed",
      // children: [
      //     {
      //         label: "All",
      //         icon: "HiOutlineWallet",
      //         href: "/chart",
      //     },
      //     {
      //         label: "In Progress",
      //         icon: "RiProgress6Line",
      //         href: "/chart",
      //     },
      //     {
      //         label: "Complete",
      //         icon: "TbProgressCheck",
      //         href: "/chart",
      //     },
      // ],
    },
    {
      label: "Marketplace",
      icon: <IoCartOutline className="h-5 w-5" />,
      href: "/dashboard/plugin/marketplace",
    },
    {
      label: "Config",
      icon: <LuSettings2 className="h-5 w-5" />,
      href: "/settings",
    },
    {
      label: "Project",
      divider: true,
    },
    {
      label: "Projects",
      icon: <FiLayout className="h-5 w-5" />,
      href: "/settings",
      children: [
        {
          label: "All",
          icon: <HiOutlineWallet className="h-5 w-5" />,
          href: "/chart",
        },
        {
          label: "In Progress",
          icon: <RiProgress6Line className="h-5 w-5" />,
          href: "/chart",
        },
        {
          label: "Complete",
          icon: <TbProgressCheck className="h-5 w-5" />,
          href: "/chart",
        },
      ],
    },
    {
      label: "Tasks",
      icon: <GoTasklist className="h-5 w-5" />,
      href: "/settings",
    },
    {
      label: "Settings",
      icon: <GoGear className="h-5 w-5" />,
      href: "/settings",
    },
  ];
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeDataProvider>
        <TopNavigation />
        <div className="flex h-[calc(100vh-48px)]">
          <Sidenav items={navItems} />
          <main className="container mx-auto p-4">{children}</main>
        </div>
      </ThemeDataProvider>
    </ThemeProvider>
  );
}
