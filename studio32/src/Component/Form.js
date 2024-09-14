import axios from 'axios';
import React, { useState } from 'react'

export default function Form() {
    const [user, setUser] = useState({
        name: '',
        mobile: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});

    const [notification, setNotification] = useState({
        type: '',
        message: '',
        visible: false
      });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const validationErrors = {};

        if (!user.name.trim()) {
            validationErrors.name = 'Your name is required';
        }

        if (!user.mobile.trim()) {
            validationErrors.mobile = 'Mobile No. is required';
        } else if (!/^\d{10}$/.test(user.mobile)) {
            validationErrors.mobile = 'Mobile number is not valid';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            axios.post("https://bhutani32studio.in/userEnquiry",  user, { timeout: 5000 })
                .then(res => {
                    setNotification({
                        type: 'success',
                        message: res.data.msg,
                        visible: true
                      });
                    setUser({ name: '', mobile: '', description: '' });
                })
                .catch(err => {
                    setNotification({
                        type: 'error',
                        message: err.response?.data?.error || "Something went wrong!",
                        visible: true
                      });
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false); // Stop spinner if validation fails
        }
    };

    const inputHandler = (e) => {
        return setUser({ ...user, [e.target.name]: e.target.value });
    }

    const closeNotification = () => {
        setNotification({ ...notification, visible: false });
    };
    return (
      <div className="flex flex-col lg:flex-row rounded-lg shadow-lg overflow-hidden bg-white min-h-[80vh] bg-gray-300" id='query'>
      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-[#662549] flex items-center justify-center py-8 px-4 sm:px-8 h-auto lg:min-h-[80vh]">
          <div className="w-full max-w-lg">
              <div className="flex flex-col justify-center h-full">
                  <p className="text-red-500 font-semibold mb-2">Contact Us</p>
                  <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">Get in Touch</h1>
                  <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-4">
                          {/* Full Name Input */}
                          <div>
                              <input
                                  type="text"
                                  className={`w-full bg-gray-800 text-white border ${errors.name ? 'border-red-500' : 'border-gray-700'} focus:border-gray-500 rounded-md p-3`}
                                  placeholder="Full Name"
                                  name='name'
                                  value={user?.name}
                                  onChange={inputHandler}
                              />
                              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                          </div>

                          {/* Phone Input */}
                          <div>
                              <input
                                  type="text"
                                  className={`w-full bg-gray-800 text-white border ${errors.mobile ? 'border-red-500' : 'border-gray-700'} focus:border-gray-500 rounded-md p-3`}
                                  placeholder="Phone"
                                  name="mobile"
                                  value={user?.mobile}
                                  onChange={inputHandler}
                              />
                              {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                          </div>

                          {/* Message Textarea */}
                          <div>
                              <textarea
                                  className="w-full bg-gray-800 text-white border border-gray-700 focus:border-gray-500 rounded-md p-4 h-32"
                                  placeholder="Write a Message"
                                  name="description"
                                  value={user?.description}
                                  onChange={inputHandler}
                              />
                          </div>

                          {/* Submit Button */}
                          <div>
                              <button className="bg-red-600 text-white w-full py-3 rounded-md hover:bg-red-700 transition duration-300" disabled={loading}>
                              {loading ? 'Submitting...' : 'Submit Request'}
                              </button>
                          </div>
                      </div>
                  </form>
                  {/* Notification Area */}
              {notification.visible && (
                <div className={`mt-4 p-4 rounded-lg ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white flex justify-between items-center`}>
                  <p>{notification.message}</p>
                  <button className="text-white font-bold ml-4" onClick={closeNotification}>X</button>
                </div>
              )}
              </div>
          </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-auto">
          <img src="images/main.jpg" alt="logix" className="w-full h-auto object-cover lg:min-h-[80vh]" />
      </div>
  </div>
)
}