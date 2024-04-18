import Logo from "../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import PropertyIcon from "./icons/PropertyIcon";
import ApplicationsIcon from "./icons/ApplicationsIcon";
import AccountsIcon from "./icons/AccountsIcon";
import MaintenanceIcon from "./icons/MaintenanceIcon";
import CommunicationsIcon from "./icons/CommunicationsIcon";
import FilesIcon from "./icons/FilesIcon";
import ReportsIcon from "./icons/ReportsIcon";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='h-full flex-1 flex overflow-hidden'>
        <nav className='narrow-sidebar hidden md:block lg:block lg:flex-shrink-0 lg:bg-gray-800 lg:overflow-y-auto'>
          <div className='relative w-56 flex flex-col bg-base-200 min-h-full'>
            <img
              className='md:width={100} height={100} self-center'
              src={Logo}
              alt='Roccupy Logo'
              width={125}
              height={125}
              onClick={() => navigate("./")}
            />
            <ul className='menu menu-lg bg-base-200 w-56'>
              <li>
                <a onClick={() => navigate("Properties")}>
                  <PropertyIcon />
                  Properties
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Applications")}>
                  <ApplicationsIcon />
                  Applications
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Accounts")}>
                  <AccountsIcon />
                  Accounts
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Maintenance")}>
                  <MaintenanceIcon />
                  Maintenance
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Communications")}>
                  <CommunicationsIcon />
                  Communications
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Files")}>
                  <FilesIcon />
                  Files
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Reports")}>
                  <ReportsIcon />
                  Reports
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
