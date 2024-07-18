import Logo from "../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import * as Icons from "./icons";

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
                  <Icons.PropertyIcon />
                  Properties
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Applications")}>
                  <Icons.ApplicationsIcon />
                  Applications
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Accounts")}>
                  <Icons.AccountsIcon />
                  Accounts
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Maintenance")}>
                  <Icons.MaintenanceIcon />
                  Maintenance
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Communications")}>
                  <Icons.CommunicationsIcon />
                  Communications
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Files")}>
                  <Icons.FilesIcon />
                  Files
                </a>
              </li>
              <li>
                <a onClick={() => navigate("Reports")}>
                  <Icons.ReportsIcon />
                  Reports
                </a>
              </li>
            </ul>
            <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700'></hr>
            <div className='dropdown dropdown-top self-center'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-10 rounded-full'>
                  <img
                    alt='Tailwind CSS Navbar component'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <a className='justify-between'>
                    Profile
                    <span className='badge'>New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
