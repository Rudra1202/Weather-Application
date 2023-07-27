import React, { useState, useEffect } from "react";
import "./daily.css";
import Daily_card from "./daily_card";
function Daily({ input }) {
  const [daily, setdaily] = useState([]);
  useEffect(() => {
    const getweather = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=bbeb0d2849a54e6bb4890854230602&q=${input}&days=3&aqi=no&alerts=no`
        );
        const accurate = await res.json();
        setdaily(accurate.forecast.forecastday);
      } catch (e) {
        console.log(e);
      }
    };
    getweather();
  }, [input]);

  return (
    <>
      <div className="daily_container">
        <span>
          <h3 className="today_heading">Daily</h3>
        </span>
        <div className="daily_card_container">
          {daily.map((item,index)=>
            <Daily_card
              key={index}
              temp_max={item.day.maxtemp_c}
              temp_min={item.day.mintemp_c}
              weather={item.day.condition.text}
              date={item.date}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Daily;
//  {daily.map((item, index) => (
// ))}

//use for loop in react ?