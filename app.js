const request = require('request')
    // require('dotenv').config()

// require('express-async-errors')
// const express = require('express')
// const app = express()

// const connectDB = require('./db/connect');
// const productsRouter = require('./routes/products')

// const notfoundMiddleWare = require('./middleware/not-found')
// const erroMmiddleWare = require('./middleware/error-handler');


// //midelware
// app.use(express.json())


// app.use('/api/v1/products', productsRouter)

// app.use(notfoundMiddleWare)
// app.use(erroMmiddleWare)



// app.get('/', (req, res) => {
//     res.send('<h1>Store Api</h2><a href="api/v1/products">products rout</a>')
// })


//const request = require('request')

// const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-112'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
//     }
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoibWFobW9vb2RkIiwiYSI6ImNsaGozMWtlejBlNDIzZHA1YnpjZzBka3oifQ.DvVkaiL_i66EKWWhCcH93w'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
});