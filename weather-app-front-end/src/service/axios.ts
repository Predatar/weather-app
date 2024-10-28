import axios from "axios";

export const fetcher = axios.create({baseURL: import.meta.env.VITE_WEATHER_API_BASE})