import { FaArrowDown } from "react-icons/fa";

import gif from '../../assets/giphy.mp4'
import '../../styles.css'

export default function Home() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <video
        src={gif}
        type="video/mp4"
        autoPlay
        muted
        loop
        className="home-video"
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="navbar-companyName">
          IMMERSIVE <br /> REALITIES
        </p>
        <a className="navbar-email" href="mailto:info@immersiverealities.com">info@immersiverealities.com</a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p className="home-textIntro">
            Experience the power of{" "}
            <span style={{ fontWeight: "500" }}>Augmented and Virtual Reality</span> with
            our cutting-edge solutions
          </p>
        </div>
        <div className="home-arrow">
          <FaArrowDown size={22} />
        </div>
      </div>
    </div>
  );
}
