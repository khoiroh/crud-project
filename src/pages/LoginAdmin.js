import axios from "axios";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/login.css"

function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    axios.get("  http://localhost:3000/users/").then(({ data }) => {
      const user = data.find(
        (x) => x.username === username && x.password === password
      );
      if (user) {
        Swal.fire({
          icon: "success",
          title: "Masuk Sebagai " + username,
          timer: 5000,
          buttons: false,
        });
        localStorage.setItem("id", user.id);
        localStorage.setItem("username", user.username);
        history.push("/homeAdmin");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        Swal.fire({
          icon: "error",
          title: "Username / Password tidak valid",
          timer: 5000,
          buttons: false,
        });
      }
    });
  };
  return (
    <div className="container border my-5 pt-3 pb-5 px-5">
      <h1 className="mb-5">Form Admin</h1>
      <Form onSubmit={login} method="POST">
        <div className="mb-3">
          <Form.Label>
            <strong>Username</strong>
          </Form.Label>
          <InputGroup className="d-flex gap-3">
            <Form.Control
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
        </div>

        <div className="mb-3">
          <Form.Label>
            <strong>Password</strong>
          </Form.Label>
          <InputGroup className="d-flex gap-3">
            <Form.Control
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </div>

        <button type="submit" className="mx-1 btn btn-primary">
          Login
        </button>
        <br />
        <br />
        
        <span>Masuk Sebagai</span>
        <a href="/"> <i> <b>User</b></i></a>
      </Form>
    </div>
  );
}

export default LoginAdmin;
