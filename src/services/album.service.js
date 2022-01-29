import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const albumService = {
    getByalbumsid: (id) => axiosService.get(`${urls.albums}/${id}`).then(value => value.data),
    getByphotosid: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}