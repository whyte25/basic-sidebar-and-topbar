import ArrowRight from "@/assets/SVG/arrow-right.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Logout = () => {
  return (
    <Button
      variant={"ghost"}
      className="justify-start gap-3 font-normal hover:font-semibold"
    >
      <p className="">Logout</p>
      <Image src={ArrowRight} alt="" />
    </Button>
  );
};
