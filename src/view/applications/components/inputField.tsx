import {Field} from "formik";
import React from "react";
import {FaCircleInfo} from "react-icons/fa6";

interface InputProps {
	label: string;
	name: string;
	placeholder?: string;
	note?: string;
	type?: "input" | "email" | "number";
	gridCol?: 2 | 3 | 4 | 6;
}

const InputField: React.FC<InputProps> = ({
	label,
	name,
	note,
	placeholder,
	type = "text",
	gridCol,
}) => {
	if (gridCol === 2)
		return (
			<div
				className={`${gridCol === 2 ? "sm:col-span-2 " : gridCol === 3 ? "sm:col-span-3" : gridCol === 4 ? "sm:col-span-4" : "sm:col-span-6"}`}>
				<label
					htmlFor={name}
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					{label}
				</label>
				<div className="mt-2">
					<Field
						type="text"
						name={name}
						id={name}
						className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 outline-none"
						placeholder={placeholder}
						aria-describedby="email-description"
					/>
				</div>
				{note && (
					<p
						className="mt-2 text-sm text-gray-400 flex items-center gap-2"
						id={`${name}-description`}
					>
						<FaCircleInfo/>
						{note}
					</p>
				)}
			</div>
		);
	
	if (gridCol === 3)
		return (
			<div className={`sm:col-span-3`}>
				<label
					htmlFor={name}
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					{label}
				</label>
				<div className="mt-2">
					<Field
						type={type}
						name={name}
						id={name}
						className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 outline-none"
						placeholder={placeholder}
						aria-describedby="email-description"
					/>
				</div>
				{note && (
					<p
						className="mt-2 text-sm text-gray-400 flex items-center gap-2"
						id={`${name}-description`}
					>
						<FaCircleInfo/>
						{note}
					</p>
				)}
			</div>
		);
	
	if (gridCol === 4)
		return (
			<div className={`sm:col-span-4`}>
				<label
					htmlFor={name}
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					{label}
				</label>
				<div className="mt-2">
					<Field
						type={type}
						name={name}
						id={name}
						className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 outline-none"
						placeholder={placeholder}
						aria-describedby="email-description"
					/>
				</div>
				{note && (
					<p
						className="mt-2 text-sm text-gray-400 flex items-center gap-2"
						id={`${name}-description`}
					>
						<FaCircleInfo/>
						{note}
					</p>
				)}
			</div>
		);
	
	return (
		<div className={`sm:col-span-6`}>
			<label
				htmlFor={name}
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				{label}
			</label>
			<div className="mt-2">
				<Field
					type={type}
					name={name}
					id={name}
					className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 outline-none"
					placeholder={placeholder}
					aria-describedby="email-description"
				/>
			</div>
			{note && (
				<p
					className="mt-2 text-sm text-gray-400 flex items-center gap-2"
					id={`${name}-description`}
				>
					<FaCircleInfo/>
					{note}
				</p>
			)}
		</div>
	);
};

export default InputField;
