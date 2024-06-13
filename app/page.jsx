import { title } from "@/components/primitives";
import { Input } from "@nextui-org/react";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { Logo } from "@/components/icons";
import CarrosalView from "@/components/carrosal";

export default function Home() {
  return (
    <main className="">
      <div className="text-foreground pop-up">
        <CarrosalView />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">

      </div>
    </main>
  );
}
