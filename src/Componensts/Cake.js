import React from "react";

function Cake(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <img src={props.image} alt="" />
    </div>
  );
}

export default Cake;
