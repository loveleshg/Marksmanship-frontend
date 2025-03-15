import React from "react";

const Form = ({ handleChange, handleSubmit }) => {
  return (
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
  );
};

export default Form;
