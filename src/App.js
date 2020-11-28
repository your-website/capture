import React from "react";
import GlobalTyled from "./components/GlobalStyle";

import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutUs />
      <GlobalTyled />
    </div>
  );
}

export default App;
