import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [product, setproduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setproduct(json));
  }, []);
  const gotodetail = (item) => {
    navigate(`/detail/${item.id}`, { state: { data: item } });
  };

  return (
    <div>
      <h1>Dashboard</h1>

      {product.map((item) => {
        return (
          <div
            onClick={() => gotodetail(item)}
            style={{
              border: "2px solid black",
              margin: 20,
              display: "inline-block",
              backgroundColor: "grey",
            }}
          >
            <img src={item.image} width="200" style={{ display: "flex" }} />
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
}
export default Dashboard;
