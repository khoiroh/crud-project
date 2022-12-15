import axios from 'axios';
import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const history = useHistory();
    
    const data = {
        email : email,
        password : password
    }
  
    const register = async (e) => {
      e.preventDefault();
      axios.post(" http://localhost:3000/akuns" ,data );
      Swal.fire({
        icon: "success",
        title: "Masuk Sebagai " + email,
        timer: 5000,
        buttons: false,
      })
      .then(() => {
        window.location.reload();
    })
    .catch((error) => {
        alert("Terjadi kesalahan " + error);
    });
    localStorage.setItem("id", data.id);
    history.push("/home");
};
return (
    <div>
         <div className="container border my-5 pt-3 pb-5 px-5">
      <h1 className="mb-5">Form Register</h1>
      <Form onSubmit={register} method="POST">
        <div className="mb-3">
          <Form.Label>
            <strong>Email</strong>
          </Form.Label>
          <InputGroup className="d-flex gap-3">
            <Form.Control
              placeholder="Masukkan Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} required
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
              onChange={(e) => setPassword(e.target.value)}required
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
    </div>
  )
}
