import axios from "axios";

const apiKey = 'c342f50d0a504b6f97885005232101';

async function getWeather(city) {
    const url = `http://api.weatherapi.com/v1/current.json`;

    const data = await axios.get(url,{
        params:{
            key: apiKey,
            q:city
        }
    })
        .then((response)=> response.data)

    return {
        'city': data.location.name,
        'country': data.location.country,
        'desc': data.current.condition.text,
        'temp': data.current.temp_c,
        'image': 'https:' + data.current.condition.icon
    };
}

export default getWeather;