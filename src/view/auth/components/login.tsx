import { useEffect, useState } from "react";
import { useLogin } from "../../../hooks/auth/useAuth";
import {
  FaCircleCheck,
  FaCircleNotch,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa6";
import toast from "react-hot-toast";
import { AuthPayload } from "../../../api/auth/types";
import { Link, useNavigate } from "react-router-dom";

interface FormErrors {
  email?: string;
  password?: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AuthPayload>({
    email: "",
    password: "",
  });
  const [saveToken, setSaveToken] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const { mutate, isPending, data } = useLogin();

  useEffect(() => {
    if (data) {
      setFormData({ email: "", password: "" });

      // Check if `saveToken` is true or false
      if (saveToken) {
        localStorage.setItem("_user", data.token);
        localStorage.setItem("_rftoken", data.refreshToken);
      } else {
        sessionStorage.setItem("_user", data.token);
        sessionStorage.setItem("_rftoken", data.refreshToken);
      }
      // Redirect the user after
      navigate("/app");
    }
  }, [data, navigate, saveToken, isPending]);

  const validateEmail = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // perform form submission logic here

    if (errors.email || errors.password) return;

    mutate(formData, {
      onSuccess: () => {
        toast.custom(
          <div className="flex items-start gap-x-2 bg-green-50 p-3 rounded-xl border border-green-300 w-[fit-content] ">
            <div className="">
              <FaCircleCheck className="text-green-400" size={24} />
            </div>
            <p className="">
              Login Successful! <br />
              <span className="text-gray-500 text-sm font-medium">
                You can now start a new application, <br /> or update an
                existing application!
              </span>
            </p>
          </div>,
          {
            duration: 6000,
            position: "top-right",
          }
        );
      },
    });
  };

  useEffect(() => {
    if (errors.email || errors.password)
      console.log(errors.email, errors.password);
  }, [errors]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={emailChange}
                  onBlur={validateEmail}
                  required
                  autoComplete="email"
                  className={`block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 outline-none ${
                    errors.email &&
                    "ring-2 ring-red-500 focus:ring-red-500 text-red-500"
                  }`}
                />
                {errors.email && (
                  <span className="text-[12px] font-medium text-red-500">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={passwordChange}
                    onBlur={validatePassword}
                    required
                    autoComplete="current-password"
                    className={`block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 ${
                      errors.password && "ring-2 ring-red-500 text-red-500"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    {showPassword ? (
                      <FaEyeSlash
                        className="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <FaEye
                        className="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>

                <div>
                  {errors.password && (
                    <span className="text-[12px] font-medium text-red-500">
                      {errors.password}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={saveToken}
                  onChange={() => setSaveToken(!saveToken)}
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-green-600 hover:text-green-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={
                  isPending ||
                  formData.email.trim() === "" ||
                  formData.password.trim() === "" ||
                  errors.password !== undefined ||
                  errors.email !== undefined
                }
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:bg-green-100 disabled:text-gray-300 disabled:cursor-not-allowed duration-150 items-center gap-x-2"
              >
                {isPending ? (
                  <>
                    <FaCircleNotch
                      color="#16a34a"
                      className="animate-spin duration-150"
                    />
                    <span>Logging in...</span>
                  </>
                ) : (
                  <span>Log in</span>
                )}
              </button>
            </div>
          </form>

          <div>
            <div className="relative mt-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span className="text-sm font-semibold leading-6">Google</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/welcome/register"
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
