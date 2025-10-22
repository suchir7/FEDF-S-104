import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-pink-400 p-4 text-white">
        <div className="flex items-center">
          <img src="kllogo.jpeg" alt="KL Logo" className="w-20 mr-3" />
          <h1 className="text-2xl font-bold">Product Management System</h1>
        </div>
        <div className="flex gap-4">
          <Link to="/signin" className="hover:underline">Sign In</Link>
          <Link to="/signup" className="hover:underline">Sign Up</Link>
          <Link to="/aboutus" className="hover:underline">About Us</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Product Management System</h2>
        <p className="mb-2 text-gray-700">
          Manage products, users, and inventory easily.
        </p>
        <p className="text-gray-600">
          Sign up as an Admin or User to get started .
        </p>
      </div>
    </div>
  );
};

export default HomePage;