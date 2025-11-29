import axios from "axios";
import Constants from 'expo-constants';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ApiURL = () => {
  // Production backend URL
  return "https://clienttrack-backend.vercel.app";
  
  // For local development, comment above and uncomment below:
  // const debuggerHost = Constants.expoConfig?.hostUri;
  // if (debuggerHost) {
  //   const host = debuggerHost.split(':')[0];
  //   return `http://${host}:3000`;
  // }
  // return "http://localhost:3000";
};

const API = axios.create({
  baseURL: ApiURL(),
  headers: { 'Content-Type': "application/json" }
});

API.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
