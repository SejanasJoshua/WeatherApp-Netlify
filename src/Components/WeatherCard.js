//import { useState, useEffect } from "react";

export default function WeatherCard({ weatherData }) {
  //const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    icon,
    cityname,
    windspeed,
    country,
    sunset,
  } = weatherData;
  // console.log(weatherData);

  // //weatherMood
  // useEffect(() => {
  //   if (weathermood) {
  //     switch (weathermood) {
  //       case "Clouds":
  //         setWeatherState("wi-cloudy");
  //         break;
  //       case "Haze":
  //         setWeatherState("wi-fog");
  //         break;
  //       case "Clear":
  //         setWeatherState("wi-day-sunny");
  //         break;
  //       case "Rain":
  //         setWeatherState("wi-rain");
  //         break;

  //       default:
  //         setWeatherState("wi-day-sunny");
  //     }
  //   }
  // }, [weathermood]);

  //coverting time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let times = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <article className="widget">
      <div className="weatherIcon">
        {/* <i className={`wi ${weatherState}`}></i> */}
        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={weathermood}
        ></img>
      </div>
      <div className="weatherInfo">
        <div className="temperature">
          <span>{temp}&deg;</span>
        </div>
        <div className="description">
          <div className="weatherCondition">{weathermood}</div>
          <div className="place">
            {cityname},{country}
          </div>
        </div>
      </div>
      <div className="date">{new Date().toLocaleString()}</div>

      <div className="extra-temp">
        <div className="temp-info-minmax">
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-sunset"}></i>
            </p>
            <p className="extra-info-leftside">
              {times}
              <br />
              Sunset
            </p>
          </div>
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p className="extra-info-leftside">
              {humidity}%
              <br />
              Humidity
            </p>
          </div>
        </div>
        <div className="weather-extra-info">
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-barometer"}></i>
            </p>
            <p className="extra-info-leftside">
              {pressure}(hPa)
              <br />
              Pressure
            </p>
          </div>
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-windy"}></i>
            </p>
            <p className="extra-info-leftside">
              {windspeed}m/s
              <br />
              Windspeed
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
