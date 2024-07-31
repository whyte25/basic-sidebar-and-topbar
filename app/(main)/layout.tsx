"use client";
import { Sidebar } from "@/components/nav/Sidebar";
import { ReactNode } from "react";
import { TopBar } from "@/components/nav/Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className={"flex relative "}>
      <Sidebar />
      <main className="  relative flex flex-col  h-full max-w-full w-full  ">
        <TopBar />
        <div className=" no-scrollbar px-5 w-full 4k:max-w-8xl  mx-auto  min-h-screen overflow-y-auto bg-[#f4f5f4] pt-10 pb-10 md:pb-20 ">
          {children}
        </div>
      </main>
    </div>
  );
}
