"use client";
import { Logo } from "@/components/logo/Logo";
import Drawer from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { User } from "@/app/(main)/_components/user-profile/User";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SidebarLinks } from "@/constant/sidebar-links";
import { Logout } from "../../app/(main)/_components/logout";

export const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  const ToggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <SidebarButton
        ToggleNav={ToggleNav}
        className="fixed top-6 left-3 z-[120] size-12 flex items-center justify-center shadow-transparent"
      />
      <Drawer
        isDrawerOpen={showNav}
        closeDrawer={ToggleNav}
        side="left"
        hideIcon={true}
        overlayClassName="lg:hidden"
        className="lg:h-screen  lg:sticky  pt-0  lg:translate-x-0  w-64  md:w-64 xl:w-[300px]   top-0 px-0   lg:shadow-none  flex flex-col justify-between lg:z-auto  bg-white"
      >
        <div className="px-5 overflow-auto">
          <div className="flex flex-col py-4  gap-5">
            <div className="flex items-center pr-5  justify-between w-full">
              <SidebarButton
                ToggleNav={ToggleNav}
                className="shadow-none shadow-transparent bg-transparent p-0 "
              />
              <Logo variant="default" path="/dashboard" />
            </div>
            <div className="border-y flex flex-col gap-5 border-[#D9D9D9] py-4">
              <User />
              <Logout />
            </div>
            <div className="flex flex-col pb-8 pt-5 gap-3">
              {SidebarLinks.map((link) => (
                <Link
                  key={link.title}
                  onClick={() => setShowNav(false)}
                  href={link.href}
                  className={`flex font-medium capitalize hover:bg-primary-foreground  hover:text-primary transition-all duration-300 items-center gap-2 px-2 py-3  rounded-md ${
                    pathname === link.href
                      ? "text-primary bg-primary-foreground "
                      : "text-[#999999]"
                  }  `}
                >
                  <em>{link.icon}</em>
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

const SidebarButton = ({
  ToggleNav,
  className,
}: {
  ToggleNav: () => void;
  className?: string;
}) => {
  return (
    <div
      onClick={ToggleNav}
      className={twMerge(
        "p-2 cursor-pointer  size-10 block lg:hidden shadow-lg rounded-full bg-white",
        className
      )}
    >
      <Menu className="shrink-0" />
    </div>
  );
};
