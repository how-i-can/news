import React from "react";
import NavBar from "./NavBar";
import NewsCards from "./NewsCards";

function LandingPage() {
  return (
    <div className="LandingPage">
      <NavBar />
      <NewsCards />
    </div>
  );
}

export default LandingPage;
