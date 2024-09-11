import { cn } from "@/lib/utils";
import { IoMdSearch } from "react-icons/io";

export default function SearchInput(){
    return (
        <div
          className={cn(
            "flex h-10 items-center rounded-md bg-input/50 pl-2 text-sm"
          )}
        >
          <IoMdSearch className="h-6 w-6" />
          <input
            type="text"
            className="w-full p-2 bg-transparent placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      );
}