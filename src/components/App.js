
import React from "react";
import './../styles/App.css';
import Switch from "./Switch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                {/* Do not remove the main div */}
                <Switch />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App