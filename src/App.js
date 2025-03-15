import React, { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({ name: "", age: "", category: "Pistol", email: "", phone: "" });
  const [paymentUrl, setPaymentUrl] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api.eklavyashooting.com/register", form);
      const { orderId } = response.data;
      setPaymentUrl(`https://razorpay.com/pay/${orderId}`);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div>
      <h2>Shooting Competition Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <select name="category" onChange={handleChange} required>
          <option value="Pistol">Pistol</option>
          <option value="Rifle">Rifle</option>
          <option value="Airgun">Airgun</option>
        </select>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <button type="submit">Register & Pay</button>
      </form>
      {paymentUrl && (
        <div>
          <p>Click below to complete your payment:</p>
          <a href={paymentUrl} target="_blank" rel="noopener noreferrer">Pay via UPI</a>
        </div>
      )}
    </div>
  );
}

export default App;
