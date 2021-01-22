import React, { useEffect, useState } from "react";

import "./Avatar.css";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/photos";
const Avatar = (props) => {
  const [data, setData] = useState("");
  useEffect(() => {
    async function fetchMyAPI() {
      const { data } = await axios.get(apiUrl);
      for (let i = 0; i < 9; i++) {
        setData(data[i].thumbnailUrl);
      }
    }
    fetchMyAPI();
  }, []);
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
