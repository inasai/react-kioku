import { waresApi } from '../../../API/waresApi';
import { setWares, setWare, deleteWare, addWare } from './waresSlice';

export const WaresActionCreators = {
  fetchDevices: (currentPage, category, sortBy, order, search) => async (dispatch) => {
    try {
      const wares = await waresApi.getWares(currentPage, category, sortBy, order, search);
      dispatch(setWares(wares));
    } catch (e) {
      console.log(e);
    }
  },
  fetchDevice: (id) => async (dispatch) => {
    try {
      const ware = await waresApi.getWare(id);
      dispatch(setWare(ware));
    } catch (e) {
      console.log(e);
    }
  },
  addDevice: (image, title, types, price, category, rating) => async (dispatch) => {
    try {
      const ware = await waresApi.addWare(image, title, types, price, category, rating);
      dispatch(addWare(ware));
    } catch (e) {
      console.log(e);
    }
  },
  deleteDevice: (id) => async (dispatch) => {
    try {
      await waresApi.deleteWare(id);
      dispatch(deleteWare(id));
    } catch (e) {
      console.log(e);
    }
  },
};
