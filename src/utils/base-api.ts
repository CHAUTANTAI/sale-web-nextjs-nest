import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

/**
 * Axios Config
 */
const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 *
 * @param method
 * @param url
 * @param data
 * @param config
 * @returns
 */
export const createAPI = async <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data: any = null,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response = await api({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error("API Error: ", error);
    throw new Error("Error calling API");
  }
};

export default api;
