import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const linkStyles = {
  textDecoration: "none",
};

const Sidebar = () => {
  return (
    <div className='conatiner-fluid' style={{ padding: "0.5rem" }}>
      <div className='row'>
        <div className='bg-light col-auto col-md-auto min-vh-100 d-flex justify-content-between flex-column'>
          <div>
            <ul className='nav nav-pills flex-column mt-3 mt-sm-0'>
              <li className='nav-item text-black fs-4 my-1 py-1 py-sm-0'>
                <Link to='/Properties' style={linkStyles}>
                  <a className='nav-link text-black fs-5' aria-current='page'>
                    <i className='bi bi-house'></i>
                    <span className='ms-3 d-none d-sm-inline'>Properties</span>
                  </a>
                </Link>
              </li>

              <li className='nav-item text-black fs-4 my-1 py-1 py-sm-0'>
                <Link to='/Applications' style={linkStyles}>
                  <a className='nav-link text-black fs-5' aria-current='page'>
                    <i className='bi bi-clipboard-check'></i>
                    <span className='ms-3 d-none d-sm-inline'>
                      Applications
                    </span>
                  </a>
                </Link>
              </li>
              <li className='nav-item text-black fs-4 my-1 py-1 py-sm-0'>
                <Link to='/Accounts' style={linkStyles}>
                  <a className='nav-link text-black fs-5' aria-current='page'>
                    <i className='bi bi-bank2'></i>
                    <span className='ms-3 d-none d-sm-inline'>Accounts</span>
                  </a>
                </Link>
              </li>
              <li className='nav-item text-black fs-4 my-1 py-1 py-sm-0'>
                <Link to='/Tenants' style={linkStyles}>
                  <a className='nav-link text-black fs-5' aria-current='page'>
                    <i className='bi bi-people'></i>
                    <span className='ms-3 d-none d-sm-inline'>Tenants</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='dropdown open'>
            <a
              className='text-decoration-none dropdown-toggle text-black p-3'
              type='button'
              id='triggerId'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <i className='bi bi-person-circle'>
                <span className='ms-2 d-none d-sm-inline'>Shane Edwards</span>
              </i>
            </a>
            <div className='dropdown-menu' aria-labelledby='triggerId'>
              <Link to='/Profile' style={linkStyles}>
                <a className='dropdown-item' href='#'>
                  <i className='bi bi-person'></i>
                  <span className='ms-2 d-none d-sm-inline'>Profile</span>
                </a>
              </Link>
              <Link to='/Settings' style={linkStyles}>
                <a className='dropdown-item' href='#'>
                  <i className='bi bi-sliders'></i>
                  <span className='ms-2 d-none d-sm-inline'>Settings</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
