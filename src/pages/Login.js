import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // Forgot Password 
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const [resetEmail, setResetEmail] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


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


  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!resetEmail) {
      alert("Please enter your email address");
      return;
    }

    // Send OTP request to backend API here
    // await axios.post("/api/auth/send-reset-otp", { email: resetEmail });

    alert(`OTP sent to ${resetEmail}`);
    setShowEmailModal(false);
    setShowOTPModal(true);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); 
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert("Please enter the full 6-digit OTP");
      return;
    }

    // Verify OTP with backend
    // const res = await axios.post("/api/auth/verify-reset-otp", { email: resetEmail, otp: enteredOtp });
    alert("OTP verified successfully!");
    setShowOTPModal(false);
    setShowResetModal(true);
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      alert("Please fill in all password fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Call backend API to reset password
    // await axios.post("/api/auth/reset-password", { email: resetEmail, newPassword });

    alert("Password reset successfully!");
    setShowResetModal(false);
    setNewPassword("");
    setConfirmPassword("");
    setOtp(Array(6).fill(""));
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="w-1/2 bg-[#1D314E] flex flex-col justify-center items-center text-white p-10">
        <img src="/favicon.png" alt="Logo" className="w-[330px] h-[250px] mb-4" />
        <p className="text-gray-300 text-center max-w-sm text-[16px]">
          Empowering Street kids, Supporting Transgender through Education.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex items-center justify-center bg-[#F9FAFB]">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-lg w-3/4 max-w-lg border border-gray-100"
        >
          <h2 className="text-3xl font-semibold text-[#1C2C57] mb-6 text-center">
            Login to Your Account
          </h2>

          {/* EMAIL */}
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

          {/* PASSWORD */}
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

          {/* FORGOT PASSWORD */}
          <div className="flex justify-end mb-6">
            <span
              onClick={() => setShowEmailModal(true)}
              className="text-sm text-[#1C2C57] font-medium hover:underline cursor-pointer"
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

      {/*  EMAIL MODAL */}
      {showEmailModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80">
            <h3 className="text-lg font-semibold mb-3">Reset Password</h3>
            <p className="text-sm text-gray-600 mb-4">
              Enter your email to receive a password reset OTP.
            </p>
            <form onSubmit={handleEmailSubmit}>
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
                  onClick={() => setShowEmailModal(false)}
                  className="px-3 py-1 border rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 bg-[#FF7A00] text-white rounded-md hover:bg-[#e96d00]"
                >
                  Send OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/*  OTP MODAL */}
      {showOTPModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h3 className="text-lg font-semibold mb-3 text-center">
              Enter OTP
            </h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              We’ve sent a 6-digit code to <b>{resetEmail}</b>
            </p>

            <form onSubmit={handleOtpSubmit} className="flex flex-col items-center">
              <div className="flex justify-center space-x-2 mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    className="w-10 h-10 text-center border rounded-md focus:ring-2 focus:ring-[#FF7A00] outline-none text-lg"
                  />
                ))}
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowOTPModal(false);
                    setOtp(Array(6).fill(""));
                  }}
                  className="px-3 py-1 border rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 bg-[#FF7A00] text-white rounded-md hover:bg-[#e96d00]"
                >
                  Verify OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* RESET PASSWORD MODAL */}
      {showResetModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h3 className="text-lg font-semibold mb-3 text-center">
              Set New Password
            </h3>
            <form onSubmit={handlePasswordReset}>
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-[#fafafa] border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-[#fafafa] border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
              />

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowResetModal(false)}
                  className="px-3 py-1 border rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 bg-[#FF7A00] text-white rounded-md hover:bg-[#e96d00]"
                >
                  Reset Password
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
