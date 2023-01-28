import { Button, ButtonGroup } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Chats from "./pages/Chats";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
