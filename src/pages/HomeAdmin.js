import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "../style/homeA.css";

export default function HomeAdmin() {
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
    <div style={{ padding: 20 }}>
      <div className="flex-wrap">
        <h2>Welcome Admin</h2>
        <hr />
        <div className="my-5">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama Menu</th>
                <th>Image</th>
                <th>Deskripsi</th>
                <th>Harga</th>
                {localStorage.getItem("id") !== null ? <th>Aksi</th> : <></>}
              </tr>
            </thead>
            <tbody>
              {menu.map((daftar, index) => (
                <tr key={daftar.id}>
                  <td>{index + 1}</td>
                  <td>{daftar.namaMakanan}</td>
                  <td>
                    <img
                      src={daftar.link}
                      alt=""
                      style={{ width: 150, height: 100 }}
                    />
                  </td>
                  <td>{daftar.deskripsi}</td>
                  <td>Rp.{daftar.harga}</td>
                  {localStorage.getItem("id") !== null ? (
                    <td>
                      <a href={"/edit/" + daftar.id}>
                        <Button variant="outline-success" className="mx-1">
                          Edit
                        </Button>
                      </a>{" "}
                      <Button
                        variant="outline-danger"
                        className="mx-1"
                        onClick={() => deleteUser(daftar.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  ) : (
                    <></>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
