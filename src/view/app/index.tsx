import { Link, Outlet, useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import ProfileBtn from "../components/profileBtn";
import Footer from "../layout/components/footer";

const App = () => {
  const navigate = useNavigate();
  const { token } = useIsLoggedIn();

  useEffect(() => {
    if (token === null) navigate("/welcome/login");
  }, [navigate, token]);

  return (
    <div className="">
      <Toaster
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          duration: 5000,

          // Default options for specific types
          success: {
            duration: 5000,
          },
        }}
      />
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </Link>
          </div>

          <div className="lg:flex lg:flex-1 lg:justify-end">
            <ProfileBtn />
          </div>
        </nav>
      </header>
      <Outlet />
      <div className="bg-green-200">
        <Footer />
      </div>
    </div>
  );
};

export default App;
