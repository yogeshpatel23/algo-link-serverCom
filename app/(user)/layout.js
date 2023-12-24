import Sidenav from "@/components/back/Sidenav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sidenav />
      </div>
      <div className="flex-grow p-6 md:p-12">{children}</div>
    </div>
  );
}
