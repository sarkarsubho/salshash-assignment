import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import Nav from "./components/Nav";
import Allroutes from "./Routes/Allroutes";

function App() {
  return (
    <>
      <Nav></Nav>
      <Allroutes></Allroutes>
    </>
  );
}

export default App;
