import HomePage from "./pages/home/HomePage";
import Topbar from "./components/topbar/Topbar";
import SinglePost from "./pages/single/Single";
import Write from "./pages/write/WritePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/settings/Settings";

function App() {
	const user = true
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;
