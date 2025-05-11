import type { FormDataType } from "../types";


// Simulate API call
const simulatedApi = (
  data: FormDataType
): Promise<{ success: boolean; data?: FormDataType; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error response
      if (Math.random() < 0.5) {
        reject({ message: "Server error occurred. Please try again." });
      } else {
        resolve({ success: true, data });
      }
    }, 2000);
  });
};

export default simulatedApi;
