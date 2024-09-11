import { ThemeProvider } from "next-themes";
import { Sidenav } from "@/components/navigation/sidenav";
import TopNavigation from "@/components/navigation/top";
import { ThemeDataProvider } from "@/components/theme-data-provider";

export default function Layout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeDataProvider>
        <TopNavigation />
        <div className="flex h-[calc(100vh-48px)]">
          <Sidenav />
          <main className="container mx-auto p-4">{children}</main>
        </div>
      </ThemeDataProvider>
    </ThemeProvider>
  );
}
