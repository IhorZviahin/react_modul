import axios from "axios";

import baseURL from "../Constants/urls";

export const axiosService = axios.create({baseURL});
