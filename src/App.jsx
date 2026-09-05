import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import ManagePosts from "./admin/ManagePosts";
import AddPost from "./admin/AddPost";

function App() {
  return (
    <Routes>

      {/* Public Website */}

      <Route path="/" element={<Home />} />

      <Route path="/news" element={<News />} />

      <Route path="/news/:id" element={<NewsDetails />} />

      <Route path="/about" element={<About />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="/contact" element={<Contact />} />


      {/* Admin */}

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/admin" element={<Dashboard />} />

      <Route path="/admin/posts" element={<ManagePosts />} />

      <Route path="/admin/add-post" element={<AddPost />} />

    </Routes>
  );
}

export default App;
