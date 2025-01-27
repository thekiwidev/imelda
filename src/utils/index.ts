import toast from "react-hot-toast";
import {
  TravelApplicationForm,
  travelApplicationSections,
} from "../api/travel/types";

export const parseError = (error: { message: string }) => {
  const msg = error.message;
  if (msg) toast.error(msg);
  else toast.error(error.message);
};

export const getToken = (): string | null => {
  return localStorage.getItem("_user") || sessionStorage.getItem("_user");
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem("_rftoken") || sessionStorage.getItem("_rftoken");
};

export function generateApplicationHTML(data: TravelApplicationForm) {
  return `
    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h1 class="text-3xl font-bold text-center mb-8">Travel Application Details</h1>
      
      ${travelApplicationSections
        .map(
          (section) => `
        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">${section.title}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            ${section.fields
              .map((field) => {
                const value = data[field.key as keyof TravelApplicationForm];
                return `
                <div>
                  <p>
                    <strong class="text-gray-500">${field.label}:</strong>
                    ${Array.isArray(value) ? value.join(", ") : value}
                  </p>
                </div>
              `;
              })
              .join("")}
          </div>
        </section>
      `
        )
        .join("")}
    </div>
  `;
}
