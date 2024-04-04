// import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import RowHouses from "../assets/images/jellybeanrowtest.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  const myStyle = {
    backgroundImage: `url(${RowHouses})`,
    height: "100vh",
    marginTop: "-30px",
    marginBottom: "-30px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  //  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!localStorage.getItem("loggedInUser")) {
  //     navigate("/Login");
  //   }
  return (
    <>
      <div>
        <Outlet />
        <Navbar />
        <div className='hero min-h-screen'>
          <div className='hero-overlay bg-opacity-50' style={myStyle}></div>
          <div className='hero-content text-center text-neutral-content'>
            <div className='max-w-md'>
              <h1 className='mb-5 text-7xl font-bold text-black'>Hello!</h1>
              <p className='mb-5 text-black text-3xl'>Welcome to Roccupy.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
