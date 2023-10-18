import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_CONFIG } from './serviceConfig';
import store from '../redux/store';
import { resetUserReducer } from '../redux/reducers/userReducer';




const controller = new AbortController();

const CancelToken = axios.CancelToken;

const source = CancelToken.source();
const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
});

HTTP_CLIENT.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    // const token = await AsyncStorage.getItem('@token');
    const token = store.getState().user?.authToken

    config.headers = {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    };
    config.params = config.params || {};
    config.cancelToken = source.token || {};
    config.signal = controller.signal;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function subscribeTokenRefresh(subscriber: (token: string) => void) {
  refreshSubscribers.push(subscriber);
}

function onTokenRefreshed(token: string) {
  refreshSubscribers.map(subscriber => subscriber(token));
}

function resetTokenRefreshSubscribers() {
  refreshSubscribers = [];
}

HTTP_CLIENT.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async error => {
    // console.log('INTERCEPTOR ERROR RESPONSE: ', error?.response?.status);
    // console.log('INTERCEPTOR ERROR RESPONSE: ', error.message);
    // console.log('INTERCEPTOR ERROR RESPONSE CONFIG: ', error?.config);


    const originalRequest = error.config;
    if (error?.response?.status === undefined && error?.config === undefined) {
      return Promise.reject('Hi Dude');
    } else if (error?.response?.status === 401 && !originalRequest._retry) {
    //   const cognitoId: any = store.getState()?.entities?.user?.user?.cognitoId
    //   const refreshToken = store.getState()?.entities?.user?.authToken?.refreshToken
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        // const tokenInfo = await SHS_AUTH_SERVICES.tokenRefresh(
        //   refreshToken,
        //   cognitoId,
        // );
        // console.log('REFRESH TOKEN INFO ', tokenInfo);

        if (false) {
        //   store?.dispatch(setAuthToken({
        //     accessToken: tokenInfo?.data?.accessToken,
        //     refreshToken: tokenInfo?.data?.refreshToken // 
        //   }));
        //   // store?.dispatch(setRefreshToken(tokenInfo.data.refreshToken));
        //   originalRequest.headers.Authorization =
        //     'Bearer ' + tokenInfo.data.accessToken;

        //   onTokenRefreshed(tokenInfo.data.accessToken);
        //   isRefreshing = false;

        //   return HTTP_CLIENT(originalRequest);
        } else {
          store?.dispatch(resetUserReducer());
          // store?.dispatch(resetSettings());
          isRefreshing = false;

          return Promise.reject(error);
        }
      } else {
        return new Promise(resolve => {
          subscribeTokenRefresh(token => {
            originalRequest.headers.Authorization = 'Bearer ' + token;
            resolve(HTTP_CLIENT(originalRequest));
          });
        });
      }
    }
    return Promise.reject(error);
  },
);

export default HTTP_CLIENT;
