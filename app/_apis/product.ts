import axiosClient from "../_utils/axios-client";

export const getLatestProducts=()=>axiosClient.get("/products?populate=*")
export const getProductDetails=(id:string)=>axiosClient.get(`/products/${id}?populate=*`)
export const filterProducts=(category:string)=>axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*
`)