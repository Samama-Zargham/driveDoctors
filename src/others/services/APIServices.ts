import axios from "axios";
import HTTP_CLIENT from "../utils/axiosConfig";
import { API_CONFIG } from "../utils/serviceConfig";

interface LOGIN {
    phone: string;
    password: string;
}

interface SIGNUP {
    name: string;
    phone: string;
    password: string;
}
interface FORGOT {
    phone: string;
}

export const APIService = {
    login: async (payload: LOGIN) => {
        const body = payload;
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.auth.login}`;
        const response = await axios.post(url, body);
        return response;
    },

    signUp: async (payload: SIGNUP) => {
        const body = payload;
        const url = API_CONFIG.auth.register;
        return axios.post(url, body);
    },
    myBookings: async (customerId: string | number) => {
        const url = API_CONFIG.bookings + "/" + customerId;
        const { data } = await HTTP_CLIENT.get(url);
        return data
    },
    myvehicles: async (customerId: string | number) => {
        const url = API_CONFIG.vehicles + "/" + customerId;
        const { data } = await HTTP_CLIENT.get(url);
        return data
    },

    mainServices: async () => {
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.services}`;
        const { data } = await axios.get(url);
        return data
    }
};
