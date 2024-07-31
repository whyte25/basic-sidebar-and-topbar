import LogoIcon from "@/assets/SVG/logo.svg";
import LogoWhiteIcon from "@/assets/SVG/logo-white.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Logo = ({
  variant = "white",
  path = "/",
}: {
  variant?: "default" | "white";
  path?: "/" | "/dashboard";
}) => {
  return (
    <Link href="/">
      {variant === "default" && (
        <Image src={LogoIcon} alt="" height={150} width={150} />
      )}
      {variant === "white" && (
        <Image src={LogoWhiteIcon} alt="" height={150} width={150} />
      )}
    </Link>
  );
};
