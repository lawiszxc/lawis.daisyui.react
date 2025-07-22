import { Outlet } from "react-router";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
