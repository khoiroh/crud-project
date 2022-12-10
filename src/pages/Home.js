import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/home.css";

export default function Home() {
  const [menu, setMenu] = useState([]);

  const getAll = () => {
    axios
      .get(" http://localhost:3000/daftarMenu")
      .then((res) => {
        setMenu(res.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan " + error);
      });
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ padding: 20 }}
      >
        {" "}
        <div className="nemu">
          <h1>
            <b>Welcome to my shop</b>
          </h1>{" "}
          <hr />
          <h5><b>Ayo Mampir nang Warung ku</b></h5>
          <h5><b>Nikmati Berbagai Promo <u>Khusus hari ini</u> Gagegoo !!!</b></h5>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.unileverfoodsolutions.co.id/id/inspirasi-chef/teh-dan-bisnis-kuliner/5-kombinasi-teh-buah-untuk-menambah-meriah-menu-minuman-anda/jcr:content/parsys/content-aside-footer/columncontrol/columnctrl_parsys_2/textimage_copy_50638/image.transform/jpeg-optimized/image.image_1.jpg"
              className="d-block w-100"
              style={{ width: 50 }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/EpbAauhjRq4/maxresdefault.jpg"
              className="d-block w-100"
              style={{ width: 50 }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://png.pngtree.com/png-clipart/20210808/original/pngtree-black-breakfast-bread-dessert-promotion-banner-png-image_6623955.jpg"
              className="d-block w-100"
              style={{ width: 50 }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />

      <h2 class="nem">Daftar Menu</h2>
      <div
        style={{ padding: 20, display: "flex", gap: 50 }}
        className="flex-wrap"
      >
        {menu.map((daftar) => (
          <div
            class="card"
            style={{
              width: "16rem",
              backgroundColor: "palegoldenrod",
              padding: 3,
            }}
          >
            <img
              style={{ width: 250, height: 200 }}
              src={daftar.link}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">{daftar.namaMakanan}</h5>
              <p class="card-text">{daftar.deskripsi}</p>
              <h6>Rp.{daftar.harga}</h6>
              {localStorage.getItem("id") !== null ? (
                <a href="#" class="btn btn-danger">
                  Buy
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
