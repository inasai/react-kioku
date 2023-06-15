import { ApiCall } from "./api";

export const waresApi = {
	getWares: async (currentPage, category, sortBy, order, search) => {
    return ApiCall("get", `/Items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`);
  },
	getWare: async (id) => {
    return ApiCall("get", `/Items/${id}`);
  },
	addWare: async (image, title, types, price, category, rating) => {
    const newWare = {image, title, types, price, category, rating};
    return ApiCall("post", `/Items`, newWare);
  },
	deleteWare: async (id) => {
    return ApiCall("delete", `/Items/${id}`);
  },
}