import Link from "next/link";
import React, { useState } from "react";
import SignupBg from "../../Assets/bg-02.jpg";
//---------------------------------------------------------------------------
function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials, "after submit signup....");
  };

  const handleChange = (e) => {
    const values = { ...credentials, [e.target.name]: e.target.value };
    setCredentials(values);
    console.log(values, "signup details after submit...");
  };

  return (
    <div
      style={{
        height: "71vh",
        backgroundImage: `url(${SignupBg.src})`,
        width: "100%",
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center text-white dark:text-white"
    >
      <div className="container justify-center items-center p-4 w-full max-w-md min-h-48 bg-white/20 dark:bg-black backdrop-blur-sm drop-shadow-xl">
        <h5 className="pt-1 font-bold flex justify-center items-center align-middle">
          Signup here
        </h5>
        <form
          onSubmit={handleSubmit}
          className="p-2"
        >
          <div className="mb-3">
            <label className="block text-sm font-bold mb-1">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="form-input w-full py-2 px-2 bg-slate-200 dark:bg-slate-800"
              placeholder="Enter your name here"
              value={credentials.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-bold mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="form-input w-full py-2 px-2 bg-slate-200 dark:bg-slate-800"
              placeholder="Enter your email here..."
              value={credentials.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="form-input w-full py-2 px-2 bg-slate-200 dark:bg-slate-800"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 flex justify-end items-center space-x-3">
            <Link
              href={"/login"}
              className="text-sm p-2"
            >
              Already a user?
            </Link>
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-500 dark:bg-blue-800 text-sm text-white dark:text-white p-2 rounded-lg border-inherit"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
