import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
