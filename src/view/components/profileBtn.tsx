import {Popover, PopoverButton, PopoverPanel} from "@headlessui/react";
import {FaCircleUser} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import {clearToken} from "../../api/auth";

const ProfileBtn = () => {
	const navigate = useNavigate()
	const onLogout = () => {
		clearToken()
		navigate("welcome/login")
	};
	
	return (
		<Popover>
			<PopoverButton
				className="flex items-center justify-center gap-x-2 mx-auto rounded-full text-gray-500 hover:text-green-600 duration-150 data-[active]:text-green-800 outline-none">
				<FaCircleUser size={24}/>
			</PopoverButton>
			<PopoverPanel
				transition
				anchor="bottom"
				className="divide-y divide-white/5 rounded-xl bg-white/90 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 -translate-x-4 data-[closed]:opacity-0 border mt-2 w-[200px]"
			>
				<div className="p-3">
					<a
						href="/app"
						className="block rounded-lg py-2 px-3 transition hover:bg-gray-100"
					>
						<p className="font-semibold text-black">Go to dashboard</p>
					</a>
					
					<div className="pb-4 border-b mb-1"/>
					
					<div
						className="flex rounded-lg py-2 px-3 gap-x-2 transition hover:bg-gray-100 items-center "
						role="button"
						onClick={onLogout}
					>
						<p className="font-semibold text-black">Log out</p>
					</div>
				</div>
			</PopoverPanel>
		</Popover>
	);
};

export default ProfileBtn;
