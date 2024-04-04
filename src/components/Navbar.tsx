import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <img src={Logo} alt='Roccupy Logo' width={90} height={90} />
          <a className='btn btn-ghost text-xl'>Roccupy</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a onClick={() => navigate("Login")}>Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
