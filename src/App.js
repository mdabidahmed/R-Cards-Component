// import React from "react";
// import "./App.css";

// const styleHeading = {
//   textTransform: "capitalize",
//   borderRadius: "10%",
// };

// let timeNow = new Date(2020, 5, 5, 19); //Year, months, date, hours
// timeNow = timeNow.getHours();
// var i = 0;
// let greeting = "";
// if ((timeNow > 0) & (timeNow <= 11)) {
//   i = 1;
//   greeting = "Good Morning";
// } else if ((timeNow >= 12) & (timeNow < 19)) {
//   i = 2;
//   greeting = "Good Afternoon";
// } else {
//   i = 3;
//   greeting = "Good Night";
// }

// function App() {
//   return (
//     <div>
//       <div id="divClass">
//         <h1>
//           <span id="head" style={styleHeading}>
//             Hello Sir, <span className={`hoursColor${i}`}>{greeting}</span>{" "}
//           </span>
//         </h1>
//       </div>
//       <h2>Creating Simple Greeting Website using React JS</h2>
//       <hr />
//       <h3>
//         1. Show a heading that says Hellow Sir, Good Morning if time is between
//         1 to 11 am
//       </h3>

//       <h3>2. Good Afternoon, if 12PM to 7PM</h3>
//       <h3>
//         3. Apply CSS in it, then dynamically change the color of Greeting parts
//         only using Inline CSS style. Ex Green , Blue etc
//       </h3>
//     </div>
//   );
// }

// export default App;





import React from 'react'
import ReactDOM from 'react-dom'
import Heading from "./Heading";

ReactDOM.render(
  <>
    <Heading/>
    <p>This is my world</p>
    <ol>
      <li>Apple</li>
      <li>Ball</li>
      <li>Cat</li>
      <li>Dog</li>
    </ol>
  </>,document.getElementById("root")

);