import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout ({
  children
}) {
  return (
    <div className="flex max-h-screen h-full">
      <section className="relative w-0 md:w-auto transition-all shrink-0">
        <Sidebar />
      </section>
      <section className="grow flex flex-col overflow-y-scroll">
        <Header />
        <main className="grow">
          {children}
        </main>
      </section>
    </div>
  )
}