import { ScrollArea } from "@/components/ui/scroll-area";
import { CgEditFade } from "react-icons/cg";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle, ThemeColorToggle } from "./mode";

export function SettingsDrawer() {
  return (
    <Sheet modal={false}>
      <SheetTrigger
        asChild
        className="p-2 rounded-full hover:bg-primary/15 cursor-pointer"
      >
        <CgEditFade size={39} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Appearance</SheetTitle>
          <SheetDescription>
            Selected option will be applied to all layout elements (navbar,
            toolbar, etc.).
          </SheetDescription>
        </SheetHeader>
        <ScrollArea>
          <div className="py-10 space-y-6">
            <span className="px-2 py-1 bg-primary/25 text-primary rounded-lg mb-2">
              Theming
            </span>
            <div className="flex flex-col gap-2">
              <span>Style (Mode)</span>
              <ModeToggle />
            </div>
            <div className="flex flex-col gap-2">
              <span>Style (Color)</span>
              <ThemeColorToggle />
            </div>
          </div>
        </ScrollArea>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
