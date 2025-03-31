import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarList from "./components/CarList";
import ErrorPage from "./components/ErrorPage";
import Navbar from './components/navbar';
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<CarList />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
