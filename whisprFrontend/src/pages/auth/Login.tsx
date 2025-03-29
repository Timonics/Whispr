import React, { ChangeEvent } from "react";
import { LoginData } from "../../interfaces/auth";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/load";

const Login: React.FC = () => {
  const { loginUser, authIsLoading } = useAuth();
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
    loginUser(formData);
    //TO_DO: error handling
  };

  return (
    <div className="flex flex-col gap-5 w-full md:w-[90%] p-2">
      {authIsLoading && <Loading />}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold font-monte text-white/50 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] text-center">
          Welcome Back to{" "}
          <span className="sm:text-[24px] text-[20px] md:text-[28px] lg:text-[32px] text-[#7741f4]">
            Whispr.
          </span>
        </h1>
        <p className="text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] text-center font-extralight">
          Where conversations come alive.
        </p>
      </div>
      <form
        className="flex flex-col gap-4 text-sm sm:text-[16px] md:text-[18px] text-white/60 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2 w-full border-b-[1.5px] border-[#7741f4]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-5 md:size-7 text-[#7741f4]/30"
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
              className="size-5 md:size-7 text-[#7741f4]/30"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
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
          <p className="text-[12px] md:text-[14px] font-thin ml-auto">
            Forgot your password?{" "}
            <span className="font-semibold text-[13px] md:text-[16px] font-monte underline underline-offset-1">
              Reset it here
            </span>
          </p>
          <button
            type="submit"
            className="p-3 rounded-lg text-base md:text-lg font-monte font-bold bg-[#7741f4] text-[#FFB6C1] transition duration-500 ease-in-out hover:bg-[#FFB6C1] hover:text-[#1D232A]"
          >
            Log In
          </button>
        </div>
      </form>
      <p className="text-[12px] md:text-[14px] font-thin sm:text-[13px]">
        Don’t have an account yet?{" "}
        <a
          className="font-bold font-monte text-[13px] md:text-[16px] text-[#FFB6C1] underline underline-offset-1"
          href="/auth/sign-up"
          data-discover="true"
        >
          Sign up now
        </a>
      </p>
    </div>
  );
};

export default Login;
