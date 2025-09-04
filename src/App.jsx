// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import  Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
     <Router>
     <UserProvider>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected/User Dashboard */}
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
