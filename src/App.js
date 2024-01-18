import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Header from "./assets/Layout/Header";
import Course from "./components/Courses/Course";
import Footer from "./assets/Layout/Footer/Footer";
import Login from "./components/Auth/Login";
import Register from './components/Auth/Register';
import ForgetPassword from "./components/Auth/ForgetPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Request from './components/Request/Request';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/request" element={<Request />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
