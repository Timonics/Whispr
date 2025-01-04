import React, { ChangeEvent } from "react";
import Loading from "../../../components/Loading";
import { LoginData } from "../../../interfaces";
import { useMyContext } from "../../../context/MyAppContextProvider";

const Login: React.FC = () => {
  const { userLogin, isLoading } = useMyContext();
  const [formData, setFormData] = React.useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    userLogin(formData);
    //TO_DO: error handling
  };

  return (
    <div className="flex flex-col items-center px-5 py-4 rounded-xl justify-center gap-5 bg-[#434c544f] shadow-2xl shadow-[#7741f4]/15">
      {isLoading && <Loading />}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold font-monte sm:text-xl">
          Welcome Back to{" "}
          <span className="sm:text-2xl text-xl text-[#7741f4]">Whispr.</span>
        </h1>
        <p className="text-[10px] sm:text-[11px] text-center font-extralight">
          Where conversations come alive.
        </p>
      </div>
      <form
        className="flex flex-col gap-4 text-xs sm:text-sm w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
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
          <p className="text-[9px] font-thin ml-auto">
            Forgot your password?{" "}
            <span className="font-semibold text-[10px] font-monte underline underline-offset-1">
              Reset it here
            </span>
          </p>
          <button
            type="submit"
            className="btn font-monte font-bold bg-[#7741f4] text-[#FFB6C1] transition duration-500 ease-in-out hover:bg-[#FFB6C1] hover:text-[#1D232A]"
          >
            Log In
          </button>
        </div>
      </form>
      <p className="text-[10px] font-thin sm:text-xs">
        Don’t have an account yet?{" "}
        <a
          className="font-bold font-monte text-xs sm:text-base text-[#FFB6C1] underline underline-offset-1"
          href="/auth/register"
          data-discover="true"
        >
          Sign up now
        </a>
      </p>
    </div>
  );
};

export default Login;
