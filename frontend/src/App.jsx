import Home from "./components/home/home";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Expense from "./components/Expenses/Expense";
import LoginPage from "./components/LoginPage/Login";
import SignupPage from "./components/SignupPage/Signup";
import { useNavigate } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/expense" element={<Expense />} />
        {!token ? (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/signup" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
