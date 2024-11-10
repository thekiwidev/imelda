import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const useIsLoggedIn = () => {
  //   const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>("");

  const getToken = (): string | null => {
    return localStorage.getItem("_user") || sessionStorage.getItem("_user");
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
      setToken(token);
    } else {
      setIsLoggedIn(false);
      setToken(null);
    }
  }, []);

  return { isLoggedIn, token };
};

export default useIsLoggedIn;
