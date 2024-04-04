import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <div>
      <footer className='footer items-center p-2 bg-neutral text-neutral-content'>
        <aside className='items-center grid-flow-col'>
          <img src={Logo} alt='Roccupy Logo' width={75} height={75} />
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'></nav>
      </footer>
    </div>
  );
};

export default Footer;
