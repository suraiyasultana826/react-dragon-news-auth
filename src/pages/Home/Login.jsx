import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        console.log(email, password);
        signIn(email, password)
        .then(result => {
          console.log(result.user)
          //navigate after log in
          navigate(location?.state ? location.state: '/')
        })
        .catch(error => {
          console.error(error);
        })
      }
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center m-4 ">Do not have an account <Link className="text-blue-800" to ='/register'>Register</Link></p>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;