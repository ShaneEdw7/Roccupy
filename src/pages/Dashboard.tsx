import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar.tsx";
import Footer from "../components/Footer.tsx";

const Dashboard = () => {
  return (
    <div>
      <div className='flex flex-row min-h-screen'>
        <div>
          <Sidebar />
        </div>
        <div className='flex-grow'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
