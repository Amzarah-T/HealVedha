import { Input } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Welcome to Heal Vedha</div>
      <Input type="email" label="Email" placeholder="Enter your email" />
    </main>
  );
}
