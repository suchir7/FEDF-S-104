import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import ManageProducts from "./components/ManageProducts";
import Cart from "./components/Cart";
import UserManagement from "./components/UserManagement";
import ViewAnalytics from "./components/ViewAnalytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/manageproducts" element={<ManageProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/analytics" element={<ViewAnalytics />} />
      </Routes>
    </Router>
  );
}

export default App;
