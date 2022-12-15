import React from "react";
import "../style/footer.css";

export default function Footer() {
  return (
    <div className="fat">
      <div className="fotter">
        <div className="text">
          <h4>Create Footer</h4><hr />
          {/* <h6>Ayo Mampir nang Warung ku</h6>
          <h6>Nikmati Berbagai Promo <i>Khusus hari ini</i></h6>
          <h6><b> Gagegoo !!!</b></h6> */}
          <div className="foot">
            <h4>
              <a
                className="navbar-brand"
                href="https://twitter.com/i/flow/login"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </h4>
            <h4>
              <a
                className="navbar-brand"
                href="https://www.instagram.com/?hl=id"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </h4>
            <h4>
              <a className="navbar-brand" href="https://www.youtube.com/">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </h4>
          </div>
          <div>
          <h6>Info-Support-Warungku</h6>
          <h6>thanks for visiting</h6></div>
        </div>
        <div className="copy">
          <p>
          <i class="far fa-copyright"></i>copyright-Warungku
          </p>
        </div>
      </div>
    </div>
  );
}
