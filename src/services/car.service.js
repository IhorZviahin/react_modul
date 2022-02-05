import {axiosService} from "./axios.service";

import urls from "../Constants/urls";

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    create: (car) => axiosService.post(urls.cars, car).then((value => value.data)),
    deletyByid: (id) => axiosService.delete(`${urls.cars}/${id}`)
}