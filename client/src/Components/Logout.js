import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "241513642950-4aom6i0o8dglg9j8cdrp4vgvgrp1d4hn.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    alert("Logout made successfully 💖");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
