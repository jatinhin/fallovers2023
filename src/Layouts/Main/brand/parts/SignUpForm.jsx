import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_password: "",
    user_type: "1",
    user_work_type: "",
    user_mail_id: "",
    user_website: "",
    user_post_pich: "yes",
    user_mobile_no: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fallovers.com/fallovers-api/api/v1/sign-up",
        formData, // Pass the form data directly as the request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("res", response);

      if (response.status === 200) {
        const data = response.data;
        if (data.user_type && data.access_token) {
          localStorage.setItem("userData", JSON.stringify(data));
          console.log("Signup Successful", data);
          navigate("/dashboard");
        } else {
          console.error("Signup Failed");
        }
      } else {
        console.error("Signup Failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          
          <input
          className="input-style"
            type="text"
            name="user_name"
            placeholder="User name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="user_password"
            value={formData.user_password}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          User Type:
          <select
            name="user_type"
            value={formData.user_type}
            onChange={handleChange}
            required
          >
            <option value="0">Brand</option>
            <option value="1">Influencer</option>
          </select>
        </label>

        <label>
          User Work Type:
          <input
            type="text"
            name="user_work_type"
            value={formData.user_work_type}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="user_mail_id"
            value={formData.user_mail_id}
            onChange={handleChange}
          />
        </label>

        <label>
          Website:
          <input
            type="text"
            name="user_website"
            value={formData.user_website}
            onChange={handleChange}
          />
        </label>

        <label>
          User Post Pich:
          <input
            type="text"
            name="user_post_pich"
            value={formData.user_post_pich}
            onChange={handleChange}
          />
        </label>

        <label>
          Mobile Number:
          <input
            type="text"
            name="user_mobile_no"
            value={formData.user_mobile_no}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
