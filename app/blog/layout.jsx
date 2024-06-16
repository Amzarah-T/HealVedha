export default function BlogLayout({
  children,
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="container text-center justify-center">
        {children}
      </div>
    </section>
  );
}
