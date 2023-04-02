import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./Customer";
import Vendor from "./Vendor";
import Home from "./Home";
import ClosestVendors from "./ClosestVendors";
import Login from "./Login";
import Address from "./Address";

function App() {
  return <div className="App">
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/customer/address" element={<Address />}>
        </Route>
        <Route path="/customer" element={<Customer />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/vendor" element={<Vendor />}>
        </Route>
        <Route path="/customer/login" element={<Login />}>
        </Route>

        <Route path="/closestvendors" element={<ClosestVendors />}>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>;
}

export default App;
