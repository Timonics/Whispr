import React, { ChangeEvent, useState } from "react";
import { FormData } from "../../../interfaces";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="md:flex">
      <div className="flex flex-col gap-5 md:p-4 md:rounded-xl md:bg-[#1D232A] md:w-3/5 lg:w-1/2 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold font-monte sm:text-xl">
            Welcome to{" "}
            <span className="sm:text-2xl text-xl text-[#7741f4]">Whispr.</span>
          </h1>
          <p className="text-[10px] sm:text-xs text-center font-extralight">
            Stay connected. Start conversations. Share moments.
          </p>
        </div>
        <form className="flex flex-col gap-4 text-xs sm:text-sm">
          <h1 className="text-[13px] font-semibold font-pops sm:text-lg text-[#FFB6C1]">
            Sign Up to Get Started
          </h1>
          <div className="flex flex-col gap-4 px-2">
            <label className="flex items-center gap-2 w-full border-b-[1.5px] border-[#7741f4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-20 text-[#7741f4]"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path>
              </svg>
              <input
                type="text"
                className="p-1.5 w-full bg-[#40444800] outline-none font-monte"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label className="flex items-center gap-2 w-full border-b-[1.5px] border-[#7741f4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-20 text-[#7741f4]"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path>
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path>
              </svg>
              <input
                type="text"
                className="p-1.5 w-full bg-[#40444800] outline-none font-monte"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className="flex items-center gap-2 w-full border-b-[1.5px] border-[#7741f4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-20 text-[#7741f4]"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <input
                type="password"
                className="p-1.5 w-full bg-[#40444800] outline-none font-monte"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label className="flex items-center gap-2 w-full border-b-[1.5px] border-[#7741f4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-20 text-[#7741f4]"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <input
                type="password"
                className="p-1.5 w-full bg-[#40444800] outline-none font-monte"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
          </div>
          <p className="text-[10px] font-light sm:text-xs">
            Already have a{" "}
            <span className="text-xs font-semibold font-pops sm:text-base text-[#7741f4]">
              Whispr.
            </span>{" "}
            account?{" "}
            <a
              className="font-bold font-monte text-xs sm:text-base text-[#FFB6C1] underline underline-offset-1"
              href="../auth/login"
              data-discover="true"
            >
              Log in
            </a>
          </p>
          <Link to="../verify-success" className="btn font-monte font-bold bg-[#7741f4] text-[#FFB6C1] transition duration-500 ease-in-out hover:bg-[#FFB6C1] hover:text-[#1D232A]">
            Create your account
          </Link>
        </form>
        <p className="text-[9px] font-thin text-center sm:text-xs">
          By signing up, you agree to our{" "}
          <span className="font-semibold">Terms of Service</span> and{" "}
          <span className="font-semibold">Privacy Policy</span>.
        </p>
      </div>
      <div className="w-2/5 lg:w-1/2 mobile:hidden flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex gap-3">
            <div className="w-[80px] h-[80px] bg-[#1D232A] rounded-lg shadow-xl bg-[#4044486d]"></div>
            <div className="w-[80px] h-[80px] bg-[#1D232A] rounded-lg shadow-xl bg-[#4044486d]"></div>
          </div>
          <div className="flex gap-3">
            <div className="w-[80px] h-[80px] bg-[#1D232A] rounded-lg shadow-xl bg-[#4044486d]"></div>
            <div className="w-[80px] h-[80px] bg-[#1D232A] rounded-lg shadow-xl bg-[#4044486d]"></div>
          </div>
        </div>
        <div className="tablet:hidden grid grid-cols-3 grid-rows-5 w-full h-3/5 px-7 gap-3">
          <div className="row-start-2 row-span-3 rounded-lg shadow-xl bg-[#4044486d]"></div>
          <div className="col-start-2 row-span-3 my-2 rounded-lg shadow-xl bg-[#4044486d]"></div>
          <div className="col-start-2 row-span-2 rounded-lg shadow-xl bg-[#4044486d]"></div>
          <div className="col-start-3 row-start-1 row-span-full my-5 rounded-lg shadow-xl bg-[#4044486d]"></div>
        </div>
        <div className="text-center space-y-0.5">
          <h1 className="font-monte font-bold text-2xl lg:text-3xl text-[#7741f4]">
            Whispr.
          </h1>
          <p className="text-[9px] font-extralight lg:text-sm">
            Conversations made easy, whispers made seamless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
