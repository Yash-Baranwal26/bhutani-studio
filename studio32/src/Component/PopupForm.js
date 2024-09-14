import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = {};

    if (!user.name.trim()) {
      validationErrors.name = "Your name is required";
    }

    if (!user.mobile.trim()) {
      validationErrors.mobile = "Mobile No. is required";
    } else if (!/^\d{10}$/.test(user.mobile)) {
      validationErrors.mobile = "Mobile number is not valid";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:4040/userEnquiry", user)
        .then((res) => {
          toast.success(res.data.msg, {
            position: "top-center",
            autoClose: 3000, // Duration in milliseconds
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setUser({ name: "", mobile: "", description: "" }); // Reset form fields
          
          // Close the popup after 3 seconds
          setTimeout(() => {
            closePopup();
          }, 3000);
        })
        .catch((err) => {
          toast.error(err.response.data.error || "Something went wrong!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        })
        .finally(() => setLoading(false));
      } else {
          setLoading(false); // Stop spinner if validation fails
      }
  };

  const inputHandler = (e) => {
    return setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <span
              className="absolute top-2 right-4 text-2xl cursor-pointer"
              onClick={closePopup}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Enter Your Details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  name="name"
                  value={user?.name}
                  onChange={inputHandler}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Mobile:
                </label>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  name="mobile"
                  value={user?.mobile}
                  onChange={inputHandler}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description:
                </label>
                <textarea
                  placeholder="Enter a description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  name="description"
                  value={user?.description}
                  onChange={inputHandler}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
