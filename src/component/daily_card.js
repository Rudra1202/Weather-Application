import React from "react";
import "./daily.css";
function Daily_card(props) {
  return (
    <>
      <div className="daily_card">
        <span className="daily_context">
          <p className="daily_sky">{props.weather}</p>
          <p className="daily_time">{props.date}</p>
          <p className="daily_temp">Max_Temp: {props.temp_max}*c</p>
          <p className="daily_temp">Min_Temp: {props.temp_min}*c</p>
        </span>
      </div>
    </>
  );
}

export default Daily_card;
