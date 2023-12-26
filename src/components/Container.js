import React from "react";

function Container({ weatherData }) {
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <img
            src={getWeatherIconUrl(weatherData.weather[0].icon)}
            alt={weatherData.weather[0].description}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          <p style={{fontSize: "24px", margin: "10px 0" }}>
            Temperature: {kelvinToCelsius(weatherData.main.temp).toFixed(2)} °C
          </p>
          <p style={{ fontSize: "18px" }}>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Container;