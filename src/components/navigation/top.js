import Image from "next/image";
import { SettingsDrawer } from "../drawer/settings";
import NotificationDropdown from "../dropdown/notification";
import ProfileMenu from "../dropdown/profile-menu";
// import logo from "/public/next.svg";
import logo from "/public/logo.png";

import { CreditCard, PlusCircle, Settings, User, Users } from "lucide-react";

export default function TopNavigation() {
  const ProfileMenuData = {
    user: {
      name: "Chelsea Hagon",
      email: "7Tb7p@example.com",
      image: "https://github.com/chchrischris.png",
    },
    group: [
      {
        name: "Profile",
        items: [
          {
            name: "View Profile",
            icon: User,
            shortcut: "⇧⌘P",
            href: "#",
          },
          {
            name: "Settings",
            icon: Settings,
            shortcut: "⌘S",
            href: "#",
          },
        ],
      },
      {
        name: "Billing",
        items: [
          {
            name: "Invoice",
            icon: CreditCard,
            shortcut: "⌘I",
            href: "#",
          },
          {
            name: "Upgrade",
            icon: Users,
            shortcut: "⌘U",
            href: "#",
            group: [
              {
                name: "Upgrade to Pro",
                items: [
                  {
                    name: "Upgrade to Pro",
                    icon: PlusCircle,
                    shortcut: "⌘U",
                    href: "#",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  return (
    <div className="flex justify-between items-center p-1 pl-3 border-b border-b-border drop-shadow-sm">
      <Image
        className="cursor-pointer"
        src={logo}
        alt="logo"
        width={35}
        height={35}
      />
      <div className="flex items-center">
        <SettingsDrawer />
        <NotificationDropdown />
        <ProfileMenu {...ProfileMenuData} />
      </div>
    </div>
  );
}
