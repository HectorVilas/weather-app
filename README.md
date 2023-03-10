# weather-app
# live: https://hectorvilas.github.io/weather-app/dist/

Welcome to my new project! This is [another practice from The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app). There are only a few requirements for this practice, just let the user input a location and fetch the weather forecast from an API and display any useful data from it on the page in no specific way.

On my previous practice, a [ToDo List](https://github.com/HectorVilas/todo-list), I did everything wrong. No problem solving, no planning, and got carried away and forgot to respect the SOLID principles. This time I want to prepare before writing a single line of code, so I'll be using this README.md as rubberducking while documenting a little my progress.

For this project I'm going to use Webpack again. I've been setting everything up, with live server so the development goes smooth. I'm still having trouble setting things up with Webpack, but I think I'm getting a better grasp of it, I like it.

<!-- ❌ ✔️ ⭕ ❓ -->

## requisites
- ✔️ a way to search for a specific location
- ✔️ allow Fahrenheit/Celsius toggle
- ❌ change the look of the page based on the data (by changing colors or by adding images that describe the weather)
- ✔️ Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information.
- ✔️ write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app
- ✔️ set up a simple form that will let users input their location and will fetch the weather info
- ⭕ display the information on your webpage
- ⭕ optional: add a "loading" component that displays from the time the form is submitted until the information comes back from the API

# planning

## the page
- ⭕ the page on desktop won't be scrollable
  - ❌ the mobile version will
- ✔️ the user on first visit will be received by a simple page with an input and a search button next to it
  - ✔️ a \<form> will be used here, with a listener on "submit"
- ✔️ to prevent errors, locations will be listed, ~~maybe~~ from another API ~~or a library~~, so the user can't input an invalid location name, ~~or maybe use it as autocomplete to be less restrictive~~
  - ✔️ a list of locations will be generated (city - estate/province - country, maybe it's coordinates too), clicking on one will fetch the forecast for this location
    - ✔️ the list may be generated while the user writes, only updating the list when the user stops writing for more than 1-1.5-2 seconds to prevent too many calls
- ❌ the city will be stored on `localStorage`
- ✔️ a loading icon or message will show while the weather forecast is fetched
  - ⭕ if it fails, the error message from the API will be shown on the page, suggesting trying again or checking the location name
- ⭕ after the weather forecast is received (by search or by finding the previous location on `localStorage`):
  - ⭕ the search bar will be moved to a less distracting place so all the focus is on the weather (or maybe the location name will be clickable to search for another one)
  - ⭕ the basic data will be shown on the center of the page (current temp, humidity, wind speed, etc)
    - ❌ if there's an unit stored on `localStorage`, this unit will be used for temps and speeds
    - ✔️ an icon will represent the current weather
    - ✔️ the temp will be shown on Celsius, clicking on it will toggle to Fahrenheit
    - ⭕ the same for the wind speed and other values, toggling between km/h and mph
      - ❌ those preferences will be stored on `localStorage`
      - ✔️ all the Celcius values on screen will be converted to Fahrenheit
      - ✔️ same for km/h and mph values
  - ❌ the background image or colors must change to something representing the current weather
  - ❌ at the bottom will be a line chart with the predicted temperatures
    - ❌ on each vector:
      - ❌ the height of the vector will represent the predicted temperature
      - ❌ the hour will appear at the bottom
      - ❌ an icon will represent the forecast (sun, clouds, rain, etc)
        - ❌ if the next vector have the same forecast, no icon will be shown
      - ❌ if the hour is at 0:00hs, a vertical line will appear

### Other ideas
- ❓ store the weather forecast on `localStorage`
  - ❓ add "expiration date" so instead of fetching from the API on each refresh, it will render the info from here
    - ❓ if it expired (the duration will depend on how often the weather forecast is updated), a fetch will be done, updating it's data on `localStorage`
  - ❓ if the location is changed, force fetch
- ❓ have the sky, clouds, ground and other parts on individual images and combine the relevant ones to form the background
  - ❓ maybe animate the clouds and weather effects and set the sun height depending on the data from the weather forecast
  - ❓ try parallax effect for clouds (or everything on mouseMove)
- ❓ a paragraph describing the weather forecast
  - ❓ if possible, a button for text-to-speech for it
- ❓ sounds for each weather (off by default)

## the code
- all the modules will be isolated from the others, the necessary data will be passed as parameter and/or callback
- ✔️ a module to fetch the weather data from the server
  - parameters: ~~location~~ latitude, longitude, GMT (optional)
  - returns: all the data as a promise
- ~~a module to convert the promise from the previous module on a readable object~~
  - ~~parameters: api response~~
  - ~~only use the neccesary info~~
  - ~~keys will be renamed to something easier to interprete~~
  - ~~returns: an object~~
- ✔️ a module to get a list of locations from the search bar
  - parameters: apiKey, locationsLimit, location
- ✔️ a module to place a DOM element listing the locations
  - parameters: an array of objects with: city, estate/province, country, latitude, longitude
- ❌ a module to manipulate `localStorage`
  - parameters: location, weather forecast as object, expiration date
- ✔️ the `date-fns` library will be used for converting the shown data on the page to something more readable
  - parameters: date, required format
- ⭕ a module for DOM manipulation with the next functions and respective listeners:
  - ⭕ a function to place all elements on DOM (search, current weather, chart...)
  - ✔️ search bar element
  - ✔️ current weather forecast elements for icons and text
  - ✔️ current weather forecast elements updater
    - parameters: weather, temp, wind speed, humidity, etc
    - action: update info on DOM (icon and paragraphs)
  - ✔️ icon picker for current weather
    - parameters: current weather
    - returns: respective weather image element
  - ❌ line chart element
  - ❌ line chart updater
  - - parameters: an array with objects, each with hour, weather icon and predicted temp
    - action: update vectors position on Y axis from the line chart, replace weather icons, update hours and move 0:00hs line if necessary
