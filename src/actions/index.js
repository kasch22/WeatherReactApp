import axios from 'axios';

const API_KEY = '498103c059f2dae94f7a77a131046f94';
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCHER_WEATHER';

export function fetchWeather(city) {
    const URL = `${ROUTE_URL}&q=${city},us`;
    const request = axios.get(URL);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

