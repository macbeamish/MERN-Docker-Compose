import React from "react";
import { useState, useEffect } from "react";


export default function Display() {

    const [displayContent, setDisplayContent] = useState("");

      // getting content from db
  useEffect(() => {
    fetch("http://localhost:8080/Display/Display")
      .then((res) => res.json())
      .then((resultsData) => {
        console.log(resultsData);
        setDisplayContent(resultsData);
      });
  }, []);


  return (
    <div>
  <h1>  Below is the display message coming from MongoDB</h1>
  <div>
    <p>{displayContent && displayContent[0].displayMessage}</p>
  </div>
    </div>
  );
}