import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar.tsx";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
