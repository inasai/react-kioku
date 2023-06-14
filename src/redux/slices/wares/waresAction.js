import { waresApi } from "../../../API/waresApi";
import { setWares, setWare } from "./waresSlice";

export const WaresActionCreators = {
	fetchDevices: (currentPage, category, sortBy, order, search) => async (dispatch) => {
		try {
			const wares = await waresApi.getWares(currentPage, category, sortBy, order, search);
			dispatch(setWares(wares));
		} catch(e) {
			console.log(e)
		}
	},
	fetchDevice: (id) => async (dispatch) => {
		try {
			const ware = await waresApi.getWare(id);
			dispatch(setWare(ware));
		} catch(e) {
			console.log(e)
		}
	},
}
      