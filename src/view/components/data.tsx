export const EnglishCert = [
  { value: "IELTS", label: "IELTS" },
  { value: "TOEFL", label: "TOEFL" },
  { value: "None", label: "None" },
];

export const HowDidYouHearAboutUs = [
  { value: "Advertisement", label: "Advertisement" },
  { value: "Education Fare", label: "Education Fare" },
  { value: "Telemarketing", label: "Telemarketing" },
  { value: "Agent", label: "Agent" },
  { value: "Others", label: "Others" },
];

export const YesNo = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

export const Gender = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

// export const whatsappLink = "https://wa.me/48791510761";
const message = `Hi, I'm from your website and I'm interested in a travel consultation. Could you please tell me more about your services and availability?`;
const applicationMessage = `Hello, I am from your website and I need assistance with my travel application. Could you please guide me through the process?`;
const encodedMessage = encodeURIComponent(message); // URL-encode the message
const applicationEncodedMessage = encodeURIComponent(applicationMessage); // URL-encode the message
export const whatsappLink = `https://wa.me/48791510761?text=${encodedMessage}`;
export const applicationWhatsappLink = `https://wa.me/48791510761?text=${applicationEncodedMessage}`;
