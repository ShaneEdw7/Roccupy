import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <br />
      <p>
        Email
        <input type='email' name='Email' id='Email' />
        <br />
        Password
        <input type='password' name='Password' id='Password' />
        <br />
        <button className='btn btn-primary '>
          <Link to='/Dashboard'>
            <span>Login</span>
          </Link>
        </button>
      </p>
    </div>
  );
};

export default Login;
