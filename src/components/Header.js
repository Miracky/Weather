import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "./Container";
import "./header.css";



function Header() {
  const APIKEY = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(
    localStorage.getItem("lastCity") || "london"
  );
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
      )
      .then((res) => {
        setWeatherData(res.data);
        setBackgroundImage(
          `url(https://source.unsplash.com/1600x900/?${city})`
        );
        localStorage.setItem("lastCity", city);
      });
  });

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div
      style={{ backgroundImage: backgroundImage }}
      className="header-container"
    >
      <h1>Weather</h1>
      <form>
        <select value={city} onChange={handleCityChange}>
          <option value={"london"}>London</option>
          <option value={"berlin"}>Berlin</option>
          <option value={"istanbul"}>Istanbul</option>
          <option value={"moscow"}>Moscow</option>
          <option value={"ankara"}>Ankara</option>
          <option value={"eskisehir"}>Eskisehir</option>
          <option value={"duzce"}>Düzce</option>
          <option value={"samsun"}>Samsun</option>
        </select>
      </form>
      {weatherData && <Container weatherData={weatherData} />}
    </div>
  );
}

export default Header;
