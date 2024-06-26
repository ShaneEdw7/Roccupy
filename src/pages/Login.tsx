import { Link, useNavigate } from "react-router-dom";
import JellyBeanRow from "../assets/images/jellybeanrowtest.jpg";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-row'>
          <div className='card shrink-0 max-w-md max-md shadow-2xl bg-base-100'>
            <form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='you@yourdomain.com'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='P@ssW0rd'
                  className='input input-bordered'
                  required
                />
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button
                  className='btn btn-primary'
                  onClick={() => navigate("dashboard")}
                >
                  <span>Login</span>
                </button>
              </div>
            </form>
          </div>
          <img
            src={JellyBeanRow}
            className='flex h-screen w-1/2 rounded-lg shadow-2xl'
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
