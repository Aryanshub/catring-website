import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="w-full min-h-screen bg-black overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;