import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "../style/cart.css";

export default function Cart() {
  const [menu, setMenu] = useState([]);

  const getAll = () => {
    axios
      .get("http://localhost:3000/daftarMenu")
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

  const deleteUser = async (id) => {
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
        axios.delete("http://localhost:3000/daftarMenu/" + id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    getAll();
  };
  return (
    <div className="cart">
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
              <td>{daftar.harga}</td>
              {localStorage.getItem("id") !== null ? (
                <td>
                  <Button
                    variant="danger"
                    className="mx-1"
                    onClick={() => deleteUser(daftar.id)}
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

      <Button className="btn btn-warning">Checkout</Button>
    </div>
  );
}
