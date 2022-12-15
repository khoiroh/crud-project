import axios from "axios";
import React, { useState } from "react";
import { Form, InputGroup, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/Nav.css";
// import image from "../image/pat22.jpg";

export default function NavigationBar() {
  const [show, setShow] = useState(false);
  const [link, setLink] = useState(""); 
  const [namaMakanan, setNamaMakanan] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const addUser = async (e) => {
    e.preventDefault();

    const data = {
      link: link,
      namaMakanan: namaMakanan,
      deskripsi: deskripsi,
      harga: harga,
    };

    await axios.post("http://localhost:3000/daftarMenu", data);
    Swal.fire("Good job!", "You clicked the button!", "success")
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert("Terjadi kesalahan " + error);
      });
  };


  const history = useHistory();

  const logout = () => {
    window.location.reload();
    localStorage.clear();
    history.push("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="NN navbar-brand" href="#">
            <b>Warung ku</b>
            {/* <img className="image" src={image} alt="" /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                Home
                </a>
              </li>
              {localStorage.getItem("id") !== null ? (
                 <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="/cart">
                 Cart
                 </a>
               </li>
              ) : (
                <></>
              )}

              {localStorage.getItem("username") !== null ? (
                <>
                <li className="nav-item">
                    <button
                      className="btn btn-outline-warning"
                      onClick={handleShow}
                    >
                      <b>Tambah Menu</b>
                    </button>
                  </li> 
                </>
              ) : (<></>)}

              {localStorage.getItem("id") !== null ? (
                <>
                
                  <li className="nav-item float-right">
                    <a className="btn" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <li className="nav-item float-right">
                  <a className="btn" href="/">
                    Login
                  </a>
                </li>
              )} 
            </ul>
          </div>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="daldal" closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addUser} menthod="POST">
            <div className="mb-3">
              <Form.Label>
                <strong>Image</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Massukan Link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </InputGroup>
            </div>
            <div className="mb-3">
              <Form.Label>
                <strong>Nama Menu</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Massukan Menu "
                  value={namaMakanan}
                  onChange={(e) => setNamaMakanan(e.target.value)}
                />
              </InputGroup>
            </div>
            <div className="mb-3">
              <Form.Label>
                <strong>Deskripsi</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  type="deskripsi"
                  placeholder="Massukan Deskripsi"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                />
              </InputGroup>
            </div>
            <div className="mb-3">
              <Form.Label>
                <strong>Harga</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Massukan Harga"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                />
              </InputGroup>
            </div>
            <button className="btn btn-danger" onClick={handleClose}>
              Close
            </button>
            ||
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleClose}
            >
              Save
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
