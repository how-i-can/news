import React from "react";
import NavBar from "./NavBar";
import NewsCards from "./NewsCards";

function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <NavBar />
      <NewsCards />
    </div>
  );
}

export default LandingPage;
