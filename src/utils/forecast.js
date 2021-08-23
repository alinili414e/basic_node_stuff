
const request = require('postman-request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=97742fbda0c8d66c55a9b1dc800f9eee&query=' + long + ',' + lat + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            console.log('Unable to connect to weather service');
        } else if (body.error) {
            callback('Unable to find specific location.Try another Search', undefined)
        }
        else {
            const temp = body.current.temperature;
            const feelsLike = body.current.feelslike;
            const desc = body.current.weather_descriptions[0]
            const uv_index = body.current.uv_index;
            callback(undefined,

                desc + ' .It is currently ' + temp + ' degrees.It feels like ' + feelsLike + '. The UV index is ' + uv_index
            )
        }

    })
}

module.exports = forecast;


// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service');
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     }
//     else {
//         const temp = response.body.current.temperature;
//         const feelsLike = response.body.current.feelslike;
//         const desc = response.body.current.weather_descriptions[0]
//         console.log(desc + ' .It is currently ' + temp + ' degrees.It feels like ' + feelsLike);
//     }


// })