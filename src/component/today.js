import React, { useState } from "react";
import "./today.css";
function Today({ data }) {
  const date = new Date();
  return (
    <div className="today_container">
      <span>
        <h3 className="today_heading">Today</h3>
      </span>
      <div className="today_card">
        <div className="today_card_left">
          <p className="temp">{data.main.temp}*c</p>
          <p className="sky">{data.weather[0].main}</p>
          <p className="time">
            {date.toDateString()} <br /> {date.toLocaleTimeString()}
          </p>
        </div>
        <hr className="line_right" />
        <div className="today_card_right">
          <span className="today_card_right_text">RealFeel : {data.main.feels_like}</span>
          <span className="today_card_right_text">Humidity : {data.main.humidity}</span>
          <span className="today_card_right_text">Temp_max : {data.main.temp_max}</span>
          <span className="today_card_right_text">Temp_min : {data.main.temp_min}</span>
          <span className="today_card_right_text">Visibility : {data.visibility/10000}</span>
          <span className="today_card_right_text">Wind Speed : {data.wind.speed}</span>
        </div>
      </div>
    </div>
  );
}

export default Today;
