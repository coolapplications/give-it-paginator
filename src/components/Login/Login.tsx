import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

export default function Login() {
  const auth0Context = useAuth0();

  return (
    <div>
      {!auth0Context?.isAuthenticated && (
        <button onClick={() => auth0Context?.loginWithRedirect({})}>
          Log in
        </button>
      )}

      {auth0Context?.isAuthenticated && (
        <button
          onClick={() =>
            auth0Context?.logout({ returnTo: `${window.location.origin}/home` })
          }
        >
          Log out
        </button>
      )}
    </div>
  );
}
