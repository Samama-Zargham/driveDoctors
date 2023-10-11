import { createSlice } from '@reduxjs/toolkit';
import { convertArrayToObject } from '../../utils/helpers';


export type Service = {
  id: string;
  name: string;
  charges: string;
  icon: string;
  category: string;
};

export type ServicesObject = Record<string, Service>;
interface State {
  user: any;
  authToken: any;
  bookings: any[];
  vehicles: any[];
  services: Service[];
  servicesObject: ServicesObject;
  loggedInUser: boolean;
  selectedServices: any;
  snackBar: {
    duration: 3000,
    message: '',
    type: 'error', //'success' || 'error' ||  'info',
  };
}

const initialState: State = {
  user: null,
  authToken: null,
  selectedServices: {},
  bookings: [],
  vehicles: [],
  services: [],
  servicesObject: {},
  loggedInUser: false,
  snackBar: {
    duration: 3000,
    message: '',
    type: 'error', //'success' || 'error' ||  'info',
  },
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserReducer: () => initialState,
    setUser: (state, action) => {
      console.log({ payload: action.payload })
      state.user = action.payload.user;
      state.authToken = action.payload.access_token;
      state.loggedInUser = action.payload.loggedInUser
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setSelectedServices: (state, action) => {
      state.selectedServices = action.payload;
    },
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },
    setVehicles: (state, action) => {
      state.vehicles = action.payload;
    },
    setServices: (state, action) => {
      state.services = action.payload;
      state.servicesObject = convertArrayToObject(action.payload);
    },

    setLoggedInUser: (state, action) => {
      console.log("payload", action.payload);
      state.loggedInUser = action.payload;
    },
    updateSnackBar: (state, action) => {
      state.snackBar.type = action.payload.type
      state.snackBar.message = action.payload.message
    },

  },
});
//will give the all user Redux data from store
export const getUserDetails = (state: any) => state.entities.user;
//will give the only user Roles Redux data from store
export const getUserRoles = (state: any) => state.entities.user.userRole;
//will give the only LogedInuser Roles Redux data from store
export const getLoggedInUser = (state: any) => state.entities.user.loggedInUser;

export const { resetUserReducer, setSelectedServices, setUser, setAuthToken, updateSnackBar, setLoggedInUser, setBookings, setVehicles, setServices } = userReducer.actions;

export default userReducer.reducer;
