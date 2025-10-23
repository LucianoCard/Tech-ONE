import Header from "../Header";
import Footer from "../Footer";
import "./IniciarSesion.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export function IniciarSesion() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const handleSubmit = (evento) => {
    evento.preventDefault();
  };
  return (
    <>
      <Header />

      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="login-container p-5 rounded">
          <h2 className="login-titulo">Iniciar Sesión</h2>
          <p className="login-subtitulo">Autentícate para continuar</p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduce tu email"
                value={usuario}
                onChange={(evento) => setUsuario(evento.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Introduce tu contraseña"
                value={contraseña}
                onChange={(evento) => setContraseña(evento.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              [Acceder]
            </Button>
          </Form>

          <div className="text-center mt-3">
            <a href="#" className="small-link">
              ¿Olvidaste tu contraseña?
            </a>
            <p className="mt-2">
              ¿Eres nuevo?{" "}
              <a href="#" className="small-link">
                Crea tu cuenta
              </a>
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
