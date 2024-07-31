"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { UserProfile } from "@/app/(main)/_components/user-profile/UserProfile";

export const TopBar = () => {
  const date = new Date();
  const currentDate = format(date, "dd, MMMM, yyyy");

  const pathname = usePathname();

  const currentRoute = pathname;
  const pageTitle = currentRoute.split("/")[1];

  return (
    <div className="h-[100px] md:h-[80px] w-full md:w-auto sticky top-0    z-[99] px-5 bg-white   flex items-center justify-between  ">
      <div className="flex items-center h-full w-full justify-between ">
        <p className="invisible lg:visible text-black text-xl font-bold capitalize">
          {currentRoute === "/" ? "Overview" : pageTitle.replace("-", " ")}
        </p>
        <UserProfile />
      </div>
    </div>
  );
};
