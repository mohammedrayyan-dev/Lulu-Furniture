import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <WhatsApp />

      <main className="flex-1">
        <div className="mx-auto pb-10">
            <Outlet />
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default Layout;