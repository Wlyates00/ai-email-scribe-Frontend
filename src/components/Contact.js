import React from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bc6d77a8-0b58-419e-be94-59d184ddc4a2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "The message has been sent.",
        icon: "success",
        confirmButtonColor: "#479191",
      });
    }
  };

  return (
    <div id="contact" className="container-fluid footer-container">
      <form onSubmit={onSubmit} className="container contact">
        <h1>CONTACT US</h1>
        <div className="input-box">
          <label>Full Name</label>
          <input
            name="name"
            type="text"
            className="field"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            className="field"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter your message"
            required
          />
        </div>
        <button className="btn btn-light send-btn" type="submit">
          Send
        </button>
      </form>
      <div className="container text-center">
        <small>Copyright &copy; Layton Yates 2024</small>
      </div>
    </div>
  );
};

export default Contact;
