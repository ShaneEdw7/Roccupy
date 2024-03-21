import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const IndexPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedInUser")) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default IndexPage;
