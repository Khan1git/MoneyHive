
import Home from "./components/home/home";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Expense from "./components/Expenses/Expense";
import LoginPage from "./components/LoginPage/Login";
import SignupPage from "./components/SignupPage/Signup";

function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/expense" element={<Expense/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
