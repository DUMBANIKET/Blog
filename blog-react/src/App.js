import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home ";
import Blogs from "./components/Blogs";
import Write from "./components/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./components/Blog";
import Saved from "./components/Saved";

function App() {

  const username = localStorage.getItem("firstName")

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/write" element={<Write />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path={`/${username}/savedArticles`} element={<Saved />} />
      </Routes>
    </>
  );
}

export default App;
