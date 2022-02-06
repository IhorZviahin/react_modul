import {axiosService} from "./axios.service"
import {urls} from "../constants";

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    deleteByid: (id) => axiosService.get(`${urls.cars}/${id}`),
    updateByid: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}