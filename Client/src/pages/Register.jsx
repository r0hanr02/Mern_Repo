import React, { useState } from "react";
import "./css/Register.css";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      username: "",
      email: "",
      phone: "",
      password: "",
    });
    alert("Registration Successfull");
  };

  return (
    <section>
      <h2>Registration Form</h2>
      <div className="container-grid">
        <div className="registration-image">
          <img
            src="https://i.pinimg.com/1200x/c8/77/9f/c8779f09b14cb34c1702187db6f63154.jpg"
            alt="a gitrl is trying to do register"
          />
        </div>
        <div className="registration-form">
          <h1>Registration Form</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                id="username"
                value={user.username}
                onChange={handleInput}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="username">email:</label>
              <input
                type="text"
                name="email"
                placeholder="email"
                id="email"
                value={user.email}
                required
                onChange={handleInput}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="username">phone:</label>
              <input
                type="number"
                name="phone"
                placeholder="phone"
                value={user.phone}
                onChange={handleInput}
                id="phone"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="username">password:</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleInput}
                value={user.password}
                id="password"
                required
                autoComplete="off"
              />
            </div>
            <br />
            <button type="submit" className="btn btn-submit">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
