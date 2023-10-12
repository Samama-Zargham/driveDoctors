import axios from "axios";
import HTTP_CLIENT from "../utils/axiosConfig";
import { API_CONFIG } from "../utils/serviceConfig";

interface LOGIN {
    phone: string;
    password: string;
}

type VehiclePayload = {
    customer_id: string;
    make: string;
    model: string;
    plate: string;
};


interface SIGNUP {
    name: string;
    phone: string;
    password: string;
}
interface FORGOT {
    phone: string;
}

export const APIService = {
    login: async (body: LOGIN) => {
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.auth.login}`;
        const response = await axios.post(url, body);
        return response;
    },
    signUp: async (body: SIGNUP) => {
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.auth.register}`;
        return axios.post(url, body);
    },
    verifyOtp: async (body: SIGNUP) => {
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.auth.verifyOtp}`;
        return axios.post(url, body);
    },
    myBookings: async (customerId: string | number) => {
        const url = API_CONFIG.bookings + "/" + customerId;
        const { data } = await HTTP_CLIENT.get(url);
        return data
    },
    myvehicles: async (customerId: string | number) => {
        const url = API_CONFIG.vehicles + "/" + customerId;
        const {data} = await HTTP_CLIENT.get(url);
        return data
    },

    mainServices: async () => {
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.services}`;
        const { data } = await axios.get(url);
        return data
    },
    addVehicle: async (payload: VehiclePayload) => {
        const url = API_CONFIG.addVehicle
        const { data } = await HTTP_CLIENT.post(url, payload);
        return data
    },
    addBooking: async (payload: any) => {
        console.log({ payload })
        const url = API_CONFIG.addBooking
        return HTTP_CLIENT.post(url, payload);
    }
};
