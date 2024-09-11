import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MenuGroup({ group }) {
  return (
    <span>
      {group.map((item, index) => (
        <DropdownMenuGroup key={index} className="mb-4">
          <DropdownMenuLabel className="capitalize opacity-50 flex justify-start items-center gap-3 whitespace-nowrap">
            {item.name}{" "}
            <span className="flex w-full border-b-2 border-primary/10"></span>
          </DropdownMenuLabel>
          {item.items.map((item, index) =>
            item.group ? (
              <DropdownMenuSub key={index}>
                <DropdownMenuSubTrigger className="capitalize whitespace-nowrap">
                  {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                  <span>{item.name}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="w-56">
                    <MenuGroup group={item.group} />
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem
                key={index}
                className="capitalize whitespace-nowrap"
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                <span>{item.name}</span>
                <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuGroup>
      ))}
    </span>
  );
}

export default function ProfileMenu({ user, group }) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer border mx-2 w-9 h-9">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel className="capitalize font-bold mb-2 flex justify-start items-center gap-3">
          <Avatar className="cursor-pointer w-12 h-12 border">
            <AvatarImage src={user.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            {user.name}
            {user.email && (
              <span className="text-muted-foreground text-xs">
                {user.email}
              </span>
            )}
          </div>
        </DropdownMenuLabel>
        <MenuGroup group={group} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
