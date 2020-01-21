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
const CLOTHURL = "http://35.194.39.206:80/getClothes"


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
    const part = `&query=${latitude},${longitude}&forecast_days=7`
    axios.get(`${URL}${part}${KEY}`)
        .then((res) => {

        })
        .catch(err => {
            console.log(err)
        })
    
}

export const getCurrentWeatherData = async () => {
    const { longitude, latitude } = temp.coords;
    const part = `&query=${latitude},${longitude}`
    return await axios.get(`${URL}${KEY}${part}`)
        .then((res) => {
            const { temperature, humidity, feelslike, precip, wind_speed, weather_descriptions } = res.data.current
            const wdesc = weather_descriptions[0]
            return ({ temperature, humidity, feelslike, precip, wind_speed, wdesc })
        })
        .catch(err => {
            console.log(err)
        })
}


export const getClothData = async () => {
    return await axios.get('http://35.194.39.206:80/getClothes?location=Toronto')
        .then((res) => {
            const data = res.data
            const arr = [];
            for(let i = 0 ; i < data.length; i++) {
                const { img, type } = data[i]
                // console.log(img, type);
                img = "data:image/png;base64," + img

                arr.push({ type, img })
            }
            return arr
        })
}