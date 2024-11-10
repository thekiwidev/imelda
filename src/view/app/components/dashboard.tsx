import React, { useEffect, useState } from "react";
import { useGetTravelApplication } from "../../../hooks/applications/useTravel";
import { FaCircleNotch } from "react-icons/fa6";
import { TravelApplicationResponse } from "../../../api/travel/types";
import { StudentApplicationResponse } from "../../../api/student/types";
import { SpotReservationResponse } from "../../../api/reservation/types";
import NoApp from "./noapp";
import ApplicationList from "./applicationList";
import { applicationTypes } from "../../../types";

type ApplicationDataState =
  | (
      | TravelApplicationResponse
      | StudentApplicationResponse
      | SpotReservationResponse
    )[]
  | null;

const Dashboard: React.FC = () => {
  const [applicationsData, setApplicationsData] =
    useState<ApplicationDataState>(null);
  const {
    data: travelData,
    isPending,
    isError,
    error,
  } = useGetTravelApplication();

  useEffect(() => {
    if (travelData)
      setApplicationsData([{ ...travelData, title: applicationTypes.travel }]);
  }, [travelData]);
  return (
    <div className="h-[55dvh] p-4">
      {isPending && (
        <div className="p-10 flex items-center justify-center">
          <FaCircleNotch className="animate-spin" />
        </div>
      )}

      {isError && (
        <div className="">
          <p>{`${error}`}</p>
        </div>
      )}

      {applicationsData && applicationsData.length > 0 && (
        <ApplicationList data={applicationsData} />
      )}

      {applicationsData === null && <NoApp />}
    </div>
  );
};

export default Dashboard;
