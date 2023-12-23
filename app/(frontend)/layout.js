import Footer from "@/components/front/Footer";
import Navbar from "@/components/front/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
