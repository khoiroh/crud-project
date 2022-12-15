import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/cart.css";

export default function Cart() {
  const [menu, setMenu] = useState([]);
  const totalHarga = menu.reduce((a, b) => a + b.harga, 0);

  const getAll = () => {
    axios
      .get(" http://localhost:3000/cart/")
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

  const deleteA = async (id) => {
    await Swal.fire({
      title: "Yakin ingin menghapus data ini?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://localhost:3000/cart/" + id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    getAll();
  };

  const history = useHistory();
  const checkout = async (id) => {
    await Swal.fire({
      icon: "success",
      title: "yeyy Berhasil Checkout !!!",
      timer: 5000,
      buttons: false,
    })
      .then(() => {
        axios.delete("http://localhost:3000/cart/" + id);
        window.location.reload();
        history.push("/cart");
      })
      .catch((error) => {
        alert("Terjadinya kesalahan " + error);
      });
      getAll();
  };
  return (
    <div className="keranjang">
      <div className="cart">
        <h2>
          <i class="fas fa-cart-plus"></i>
        </h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Menu</th>
              <th>Image</th>
              <th>Deskripsi</th>
              <th>Harga</th>
              {localStorage.getItem("id") !== null ? <th>Action</th> : <></>}
            </tr>
          </thead>
          <tbody>
            {menu.map((daftar, index) => (
              <tr key={daftar.id}>
                <td>{index + 1}</td>
                <td>{daftar.namaMakanan}</td>
                <td>
                  <img src={daftar.link} alt="" style={{ width: 150 }} />
                </td>
                <td>{daftar.deskripsi}</td>
                <td>Rp.{daftar.harga}</td>
                {localStorage.getItem("id") !== null ? (
                  <td>
                    <Button
                      variant="danger"
                      className="mx-1"
                      onClick={() => deleteA(daftar.id)}
                    >
                      Hapus
                    </Button>
                  </td>
                ) : (
                  <></>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <strong>Total Harga : Rp.{totalHarga}</strong>
        <div>
          <Button variant="warning" onClick={checkout}>
            Checkout
          </Button>
        </div>
        <br />                        
        <div className="kembali">
          <a href="/home"><h2>
            <b><i class="fas fa-arrow-alt-circle-left"></i></b></h2>
          </a>
        </div>
      </div>
    </div>
  );
}
