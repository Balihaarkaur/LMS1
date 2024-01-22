import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import App from "./App";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import reportWebVitals from "./reportWebVitals";
import BookInventory from "./components/BookInventory";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
const router = (
    <Routes>
        <Route path="/" element={<App />}>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp/>}/>
<Route path="/books" element={<BookInventory/>}/>
        </Route>
    </Routes>
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
                    {router}
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
