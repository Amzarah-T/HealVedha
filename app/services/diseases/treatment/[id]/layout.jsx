export default function Layout({
    children,
  }) {
    return (
      <section className="py-8 md:py-10">
        <div className="text-left container m-auto">
          {children}
        </div>
      </section>
    );
  }
  