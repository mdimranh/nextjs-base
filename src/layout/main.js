import { ThemeProvider } from "next-themes";
import { Sidenav } from "@/components/navigation/sidenav";
import TopNavigation from "@/components/navigation/top";
import { ThemeDataProvider } from "@/components/theme-data-provider";

import Image from "next/image";
import logo from "/public/logo.png";
import mee from "/public/mee.png";
import zakaria from "/public/zakaria.jpg";

import { MdOutlineQuestionAnswer } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { TbBooks } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";

export default function Layout({ children }) {
  const navItems = [
    {
      label: "Core",
      divider: true,
    },
    {
      label: "Question",
      icon: <MdOutlineQuestionAnswer className="h-5 w-5" />,
      href: "/question",
      active: true,
    },
    {
      label: "Fatwa",
      icon: <MdEditDocument className="h-5 w-5" />,
      href: "/fatwa",
      active: true,
    },
    {
      label: "Scholars",
      icon: <TbUsers className="h-5 w-5" />,
      href: "/scholars",
      active: true,
    },
    {
      label: "Books",
      icon: <TbBooks className="h-5 w-5" />,
      href: "/books",
      active: true,
    },
    {
      label: "Favourite",
      divider: true,
    },
    {
      label: "Manzur E Elahi",
      href: "/dashboard/plugin/installed",
      img: mee,
    },
    {
      label: "Abu Bakar Zakaria",
      href: "/dashboard/plugin/installed",
      img: "https://github.com/shadcn.png",
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
