import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import icon from '../../../Images/socialIcon.png'

const Login = () => {
  const { signIn, signInWithGoogle, loginError, loginSucess } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,
      password,
    };

    signIn(user.email, user.password);
    form.reset();
  };



  return (
    <div className="my-24 flex flex-col items-center w-10/12 mx-auto ">
      <div className="rounded-md shadow-md p-10">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <h1 className="text-lg font-semibold">Email</h1>
          <input
            className="block border-2 rounded-md border-gray-300 py-1 px-2 w-full md:w-96 mb-4"
            type="text"
            name="email"
            placeholder="Enter your email here"
          />
          <h1 className="text-lg font-semibold">Password</h1>
          <input
            className="block border-2 rounded-md border-gray-300 py-1 px-2 w-full md:w-96 mb-1"
            type="text"
            name="password"
            placeholder="Enter your password here"
          />
          <p className="text-red-400">{loginError}</p>
          <p className="text-blue-700">{loginSucess}</p>
          <h1 className="text-sm mb-4">Forget Password ? </h1>
          <input
            className="border-2 rounded-md bg-black text-white py-1 px-2 w-full md:w-96 mb-4 cursor-pointer"
            type="submit"
            value="Login"
          />
          <h1 className="text-center">
            New to doctor portal?
            <Link className="text-blue-400" to="/register">
              Create New Account
            </Link>
          </h1>
          <div className="divider my-4 w-full md:w-96">OR</div>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="border-2 flex items-center justify-center rounded-md border-black text-center py-1 px-2 w-full md:w-96 font-semibold cursor-pointer"
        >
            <img className="w-6 mr-2" src={icon} alt=''></img>
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
