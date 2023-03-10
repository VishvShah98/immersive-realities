import React from "react";

export default function Model(props) {
  return (
    <div
      className="product"
      style={{
        backgroundImage: `url(${props.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="product-information">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width:'75%'
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              color: "transparent",
              WebkitTextStroke: `3px ${props.hColor}`,
              marginBottom: "10px",
            }}
          >
            {props.modelName}
          </p>
          <div className="para-font">
            <p style={{ color: props.pColor }}>{props.modelInfo}</p>
          </div>
        </div>
      </div>
      <div className="phone-container">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {props.model}
        </div>
      </div>
    </div>
  );
}
