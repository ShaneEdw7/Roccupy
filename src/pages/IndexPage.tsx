import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const IndexPage = () => {
  const navigate = useNavigate();
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    // if (!localStorage.getItem("loggedInUser")) {
    //   navigate("/Login");
    // }
    const homes = localStorage.getItem("homes");

    if (homes) {
      setHomes(JSON.parse(homes));
    }
  }, []);

  return (
    <div>
      {homes.map((home) => (
        <p>{home}</p>
      ))}
      <Outlet />
    </div>
  );
};

export default IndexPage;
