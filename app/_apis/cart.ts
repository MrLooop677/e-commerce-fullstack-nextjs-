import axiosClient from "../_utils/axios-client";

export const addToCart=(payload:any)=>axiosClient.post("/carts",payload)
