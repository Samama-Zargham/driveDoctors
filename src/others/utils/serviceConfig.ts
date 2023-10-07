const URL = "https://cars-doctors.com/api";
export const BUCKET_URL = "http://cars-doctors.com/public/assets/icon";
export const API_CONFIG = {
    BASE_URL: URL,
    BUCKET_URL,

    auth: {
        login: '/login',
        register: '/register',
    },
    bookings: '/bookings/list',
    vehicles: '/vehicles/list',
    services: '/services',

}