import {TravelApplicationResponse} from "../../../api/travel/types";
import {StudentApplicationResponse} from "../../../api/student/types";
import {SpotReservationResponse} from "../../../api/reservation/types";
import {FaArrowRight, FaPlaneDeparture} from "react-icons/fa6";
import {applicationTypes} from "../../../types";
import {IoSchool} from "react-icons/io5";
import {TbBookmarkFilled} from "react-icons/tb";
import {Link} from "react-router-dom";
import React from "react";

interface ApplicationDataState {
	data:
		| (
		| TravelApplicationResponse
		| StudentApplicationResponse
		| SpotReservationResponse
		)[]
		| null;
}

const ApplicationList: React.FC<ApplicationDataState> = ({data}) => {
	
	return (
		<ul
			role="list"
			className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
		>
			{data &&
				data.map((application) => (
					<li
						key={application.id}
						className="overflow-hidden rounded-xl border border-gray-200"
					>
						<div className="flex items-center gap-x-4  bg-gray-50 p-6">
							<div className="">
								{application.title === applicationTypes.travel && (
									<FaPlaneDeparture size={24} className=""/>
								)}
								{application.title === applicationTypes.study && (
									<IoSchool size={24} className=""/>
								)}
								{application.title === applicationTypes.reservation && (
									<TbBookmarkFilled size={24} className=""/>
								)}
							</div>
							<div className="font-medium flex-1">
								<p>{application.title}</p>
							</div>
							
							<Link to={application.title === applicationTypes.travel ? "travel-visa-application" :
								application.title === applicationTypes.study ? "study-visa-application" : "skilled-worker-spot-reservation"}>
								<FaArrowRight/>
							</Link>
						
						</div>
						<dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
							<div className="flex justify-between gap-x-4 py-3">
								<dt className="text-gray-500">Last invoice</dt>
								<dd className="text-gray-700">
									<time dateTime="">{/* {client.lastInvoice.date} */}</time>
								</dd>
							</div>
							<div className="flex justify-between gap-x-4 py-3">
								<dt className="text-gray-500">Status</dt>
								<dd className="flex items-start gap-x-2">
									<div
										className={`rounded-md px-2 py-1 text-xs font-medium border border-gray-100`}
									>
										{application.status}
									</div>
								</dd>
							</div>
						</dl>
					</li>
				))}
		</ul>
	);
};

export default ApplicationList;
