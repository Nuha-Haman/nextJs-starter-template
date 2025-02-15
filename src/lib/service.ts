// import axiosInstance from '@/lib/api';
// // import { fileHeader, header, removeExtraWhiteSpace } from '@/api/helpers';
// import { AxiosResponse } from 'axios';

// //  get
// const getRequest = async (url: string) => {
//   const response = await axiosInstance.get(url, header());
//   return response.data;
// };

// // create
// const postRequest = async (url: string, option: any) => {
//   const { data } = option;
//   const response = await axiosInstance.post(
//     url,
//     removeExtraWhiteSpace(data),
//     header()
//   );
//   return response?.data;
// };

// // update
// const patchRequest = async (url: string, option: any) => {
//   const { data } = option;

//   const response = await axiosInstance.patch(
//     url,
//     removeExtraWhiteSpace(data),
//     header()
//   );
//   return response?.data;
// };

// const patchRequestFormData = async (
//   url: string,
//   option: any
// ): Promise<
//   AxiosResponse<any, any> | { status: number | boolean; fields: any[] }
// > => {
//   const { data } = option;
//   const form_data = new FormData();

//   for (let key in data) {
//     form_data.append(key, data[key]);
//   }

//   const res = await axiosInstance.post(url, form_data, {
//     headers: fileHeader()?.headers,
//   });
//   return res;
// };

// // delete
// const deleteRequest = async (url: string) => {
//   const response = await axiosInstance.delete(url, header());
//   return response?.data;
// };

// const service = {
//   getRequest,
//   postRequest,
//   patchRequest,
//   deleteRequest,
//   patchRequestFormData,
// };

// export default service;
