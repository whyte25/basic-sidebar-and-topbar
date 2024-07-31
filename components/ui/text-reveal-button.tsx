import Link from "next/link";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TextRevealButton {
  buttonText: string;
  className?: string;
  href: string;
  buttonWrapperClassName?: string;
  buttonTextClassName?: string;
  ButtonContainerClassName?: string;
  iconClassName?: string;
}

const TextRevealButton = ({
  buttonText,
  href,
  buttonWrapperClassName,
  buttonTextClassName,
  ButtonContainerClassName,
  iconClassName,
}: TextRevealButton) => {
  return (
    <>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-5 group w-fit",
          ButtonContainerClassName
        )}
      >
        <div
          className={cn(
            "relative hidden md:inline-flex   h-10 w-10 items-center justify-center overflow-hidden rounded-full group-hover:rounded-lg bg-primary font-medium text-white transition-all duration-300 group-hover:w-32 group-hover:animate-buttonheartbeatVariant2",
            buttonWrapperClassName
          )}
        >
          <p
            className={cn(
              "inline-flex whitespace-nowrap  opacity-0 transition-all duration-200 group-hover:-translate-x-2.5 group-hover:opacity-100 ",
              buttonTextClassName
            )}
          >
            {buttonText}
          </p>
          <div className="absolute group-hover:right-1.5">
            <ArrowRight
              size={20}
              className={cn("text-primary", iconClassName)}
            />
          </div>
        </div>
        <p
          className={cn(
            "text-base hidden md:block text-white group-hover:opacity-0 transition-all duration-300  font-semibold ",
            buttonTextClassName
          )}
        >
          {buttonText}
        </p>
      </Link>
      <Link
        href={href}
        className={cn(
          "flex md:hidden m z-[100] items-center gap-5",
          ButtonContainerClassName
        )}
      >
        <Button
          size={"icon"}
          className={cn(
            ` bg-white rounded-full   hover:bg-white `,
            buttonWrapperClassName
          )}
        >
          <ArrowRight size={20} className={cn("text-primary", iconClassName)} />
        </Button>
        <p
          className={cn(
            "text-base text-white font-semibold ",
            buttonTextClassName
          )}
        >
          {buttonText}
        </p>
      </Link>
    </>
  );
};

export default TextRevealButton;
