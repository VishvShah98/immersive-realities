export default function Product(props) {
  return (
    <div
      className="product"
      style={{
        backgroundImage: `url(${props.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="product-information">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              color: "transparent",
              WebkitTextStroke: `2px ${props.hColor}`,
              marginBottom: "10px"
            }}
          >
            {props.brandName}
          </p>
          <div className="para-font">
            <p style={{ color: props.pColor }}>{props.filterInformation}</p>
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
            background: props.phoneColor,
            width: "50%",
            height: "85%",
            borderRadius: "5%",
            boxShadow: "10px 10px 10px  rgba(0, 0, 0, 0.25)"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              width: "97%",
              height: "98%",
              color: "black",
              borderRadius: "5%",
              overflowX: "hidden",
              overflowY: "hidden"
            }}
          >
            <video
              src={props.video}
              type="video/mp4"
              autoPlay
              muted
              loop
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                overflowX: "hidden",
                overflowY: "hidden"
              }}
            />
          </div>
        </div>
        <a
          href="/"
          style={{
            position: "absolute",
            top: "95%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: props.c2,
            fontWeight: "700"
          }}
        >
          Try this filter
        </a>
      </div>
    </div>
  );
}
