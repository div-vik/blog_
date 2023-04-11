import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import UpdateBlog from "./pages/updateBlog/UpdateBlog";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Home />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/create"
          element={user ? <Create /> : <Navigate to="/login" />}
        />
        <Route
          path="/blogDetails/:id"
          element={user ? <BlogDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/updateBlog/:id"
          element={user ? <UpdateBlog /> : <Navigate to="login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
