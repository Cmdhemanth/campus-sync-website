import axios from "axios";

export const PostRequest = async (url, data, headers) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) return;

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        ...headers,
      },
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
