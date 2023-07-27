import React, { useEffect, useState } from 'react'

function Weather() {
    const [data,setdata] = useState([]);
    const getweather = async ()=>{
        try {
            const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=ahmedabad,india&appid=3808c3bdf3cad8baea514bb829a10e13&units=metric ')
            const accurate = await res.json() ;
            // console.log(accurate);
            setdata(accurate.main.temp);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(()=>{
        getweather();
    },[])
  return (
    <div>
      <h1>todays weather : {data}</h1>
    </div>
  )
}

export default Weather



// app.js
// import React, { useState } from "react";
// import Forecast from "./component/forecast";
// import "./App.css";
// import Today from "./component/today";
// import Daily from "./component/daily";
// function App() {
//   const [list, setnote] = useState({});
//   function onChange(event) {
//     setnote(event);
//   }
//   // console.log(list.main);
//   return (
//     <div>
//       <div className="app">
//         <div className="container">
//           <div className="left_sidebar">
//             <Forecast onChange={setnote} />
//           </div>
//           <div className="right_sidebar">
//             <Today lists={list} />
//             <Daily />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// forcast.js
// import React, { useState, useEffect } from "react";
// import "./forecast.css";
// function Forecast(props) {
//   const [input, setinput] = useState("");
//   useEffect(() => {
//     const getweather = async () => {
//       try {
//         const res = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=3808c3bdf3cad8baea514bb829a10e13`
//         );
//         const accurate = await res.json();
//         props.onChange(accurate);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getweather();
//   }, [input]);
//   return (
//     <>
//       <div className="left_sidebar_menu">
//         <span>Forecast</span>
//         <span className="forecast_contain">
//           <i className="fas fa-street-view"></i>
//           <div className="forecast_contain_text">
//             <span>current location</span>
//             <span value="">{input}</span>
//           </div>
//         </span>
//       </div>
//       <div className="forecast_box">
//         <h1 className="heading">The Only Weather Forecast You Need</h1>
//         <hr className="line" />
//         <span className="search_box">
//           <input
//             className="search"
//             type={Text}
//             placeholder="Enter location"
//             onChange={(e) => {
//               setinput(e.target.value);
//             }}
//           />
//         </span>
//       </div>
//     </>
//   );
// }
// //how to decrease transprancy in css of box?
// //how to transfer data from child to parent in react-js?
// // import { useState } from "react";

// // import ChildrenComponent from "./ChildrenComponent";

// // const ParentComponent = () => {
// //   const [dataFromChild, setDataFromChild] = useState("");

// //   console.log(dataFromChild);
// //   return (
// //     <div>
// //       <ChildrenComponent setDataFromChild={setDataFromChild} />
// //     </div>
// //   );
// // };

// // export default ParentComponent;

// // import { useState } from "react";

// // const ChildrenComponent = ({ setDataFromChild }) => {
// //   const [data, setData] = useState("");

// //   const handleChange = (e) => {
// //     setData(e.target.value);
// //   };
// //   setDataFromChild(data);
// //   return (
// //     <div>
// //       <label htmlFor="data"></label>
// //       <input type="text" id="data" name="data" onChange={handleChange} />
// //       <span>Its Data: </span>
// //       <span>{data}</span>
// //     </div>
// //   );
// // };

// // export default ChildrenComponent;

// //Source: https://stackoverflow.com/questions/69343959

// export default Forecast;


// today.js
// import React from "react";
// import Forecast from "./forecast";
// import "./today.css";
// function Today(props) {
//   const date = new Date();
//   // console.log(props.lists.main.temp);
//   return (
//     <div className="today_container">
//       <span>
//         <h3 className="today_heading">Today</h3>
//       </span>
//       <div className="today_card">
//         <div className="today_card_left">
//           <p className="temp">*C</p>
//           <p className="sky">Cloudy</p>
//           <p className="time">{date.toDateString()} <br /> {date.toLocaleTimeString()}</p>
//         </div>
//         <hr className="line_right" />
//         <div className="today_card_right">RealFeel : </div>
//       </div>
//     </div>
//   );
// }

// export default Today;
// //export a value in react function?
// //pass a value from parent to child in react-js?
