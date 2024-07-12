import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  const detail = useLocation();
  // console.log(detail.state.data);
  const allDetail = detail.state.data;
  // console.log("params", params);
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/id")
      .then((res) => res.json())
      .then((json) => setdata(json));
  }, []);

  return (
    <div
      style={{
        border: "2px solid black",
        margin: 20,
        display: "inline-block",
        backgroundColor: "grey",
      }}
    >
      <img src={allDetail.image} width="150" />
      <h3>{allDetail.title}</h3>
      <h4> Price:{allDetail.price}</h4>
      <h5>Category:{allDetail.category}</h5>
    </div>
  );
}

export default Detail;
