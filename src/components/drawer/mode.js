import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CiLight } from "react-icons/ci";
import { GrSystem } from "react-icons/gr";
import { MdDarkMode } from "react-icons/md";
import { Label } from "../ui/label";

import { cn } from "@/lib/utils";
import { useThemeContext } from "../theme-data-provider";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const items = [
    {
      value: "light",
      icon: <CiLight size={22} />,
      label: "Light",
    },
    {
      value: "dark",
      icon: <MdDarkMode size={21} />,
      label: "Dark",
    },
    {
      value: "system",
      icon: <GrSystem size={17} />,
      label: "System",
    },
  ];

  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <RadioGroup defaultValue={theme} className="grid grid-cols-3">
      {items.map((item) => (
        <div className="flex items-center w-full h-full" key={item.value}>
          <RadioGroupItem
            value={item.value}
            id={item.value}
            className="hidden"
          />
          <Label
            className={`cursor-pointer flex flex-col justify-center w-full h-full gap-1 items-center border-2 border-border/50 hover:border-border rounded-md p-1 ${
              theme === item.value
                ? // (theme === "system" && resolvedTheme === item.value)
                  "border-primary hover:border-primary"
                : ""
            }`}
            htmlFor={item.value}
            onClick={() => setTheme(item.value)}
          >
            {item.icon}
            {item.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

export function ThemeColorToggle() {
  const availableThemeColors = [
    { name: "Slate", light: "bg-slate-900", dark: "bg-slate-700" },
    { name: "Rose", light: "bg-rose-600", dark: "bg-rose-700" },
    { name: "Orange", light: "bg-orange-500", dark: "bg-orange-700" },
    { name: "Green", light: "bg-green-600", dark: "bg-green-500" },
    { name: "Blue", light: "bg-blue-600", dark: "bg-blue-700" },
    { name: "Yellow", light: "bg-yellow-500", dark: "bg-yellow-700" },
  ];

  const { themeColor, setThemeColor } = useThemeContext();
  const { theme, resolvedTheme } = useTheme();

  // Use resolvedTheme for system mode, otherwise use the manually selected theme
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <RadioGroup
      defaultValue={themeColor}
      onValueChange={(value) => setThemeColor(value)} // Ensure this updates the context
      className="grid grid-cols-3"
    >
      {availableThemeColors.map(({ name, light, dark }) => (
        <div className="flex items-center w-full" key={name}>
          <RadioGroupItem value={name} id={name} className="hidden" />
          <Label
            className={`cursor-pointer flex flex-col w-full gap-2 items-center border-2 border-border/50 hover:border-border rounded-md p-2 ${
              themeColor === name ? "border-primary hover:border-primary" : ""
            }`}
            htmlFor={name}
            onClick={() => setThemeColor(name)} // Update theme color on click
          >
            <div className="flex item-center space-x-3">
              <div
                className={cn(
                  "rounded-full",
                  "w-[20px]",
                  "h-[20px]",
                  currentTheme === "light" ? light : dark // Apply light or dark based on the resolved or selected theme
                )}
              ></div>
              <div className="text-sm">{name}</div>
            </div>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
