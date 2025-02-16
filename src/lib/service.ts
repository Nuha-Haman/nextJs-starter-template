import axiosInstance from "@/lib/api";

//  get
const getRequest = async (url: string) => {
  const response = await axiosInstance.get(url);
  return response.data;
};

// create
const postRequest = async (url: string) => {
  const response = await axiosInstance.post(url);
  return response?.data;
};

// update
const patchRequest = async (url: string) => {
  const response = await axiosInstance.patch(url);
  return response?.data;
};

// delete
const deleteRequest = async (url: string) => {
  const response = await axiosInstance.delete(url);
  return response?.data;
};

const service = {
  getRequest,
  postRequest,
  patchRequest,
  deleteRequest,
};

export default service;
