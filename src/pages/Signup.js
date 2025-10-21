import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10–15 digits";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log("Signup successful:", formData);
    alert("Account created successfully!");
    // call  backend API here
  };

  return (
    <>
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
            className="bg-white my-10 p-10 rounded-2xl shadow-lg w-3/4 max-w-lg border border-gray-100"
          >
            <h2 className="text-3xl font-semibold text-[#1C2C57] mb-6 text-center">
              Create Your Account
            </h2>

            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-[#1C2C57] mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-3 bg-[#fafafa] border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-[#FF7A00] outline-none`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <label className="block text-[#1C2C57] mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-3 bg-[#fafafa] border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-[#FF7A00] outline-none`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

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

            <div className="mb-4">
              <label className="block text-[#1C2C57] mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 bg-[#fafafa] border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#FF7A00] outline-none`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="mb-8">
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

            <button
              type="submit"
              className="w-full bg-[#FF7A00] text-white font-semibold py-3 rounded-lg hover:bg-[#e96d00] transition-all"
            >
              Sign Up
            </button>

            <p className="text-sm text-center mt-4 text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#1C2C57] font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
