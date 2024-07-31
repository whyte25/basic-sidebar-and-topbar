import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const MainContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("px-5 sm:px-10 lg:px-24", className)}>{children}</div>
  );
};
