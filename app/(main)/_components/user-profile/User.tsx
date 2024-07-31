import userImg from "@/assets/PNG/user-image-placeholder.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export const User = ({
  className,
  showDisplayName = true,
}: {
  className?: string;
  showDisplayName?: boolean;
}) => {
  // const { data, isLoading } = useGetProfile();
  const isLoading = false;

  return (
    <>
      {isLoading ? (
        <Skeleton className="h-11 w-11 rounded-full" />
      ) : (
        <div className="flex items-center gap-3 bg-primary-gray rounded-full">
          <Avatar className="border">
            <AvatarImage
              src={userImg?.src}
              alt="user"
              width={200}
              height={200}
              className="object-cover"
            />
          </Avatar>
          {showDisplayName && <p className="text-sm ">Farouq Azeez</p>}
        </div>
      )}
    </>
  );
};
