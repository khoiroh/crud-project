import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/edit.css";

export default function Edit() {
  const param = useParams();
  const [link, setLink] = useState(""); 
  const [namaMakanan, setNamaMakanan] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");

  const history = useHistory(); 

  useEffect(() => {
    axios
      .get("http://localhost:3000/daftarMenu/" + param.id)
      .then((response) => {
        const newBook = response.data;
        setLink(newBook.link);
        setNamaMakanan(newBook.namaMakanan);
        setDeskripsi(newBook.deskripsi);
        setHarga(newBook.harga);
      })
      .catch((error) => {
        alert("Terjadi kesalahan Lurr!!! " + error);
      });
  }, []);

  const submitActionHalder = async (event) => {
    event.preventDefault();

    await Swal.fire({
      title: "Yakin Ingin mengubah data ini?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, edit it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.put("http://localhost:3000/daftarMenu/" + param.id, {
            link: link,
            namaMakanan: namaMakanan,
            deskripsi: deskripsi,
            harga: harga,
          });
          Swal.fire("Edit !", "Your file has been edit.", "success");
        }
      })
      .then(() => {
        history.push("/homeAdmin"); 
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        alert("Terjadinya kesalahan: " + error);
      });
  };
  return (
    <div className="edit mx-5">
      <div className="container my-5">
        <Form onSubmit={submitActionHalder}>
          <h2>Update Data :</h2>
          <hr />
          <div className="name mb-3">
            <Form.Label>
              <strong>Link Gambar</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                placeholder="Masukkan Link Gambar"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="name mb-3">
            <Form.Label>
              <strong>Nama Makanan</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                placeholder="Nama Makanan"
                value={namaMakanan}
                onChange={(e) => setNamaMakanan(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="name mb-3">
            <Form.Label>
              <strong>Deskripsi</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                placeholder="Deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="name mb-3">
            <Form.Label>
              <strong>Harga</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                type="float"
                placeholder="Harga"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="d-flex justify-content-end align-items-center mt-2">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
