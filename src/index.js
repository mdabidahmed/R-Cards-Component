import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Cards";

ReactDOM.render(
  <>
    <h1 className="heading_style">List of top Movie</h1>
    <Card
      imgsrc="https://wallpapercave.com/wp/wp5264395.jpg"
      title="San Andreas Movie"
      sname="ACTION"
      link="https://www.netflix.com/in/"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp2349761.jpg"
      title="Mean Girls Movie"
      sname="COMEDY"
      link="https://www.netflix.com/in/"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp1875235.jpg"
      title=" Maleficent Movie"
      sname="ADVENTURE"
      link="https://www.netflix.com/in/"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp5270830.jpg"
      title="Before Midnight Movie"
      sname="ROMANCE"
      link="https://www.netflix.com/in/"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/vTucv7p.jpg"
      title="Avatar Movie"
      sname="SCIENCE-FICTION"
      link="https://www.netflix.com/in/"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix original Series"
      sname="DARK"
      link="https://www.netflix.com/in/"
    />
  </>,
  document.getElementById("root")
);
