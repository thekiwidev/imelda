import api from "..";
import {TravelApplicationForm, TravelApplicationResponse} from "./types";

export const createTravelApplication = async (
	payload: TravelApplicationForm
) => {
	const response = await api.post<TravelApplicationResponse>(
		"/application/user/new-travel-application",
		payload
	);
	return response.data;
};

export const getTravelApplication = async () => {
	const response = await api.get<TravelApplicationResponse>("/application/user/get-travel-application");
	return response.data;
};

export const updateTravelApplication = async (
	payload: TravelApplicationForm
) => {
	const response = await api.put(
		"/application/user/update-travel-application",
		payload
	);
	return response.data;
};

export const deleteTravelApplication = async () => {
	const response = await api.delete(
		"/application/user/delete-travel-application"
	);
	return response.data;
};
