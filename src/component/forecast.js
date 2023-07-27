import React, { useState, useEffect } from "react";
import "./forecast.css";
import Today from "./today";
import Daily from "./daily";
function Forecast() {
  const [list, setlist] = useState("");
  const [input, setinput] = useState("Ahmedabad");
  const [data, setdata] = useState({"coord":{"lon":72.6167,"lat":23.0333},"weather":[{"id":711,"main":"Smoke","description":"smoke","icon":"50d"}],"base":"stations","main":{"temp":26.02,"feels_like":26.02,"temp_min":26.02,"temp_max":26.02,"pressure":1014,"humidity":38},"visibility":5000,"wind":{"speed":3.09,"deg":330},"clouds":{"all":5},"dt":1675665003,"sys":{"type":1,"id":9049,"country":"IN","sunrise":1675648043,"sunset":1675688386},"timezone":19800,"id":1279233,"name":"Ahmedabad","cod":200});

  function handleChange() {
    setinput(list);
    setlist("");
  }

  useEffect(() => {
    const getweather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${process.env.REACT_APP_DAILY_API}`
        );
        const accurate = await res.json();
        setdata(accurate);
      } catch (e) {
        console.log(e);
      }
    };
    getweather();
  }, [input]);
  return (
    <>
      <div className="left_sidebar">
        <div className="left_sidebar_menu">
          <span><h1>Forecast</h1></span>
          <span className="forecast_contain">
            <i className="fas fa-street-view"></i>
            <div className="forecast_contain_text">
              <span>current location</span>
              <span value="">{input}</span>
            </div>
          </span>
        </div>
        <div className="forecast_box">
          <h1 className="heading">The Only Weather Forecast You Need</h1>
          <hr className="line" />
          <span className="search_box">
            <input
              className="search"
              type={Text}
              placeholder="Enter location"
              onChange={(e) => {
                setlist(e.target.value);
              }}
              value={list}
            />
            <input
              className="button"
              type="button"
              value="search"
              onClick={handleChange}
            ></input>
          </span>
        </div>
      </div>
      <div className="right_sidebar">
        <Today data={data} />
        <Daily input={input} />
      </div>
    </>
  );
}
export default Forecast;
