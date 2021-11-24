import { Fragment, useContext } from "react";
import Link from "next/link";
import AuthContext from "../../context/AuthContext";
import { useAuthUser } from "../../hooks/useAuthUser";

function Navbar() {
  // RUNNING HOOK TO VALIDATE THE USER

  useAuthUser();

  const { isLogged } = useContext(AuthContext);

  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        {/* SHOW IF IS EQUAL TO FALSE  */}
        {isLogged === false && (
          <Fragment>
            <Link href="/register">Registrar</Link>
            <Link href="/login">Login</Link>
          </Fragment>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
