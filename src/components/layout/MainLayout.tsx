import NavBar from "./NavBar";
import Footer from "./Footer";
import WhatsAppFloating from "@/components/common/WhatsAppFloating";
import ScrollToTop from "../ui/ScrollToTop";
import PageTransition from "@/components/ui/PageTransition";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <PageTransition>
      <NavBar />
        <main className="pt-24">{children}</main>
      <Footer />

      {/* Floating items */}
      <ScrollToTop />
      <WhatsAppFloating />
    </PageTransition>
  );
}
