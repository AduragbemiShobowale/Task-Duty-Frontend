import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./components/Navbar1";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  // const data = [
  //   { title: "Lorem Ipsum", description: "A new Day", tag: "Urgent" },
  //   { title: "Lorem Ipsum1", description: "It gets easier", tag: "Important" },
  //   {
  //     title: "Lorem Ipsum2",
  //     description: "Lorem Ipsum1 is a lie",
  //     tag: "Urgent",
  //   },
  // ];

  const baseURL = "https://kenpachi-bankai.onrender.com";

  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <Navbar1 />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/body" element={<MyTask baseURL={baseURL}/>} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
