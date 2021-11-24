import { useState } from "react";
import { StyleForm } from "../../styles/form";
import Link from "next/link";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Notification from "../../components/Notification";

function Login() {
  const [Credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { push } = useRouter();

  const changeUser = (e) => {
    setCredentials({
      ...Credentials,
      [e.target.name]: e.target.value,
    });
  };
  const [Message, setMessage] = useState("");
  const [ShowNotification, setShowNotification] = useState(false);

  const showMessage = (message) => {
    setMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2800);
  };

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        Credentials.email,
        Credentials.password
      );
      push("/");
    } catch ({message}) {
      if (message === "Firebase: Error (auth/wrong-password).") {
        showMessage("Contraseña incorrecta")
      }
    }
  };
  return (
    <StyleForm>
      <Notification show={ShowNotification} message={Message} />
      <div>
        <div className="form-signin">
          <h1 className="text-center text-login">Inicia sesión en tu cuenta</h1>
          <div className="center">
            <input
              name="email"
              type="text"
              className="input-form"
              placeholder="Correo"
              onChange={changeUser}
            />
          </div>
          <div className="center">
            <input
              name="password"
              type="password"
              className="input-form"
              placeholder="Contraseña"
              onChange={changeUser}
            />
          </div>
          <br />
          <div className="center">
            <button
              className="button-signup fondo-color-signup"
              onClick={loginUser}
            >
              Iniciar sesión
            </button>
          </div>
          <p className="text-center">O también</p>
          <br />
          <p className="text-center">
            ¿Aún no tienes cuenta? <Link href="/register">Registrarse</Link>
          </p>
        </div>
      </div>
    </StyleForm>
  );
}

export default Login;
