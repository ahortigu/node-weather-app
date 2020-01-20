const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// const url = 'https://api.darksky.net/forecast/ce6678b032480b1a6eebc71de3e5e0cd/37.8267'
// const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiYWhvcnRpZ3UiLCJhIjoiY2s1Z3N5a21jMGFjbTNsbWl6cWRpanN5eCJ9.ZuekBdhBfmVBibcEER5FmQ&limit=1%27'

const address = process.argv[2]
    if (!address){
        console.log ('Please provide a location')
    } else{
        geocode(address, (error, data) => {
            if(error){
                return console.log('Error', error)
            }
            forecast(data.latitude, data.longitude, (error, forecastData) => {
                if(error){
                    return console.log(error)
                }
                console.log(data.location)
                console.log(forecastData)
            })
        })
        

    }


