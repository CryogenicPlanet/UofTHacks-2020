import axios from 'axios';
import { weatherKey } from './secret.js';

const temp =  {
    coords: {
        speed: -1,
        longitude: -79.39708542355888,
        latitude: 43.660680794790544,
        accuracy: 165,
        heading: -1,
        altitude: 104.48005676269531,
        altitudeAccuracy: 12.772796630859375
    },
    timestamp: 1579324985288.924
}

const URL = "http://api.weatherstack.com/current"
const KEY = `?access_key=${weatherKey}`


export const getHourlyWeatherData = () => {
    const { longitude, latitude } = temp;
    const part = `&query=${latitude},${longitude}`
    axios.get(`${URL}${part}${KEY}`)
        .then((res) => {

        })
        .catch(err => {
            console.log(err)
        })
}

export const getSixteenDayWeatherData = () => {
    const { longitude, latitude } = temp.coords;
    const part = `daily?lat=${latitude}&lon=${longitude}&cnt=${7}`
    axios.get(`${URL}${part}${KEY}`)
        .then((res) => {

        })
        .catch(err => {
            console.log(err)
        })
    
}

export const getCurrentWeatherData = () => {
    const { longitude, latitude } = temp.coords;
    const part = `&query=${latitude},${longitude}`
    axios.get(`${URL}${KEY}${part}`)
        .then((res) => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
}


export const getClothData = () => {

}