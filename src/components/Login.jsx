import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="MovieGPT"
        />
      </div>
      <form className="w-96 p-12 my-36 absolute mx-auto right-0 left-0 text-white bg-black bg-opacity-75 rounded-lg">
        <h1 className="text-3xl font-bold py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {
          !isSignInForm && (<input name="name" type="text"  placeholder="Enter your full name" className="p-4 my-4 w-full rounded-lg bg-gray-500 text-white"/>)
        }
        <input name="email" type="text"  placeholder="Email Address" className="p-4 my-4 w-full rounded-lg bg-gray-500 text-white"/>
        <input name="password" type="password"  placeholder="Password" className="p-4 my-4 w-full rounded-lg bg-gray-500 text-white"/>
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg">Sign In</button>

        <div className="py-2 text-base cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign up now" : "Already have account? Sign in now"}</div>
      </form>


    </div>
  );
};

export default Login;
