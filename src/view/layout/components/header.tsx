import React, {useState} from "react";
import {Dialog, DialogPanel, PopoverGroup,} from "@headlessui/react";
import {HiMiniXMark} from "react-icons/hi2";
import {IoMenu} from "react-icons/io5";
import {logo} from "../../../assets";

import {FaBriefcase, FaComments, FaGraduationCap, FaHeadset,} from "react-icons/fa6";
import {Link} from "react-router-dom";
import ProfileBtn from "../../components/profileBtn";
import useIsLoggedIn from "../../../hooks/useIsLoggedIn";

const forms = [
	{
		name: "Student Visa Application",
		description: "Pursue your academic dreams abroad",
		href: "/student-application",
		icon: FaGraduationCap,
	},
	{
		name: "Travel Visa Application",
		description: "Simplify your travel visa application",
		href: "/travel-application",
		icon: FaBriefcase,
	},
];

const callsToAction = [
	{name: "See testimonies", href: "#testimonials", icon: FaComments},
	{name: "Get in touch", href: "#", icon: FaHeadset},
];

const Header: React.FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
	const {token} = useIsLoggedIn();
	
	
	return (
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
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<IoMenu className="h-6 w-6" aria-hidden="true"/>
					</button>
				</div>
				<PopoverGroup className="hidden lg:flex lg:gap-x-12">
					<a
						href="/about-us"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						About
					</a>
					
					<a
						href="/about-us"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						For Student
					</a>
					
					<a
						href="/about-us"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Business / Pleasure
					</a>
					
					
					<a
						href={"#services"}
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Services
					</a>
					
					
					<a
						href={"#proposition"}
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Spot Reservation
					</a>
				
				</PopoverGroup>
				
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					{token !== null ? (
						<ProfileBtn/>
					) : (
						<Link
							to="/welcome/login"
							className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
						>
							Log in <span aria-hidden="true">&rarr;</span>
						</Link>
					)}
				</div>
			</nav>
			<Dialog
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10"/>
				<DialogPanel
					className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="p-6">
						<div className="flex items-center justify-between">
							<a href="/" className="-m-1.5 p-1.5">
								<span className="sr-only">Imelda Yayala</span>
								<img className="h-8 w-auto" src={logo} alt=""/>
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<HiMiniXMark className="h-6 w-6" aria-hidden="true"/>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{forms.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											<div
												className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
												<item.icon
													className="h-6 w-6 text-gray-600 group-hover:text-green-600"
													aria-hidden="true"
												/>
											</div>
											{item.name}
										</a>
									))}
								</div>
								<div className="space-y-2 py-6">
									<a
										href="/about-us"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										About
									</a>
									
									<a
										href={"#services"}
										className="text-sm font-semibold leading-6 text-gray-900"
									>
										Services
									</a>
									
									
									<a
										href={"#proposition"}
										className="text-sm font-semibold leading-6 text-gray-900"
									>
										Value Proposition
									</a>
								
								</div>
								<div className="py-6 ">
									{token !== null ? (
										<Link
											to="/app"
											className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											Dashboard <span aria-hidden="true">&rarr;</span>
										</Link>
									) : (
										<Link
											to="/welcome/login"
											className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											Log in
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
						{callsToAction.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
							>
								{item.name}
							</a>
						))}
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
};

export default Header;
