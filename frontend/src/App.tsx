import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarList from "./components/CarList";
import ErrorPage from "./components/ErrorPage";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import CarPage from "./components/CarPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<CarList />} />
                <Route path="/car/:id" element={<CarPage />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            
        </Router>
    );
}

export default App;
