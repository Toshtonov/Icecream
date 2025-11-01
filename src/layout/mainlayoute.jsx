import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header tepada */}
      <Header />

      {/* Asosiy kontent — bo‘sh joyni egallaydi */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer — har doim pastda turadi */}
      <Footer />
    </div>
  );
}
