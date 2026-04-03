import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    // Using the access key provided by the user
    formData.append("access_key", "0ff85d0c-51ed-4576-b4f5-312ac01256fd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Form Submitted Successfully! I will get back to you soon.");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult(data.message || "Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.log("Error", error);
      setStatus("error");
      setResult("Something went wrong. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Reach me out</p>
        </div>

        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Enter Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Enter Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Your Message..." 
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Let's Talk"}
          </button>

          {status !== "idle" && (
            <div className={`form-status ${status === "success" ? "success" : "error"}`}>
              {result}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
