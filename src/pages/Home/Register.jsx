import { Link } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {



  const {createUser} = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email,password);
        //create user
        createUser(email, password)
        .then(result => {
          console.log(result.user)
        })
        .catch(error => {
          console.error(error)
        })
      }
    return (
        <div>
              <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center m-4 ">Already have an account <Link className="text-blue-800" to ='/login'>Login</Link></p>

    </div>
  </div>
</div>
            
        </div>
        </div>
    );
};

export default Register;