"use client";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Logo } from "@/components/logo/Logo";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { usePathname } from "next/navigation";
import { paths } from "@/constant/paths";
import { useClickOutside } from "@/hooks/useClickOutside";
import { navLinks } from "@/constant/nav-links";

export const Navbar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const { scrolled } = useScrollTop(100);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const containerRef = useClickOutside(() => handleClose());

  return (
    <div
      className={cn(
        `flex flex-col  gap-10  fixed transition-all duration-500 ease-in-out z-[999] lg:flex-row items-center  left-0 right-0 bg-transparent  w-full `,
        className
      )}
    >
      <div
        className={`flex w-full justify-between 4k:max-w-8xl 4k:mx-auto  items-center  transition-all duration-300  py-6 px-5 sm:px-12 lg:px-[80px] 4k:px-16  ${
          scrolled && "py-0  bg-[#072951] backdrop-blur-sm"
        }
        `}
      >
        <div className="">
          <Logo />
        </div>
        <div className="block lg:hidden ">
          {isOpen ? (
            <IoMdClose
              onClick={toggleNavbar}
              className={"text-white"}
              size={25}
            />
          ) : (
            <IoMdMenu
              onClick={toggleNavbar}
              className={"text-white"}
              size={25}
            />
          )}
        </div>

        <div className=" lg:flex items-center gap-14 hidden ">
          {navLinks.map((link) => (
            <Link
              key={link?.title}
              className={`text-xl ${
                pathname === link?.href
                  ? "text-[#4393D8] font-bold"
                  : "text-white"
              }`}
              href={link?.href}
            >
              {link?.title}
            </Link>
          ))}
        </div>
        <div className="hidden  lg:block lg:invisible">lorem</div>
      </div>

      <div
        ref={containerRef}
        className={`flex flex-col  transition-all ease-in-out  duration-300 w-full   gap-5 lg:hidden px-5 sm:px-12 shadow-2xl ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : " opacity-0 invisible translate-y-10"
        } ${scrolled ? " bg-transparent    " : "shadow-black   bg-[#0D0A2C]"}`}
      >
        <Link
          onClick={handleClose}
          className={buttonVariants({ variant: "outline" })}
          href={paths.home}
        >
          Home
        </Link>

        <Link
          onClick={handleClose}
          className={buttonVariants({ variant: "outline" })}
          href={paths.about}
        >
          Todo
        </Link>
      </div>
    </div>
  );
};
