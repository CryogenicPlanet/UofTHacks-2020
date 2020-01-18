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

const URL = "pro.openweathermap.org/data/2.5/forecast/"
const KEY = `&APPID=${weatherKey}`


export const getHourlyWeatherData = () => {
    const { longitude, latitude } = temp;
    const part = `hourly?lat=${latitude}&lon=${longitude}`
    axios.get(`${URL}${part}${KEY}`)
        .then((res) => {

        })
        .catch(err => {
            console.log(err)
        })
}

export const getSixteenDayWeatherData = () => {
    const { longitude, latitude } = temp;
    const part = `daily?lat=${latitude}&lon=${longitude}&cnt=${7}`
    axios.get(`${URL}${part}${KEY}`)
        .then((res) => {

        })
        .catch(err => {
            console.log(err)
        })
    
}

export const getCurrentWeaetherData = () => {
    const { longitude, latitude } = temp;
    const part = `weather?lat=${latitude}&lon=${longitude}`
    axios.get(`${URL}${part}${KEY}`)
        .then((res) => {

        })
        .catch(err => {
            console.log(err)
        })
}


export const getClothData = () => {

}