import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setMessage("Form submitted (demo only, no backend linked).");
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (!resetEmail) {
      alert("Please enter your email address");
      return;
    }
    // call backend API here
    alert(`Password reset link sent to ${resetEmail}`);
    setShowModal(false);
    setResetEmail("");
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-[#1D314E] flex flex-col justify-center items-center text-white p-10">
        <img
          src="/favicon.png"
          alt="Logo"
          className="w-[330px] h-[250px] mb-4"
        />
        {/* <h1 className="text-4xl font-bold mb-2">ProjectSoch</h1> */}
        <p className="text-gray-300 text-center max-w-sm text-[16px]">
          Empowering Street kids, Supporting Transgender through Education.
        </p>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-[#F9FAFB]">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-lg w-3/4 max-w-lg border border-gray-100"
        >
          <h2 className="text-3xl font-semibold text-[#1C2C57] mb-6 text-center">
            Login to Your Account
          </h2>

          <div className="mb-4">
            <label className="block text-[#1C2C57] mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 bg-[#fafafa] border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-[#FF7A00] outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-2">
            <label className="block text-[#1C2C57] mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 bg-[#fafafa] border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-[#FF7A00] outline-none`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-end mb-6">
            <span
              onClick={() => setShowModal(true)}
              className="text-sm text-[#1C2C57] font-medium hover:underline"
            >
              Forgot Password?
            </span>
          </div>

          {message && (
            <p className="text-green-600 text-sm mb-4 text-center">{message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#FF7A00] text-white font-semibold py-3 rounded-lg hover:bg-[#e96d00] transition-all"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4 text-gray-500">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#1C2C57] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80">
            <h3 className="text-lg font-semibold mb-3">Reset Password</h3>
            <p className="text-sm text-gray-600 mb-4">
              Enter your email to receive a password reset link.
            </p>
            <form onSubmit={handleReset}>
              <input
                type="email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="w-full bg-[#fafafa] border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 border rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 bg-[#FF7A00] text-white rounded-md hover:bg-[#e96d00]"
                >
                  Send Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default LoginPage;
