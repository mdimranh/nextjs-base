"use client";

import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ToolTips from "../tooltip";

import { Separator } from "@/components/ui/separator"

import SearchInput from "../form/input/search";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { AiOutlineProject } from "react-icons/ai";
import { FiLayout } from "react-icons/fi";
import { GoGear, GoTasklist } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiOutlineWallet } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
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

const icons = {
  AiOutlineProject: AiOutlineProject,
  FiLayout: FiLayout,
  GoGear: GoGear,
  GoTasklist: GoTasklist,
  HiOutlineDotsHorizontal: HiOutlineDotsHorizontal,
  HiOutlineWallet: HiOutlineWallet,
  IoIosArrowForward: IoIosArrowForward,
  RiHome3Line: RiHome3Line,
  RiProgress6Line: RiProgress6Line,
  TbProgressCheck: TbProgressCheck,
  CiViewTable: CiViewTable,
  GoDatabase: GoDatabase,
  TbApi: TbApi,
  GrInstall: GrInstall,
  IoCartOutline: IoCartOutline,
  GrDocumentConfig: GrDocumentConfig,
  LuSettings2: LuSettings2,
  RiLinkUnlinkM: RiLinkUnlinkM
};

export function NavItem({
  children,
  icon,
  label,
  href,
  active,
  open,
  divider,
  index,
  tooltip=true
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [firstDone, setFirstDone] = React.useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const contentRef = useRef(null); // Ref to measure the height dynamically
  if (children) {
    return open ? (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="whitespace-nowrap">
        <CollapsibleTrigger asChild>
          <div className="rounded-md px-2 py-2 font-mono text-sm hover:bg-primary/5 cursor-pointer flex justify-between items-center gap-3 overflow-hidden">
            <div className="flex items-center justify-start gap-3 whitespace-nowrap">
              {icons[icon] ? React.createElement(icons[icon], { className: "h-5 w-5" }) : null}
              {label}
            </div>
            <IoIosArrowForward
              className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </div>
        </CollapsibleTrigger>
        <div
          className="transition-all duration-300 ease-in-out overflow-hidden"
          style={{
            height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          }}
        >
          <div
            ref={contentRef}
            className="ml-4 border-l-2 border-l-border pl-1"
          >
            {children.map((item) => (
              <NavItem key={item.label} {...item} open={open} />
            ))}
          </div>
        </div>
      </Collapsible>
    ) : (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <div>
            <ToolTips label={label} distance={15} enable={tooltip}>
              <div
                className="rounded-md px-2 py-2 font-mono text-sm hover:bg-primary/5 cursor-pointer flex justify-between items-center gap-3 overflow-hidden"
              >
                <div className="flex justify-start items-center gap-3 whitespace-nowrap">
                  {icons[icon] ? React.createElement(icons[icon], { className: "h-5 w-5" }) : null}
                  {label}
                </div>
                <IoIosArrowForward
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-300`}
                />
              </div>
            </ToolTips>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-44 top-0 ml-2"
          side={"right"}
          align={"start"}
        >
          {children.map((item) => (
            <NavItem key={item.label} {...item} open={open} tooltip={false} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return !divider ? (
    !open ? (
      <ToolTips label={label} distance={15} enable={tooltip}>
        <div
          className={`rounded-md px-2 py-2 font-mono text-sm hover:bg-primary/5 cursor-pointer flex justify-start items-center gap-3 overflow-hidden ${
            pathName === href ? "bg-primary/15 text-primary" : ""
          }`}
          onClick={() => router.push(href)}
        >
          <div className="flex justify-start items-center gap-3 whitespace-nowrap">
            {icons[icon] ? React.createElement(icons[icon], { className: "h-5 w-5" }) : null}
            {label}
          </div>
        </div>
      </ToolTips>
    ): (
      <div
      className={`rounded-md px-2 py-2 font-mono text-sm hover:bg-primary/5 cursor-pointer flex justify-start items-center gap-3 overflow-hidden ${
        pathName === href ? "bg-primary/15 text-primary" : ""
      }`}
      onClick={() => router.push(href)}
    >
      <div className="flex justify-start items-center gap-3 whitespace-nowrap">
        {icons[icon] ? React.createElement(icons[icon], { className: "h-5 w-5" }) : null}
        {label}
      </div>    
    </div>    
    )
  ) : open ? (
    <div
      className="capitalize flex items-center gap-3 whitespace-nowrap font-semibold justify-start mt-5 mb-1"
    >
      {label}
      <span className="flex w-full border-b border-border/50"></span>
    </div>
  ): index !== 0 ? <Separator className="my-4" /> : null;
}

export function Sidenav() {

  const [navItems, setnavItems] = useState([])
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('http://localhost:8080/sidenav')
      .then((res) => res.json())
      .then((data) => {
        setnavItems(data)
        setLoading(false)
      })
  }, [])

  // Check for the stored sidebar state in localStorage on component mount
  let [isOpen, setIsOpen] = React.useState(true);

  // Use useEffect to initialize state from localStorage on page load
  useEffect(() => {
    const storedIsOpen = localStorage.getItem("sidebar-open");
    if (storedIsOpen !== null) {
      setIsOpen(storedIsOpen === "true");
    }
  }, []);

  function openToggle() {
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);
    localStorage.setItem("sidebar-open", newOpenState); // Save to localStorage
  }
  return (
    <nav
      className={`border-r border-r-border h-full select-none relative transition-all duration-500 ease-in-out p-4 ${
        isOpen ? "w-[240px]" : "w-[62px]"
      }`}
    >
      { isOpen ? <SearchInput /> : null }
      <span className={`absolute right-0 bottom-0 left-0 overflow-hidden px-3 font-semibold ${
        isOpen ? "top-14": "top-3"
      }`}>
        {navItems.map((item, indx) => (
          <NavItem key={item.label} {...item} open={isOpen} index={indx} />
        ))}
      </span>
      <div
        className="absolute left-full ml-2 bottom-2 border border-border p-2 rounded-md cursor-pointer bg-secondary"
        onClick={() => openToggle()}
      >
        <IoIosArrowForward
          className={`w-4 h-4 transition-transform duration-300 ${
            !isOpen ? "" : "rotate-180"
          }`}
        />
      </div>
    </nav>
  );
}
