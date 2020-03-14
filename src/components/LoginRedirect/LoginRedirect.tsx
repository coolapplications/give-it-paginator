import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { useHistory } from "react-router-dom";

export default function LoginRedirect() {
  const auth0Context = useAuth0();
  const history = useHistory();

  if (auth0Context && auth0Context.isAuthenticated) {
    history.push("/home");
  }

  return <div>Cargando...</div>;
}
