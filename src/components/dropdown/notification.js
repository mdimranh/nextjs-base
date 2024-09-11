import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegBell } from "react-icons/fa";

export default function NotificationDropdown() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className="p-2 rounded-full hover:bg-primary/15 cursor-pointer">
          <FaRegBell size={22} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 mr-14">
        <DropdownMenuLabel className="capitalize font-bold mb-2 flex justify-start items-center gap-3">
          <div className="flex flex-col">Notification</div>
        </DropdownMenuLabel>
        <div>Testy</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
