import { title } from "@/components/primitives";
import { Input } from "@nextui-org/react";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-foreground">Welcome to Heal Vedha</div>
      <Input type="email" label="Email" placeholder="Enter your email" />
    </main>
  );
}
