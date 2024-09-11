import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between ${inter.className}`}
    >
      <div className="bg-primary text-primary-foreground p-2">
        <h1>Hello World</h1>
      </div>
    </main>
  );
}
