import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import icon from '../../../Images/socialIcon.png'

const SignUp = () => {
  const { signUp, updateUser, signInWithGoogle } = useContext(AuthContext);
  const [passError, setPassError] = useState("");
  const [passSucess, setPassSucess] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    let user = {
      email,
      password,
      displayName,
      confirmPassword,
    };
    let userInfo = {
      displayName: displayName,
    };

    // console.log(user)
    if (password === confirmPassword) {
      setPassSucess("Password Match");
      signUp(user.email, user.password, userInfo);
      // updateUser(userInfo)
      setPassError("");
    } else {
      setPassError("Password Not Match");
      setPassSucess("");
    }

    fetch('http://localhost:5000/userData', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
      
      console.log(data)})
    .catch(err => console.log(err))


    form.reset();
  };

  const handleSignUpWithGoogle = () => {
    signInWithGoogle();
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="my-24 flex flex-col items-center w-10/12 mx-auto">
      <div className="rounded-md shadow-md p-10">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={handleSignUp}>
          <h1 className="text-lg font-semibold">Name</h1>
          <input
            className="block border-2 rounded-md border-gray-300 py-1 px-2 w-full md:w-96 mb-4"
            type="text"
            name="name"
            placeholder="Enter your Name here"
          />
          <h1 className="text-lg font-semibold">Email</h1>
          <input
            className="block border-2 rounded-md border-gray-300 py-1 px-2 w-full md:w-96 mb-4"
            type="text"
            name="email"
            placeholder="Enter your email here"
          />
          <h1 className="text-lg font-semibold">Password</h1>
          <input
            className="block border-2 rounded-md border-gray-300 py-1 px-2 w-full md:w-96 mb-4"
            type="text"
            name="password"
            placeholder="Enter your password here"
          />
          <h1 className="text-lg font-semibold">Confirm Password</h1>
          <input
            className="block border-2 rounded-md border-gray-300 py-1 px-2 w-full md:w-96 mb-1"
            type="text"
            name="confirmPassword"
            placeholder="Enter your confirm password here"
          />
          <p className="text-red-400">{passError}</p>
          <p className="text-blue-600">{passSucess}</p>
          <h1 className="text-sm mb-4">Forget Password ? </h1>
          <div className=" mb-4 flex">
            <input type="checkbox" onClick={handleAccepted} />
            <h1 className="ml-2">Accept our <Link to='/' className="text-blue-500">Terms and Condition</Link></h1>
          </div>
          {accepted ? (
            <input
              className="border-2 rounded-md bg-black text-white py-1 px-2 w-full md:w-96 mb-4 cursor-pointer"
              disabled={!accepted}
              type="submit"
              value="Register"
            />
          ) : (
            <input
              className="border-2 rounded-md bg-zinc-600 text-gray-400 py-1 px-2 w-full md:w-96 mb-4"
              disabled={!accepted}
              type="submit"
              value="Register"
            />
          )}

          <h1 className="text-center">
            Already create an account?
            <Link className="text-blue-500" to="/login">
              Login Here
            </Link>
          </h1>
          <div className="divider my-4 w-full md:w-96">OR</div>
        </form>
        <button
          onClick={handleSignUpWithGoogle}
          className="border-2 flex items-center justify-center rounded-md border-black text-center py-1 px-2 w-full md:w-96 font-semibold cursor-pointer"
        >
            <img className="w-6 mr-2" src={icon} alt=''></img>
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
