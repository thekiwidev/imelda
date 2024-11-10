import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createTravelApplication,
  deleteTravelApplication,
  getTravelApplication,
  updateTravelApplication,
} from "../../api/travel";
import { parseError } from "../../utils";
import { AxiosError } from "axios";
import { TravelApplicationResponse } from "../../api/travel/types";
import { applicationQueries } from "./types";

export const useCreateTravelApplication = () => {
  return useMutation({
    mutationFn: createTravelApplication,
    onSuccess: (data) => data,
    onError: (error: AxiosError) => {
      if (error.response) {
        parseError(error.response.data as { message: string });
      } else {
        // Handle cases where response is undefined, like network errors
        console.error("Network error or no response received:", error.message);
      }
    },
  });
};

export const useGetTravelApplication = () => {
  return useQuery<TravelApplicationResponse, AxiosError>({
    queryKey: [applicationQueries.getTravelApplication],
    queryFn: getTravelApplication,
  });
};

// export const useGetN400ApplicantInfo2 = () => {
//   return useQuery(
//     [applicationQueries.getTravelApplication],
//     getTravelApplication,
//     {
//       onError: (error: AxiosError) => parseError(error),
//       select: (data: TravelApplicationResponse) => data.data,
//     }
//   );
// };

export const useUpdateTravelApplication = () => {
  return useMutation({
    mutationFn: updateTravelApplication,
    onSuccess: (data) => data,
    onError: (error: AxiosError) => {
      if (error.response) {
        parseError(error.response.data as { message: string });
      } else {
        console.error("Network error or no response received:", error.message);
      }
    },
  });
};

export const useDeleteTravelApplication = () => {
  return useMutation({
    mutationFn: deleteTravelApplication,
    onSuccess: () => {
      // Optionally, invalidate the query to refetch data or update the UI
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        parseError(error.response.data as { message: string });
      } else {
        console.error("Network error or no response received:", error.message);
      }
    },
  });
};
