import React, {useEffect} from "react";
import {Toaster} from "react-hot-toast";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import {logo} from "../../assets";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

const Auth: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
	// Split the pathname into segments
	const pathSegments = location.pathname.split("/");
	const {isLoggedIn} = useIsLoggedIn();
	
	useEffect(() => {
		if (isLoggedIn) navigate("/app");
	}, [isLoggedIn, navigate]);
	// Get the last segment
	const lastSegment = pathSegments[pathSegments.length - 1];
	
	return (
		<div className="">
			<header className="bg-white">
				<nav
					className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
					aria-label="Global"
				>
					<div className="flex lg:flex-1">
						<Link to="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img className="h-8 w-auto" src={logo} alt=""/>
						</Link>
					</div>
					
					<div className="lg:flex lg:flex-1 lg:justify-end">
						<Link
							to={lastSegment === "login" ? "register" : "login"}
							className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-x-2"
						>
							{lastSegment === "login" ? "Create account" : "Log in"}
							<span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				</nav>
			</header>
			
			<Toaster
				position="top-right"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				toastOptions={{
					// Define default options
					className: "",
					duration: 5000,
					style: {
						background: "#ACEF92",
						color: "#000",
					},
					
					// Default options for specific types
					success: {
						duration: 4000,
					},
				}}
			/>
			
			<div className="h-[85dvh] flex items-center justify-center mx-auto w-full max-w-7xl px-6 lg:px-8">
				<Outlet/>
			</div>
		</div>
	);
};

export default Auth;
