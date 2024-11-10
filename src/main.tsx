import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Layout from "./view/layout";
import Home from "./view/home";
import StudentApplication from "./view/applications/student";
import TravelApplication from "./view/applications/travel";
import About from "./view/about";
import Auth from "./view/auth";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import SignUp from "./view/auth/components/signup";
import Login from "./view/auth/components/login";
import App from "./view/app";
import Dashboard from "./view/app/components/dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout/>,
		children: [
			{
				path: "",
				element: <Home/>,
			},
			{
				path: "about-us",
				element: <About/>,
			},
			{
				path: "study-abroad",
				element: <About/>,
			},
			{
				path: "skilled-labor-spot-reservation",
				element: <About/>,
			},
		],
	},
	
	//  auth
	{
		path: "/welcome",
		element: <Auth/>,
		children: [
			{
				path: "register",
				element: <SignUp/>,
			},
			{
				path: "login",
				element: <Login/>,
			},
		],
	},
	
	//  app / application
	{
		path: "/app",
		element: <App/>,
		children: [
			{
				path: "",
				element: <Dashboard/>,
			},
			{
				path: "travel-visa-application",
				element: <TravelApplication/>,
			},
			{
				path: "study-visa-application",
				element: <StudentApplication/>,
			},
			{
				path: "skilled-worker-spot-reservation",
				element: <Login/>,
			},
		],
	},
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}/>
		</QueryClientProvider>
	</React.StrictMode>
);
