import Logo from "../assets/images/Logo.png";

const Sidebar = () => {
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-60 min-h-full bg-base-200 text-base-content'>
          <img src={Logo} alt='Roccupy Logo' width={200} height={200} />
          <li>
            <a>Properties</a>
          </li>
          <li>
            <a>Applications</a>
          </li>
          <li>
            <a>Accounts</a>
          </li>
          <li>
            <a>Maintenance</a>
          </li>
          <li>
            <a>Communications</a>
          </li>
          <li>
            <a>Files</a>
          </li>
          <li>
            <a>Reports</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
