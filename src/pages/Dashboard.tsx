import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar.tsx";
import Footer from "../components/Footer.tsx";

const Dashboard = () => {
  return (
    <div>
      <div className='flex flex-row'>
        <div>
          <Sidebar />
        </div>
        <div className='flex-1 h-screen ml-5'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
