const BASE_URL = "https://cars-doctors.com/api";
export const BUCKET_URL = "https://cars-doctors.com/public/assets/icon";
export const API_CONFIG = {
    BASE_URL,
    BUCKET_URL,

    auth: {
        login: '/getOTP',
        register: '/register',
        verifyOtp: '/authOTP'
    },
    bookings: '/bookings/list',
    vehicles: '/vehicles/list',
    services: '/services',
    addVehicle: '/vehicles/add',
    addBooking: '/bookings/add',
    notifications: '/notifications',
    deleteAccount: '/delete',
    updateProfile: '/update',
    settings: "/settings"

}