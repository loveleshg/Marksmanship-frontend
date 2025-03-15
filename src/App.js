import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", age: "", category: "Pistol", email: "", phone: "" });
  const [paymentUrl, setPaymentUrl] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://shooting-backend.loveleshg.workers.dev/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    
    const data = await response.json();
    setPaymentUrl(data.paymentLink);
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
