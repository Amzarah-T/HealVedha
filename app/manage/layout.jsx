import SideBar from "@/components/sidebar";

export default function AboutLayout({
  children,
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="flex w-screen bg-slate-100 text-center justify-between">
        <div className="w-64 bg-slate-200"><SideBar /></div>
        <div className="grow h-screen">{children}</div>
      </div>
    </section>
  );
}
