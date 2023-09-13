import React, { useState, useEffect } from 'react';
import '../index.css';

import contactUsImage from '../images/contactus.png'; // Adjust the path as needed

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    // Add a delay to trigger the fade-in animation
    const delay = setTimeout(() => {
      setIsFormVisible(true);
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate the mailto link
    const mailtoLink = `mailto:touristique@example.com?subject=Contact%20Us&body=Name:%20${encodeURIComponent(
      name
    )}%0D%0AEmail:%20${encodeURIComponent(email)}%0D%0AMessage:%20${encodeURIComponent(
      message
    )}`;
    // Open the email client with the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className={`contact-container ${isFormVisible ? 'fade-in' : ''}`}>
      <div className="contact-illustration">
        {/* Add your illustrator image here */}
        <img
          src={contactUsImage}
          alt="ContactUs"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Jamie Larson"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="jamie@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              // Add the 'resize' property to prevent textarea resizing
              style={{ resize: 'none' }}
            />
          </div>

          {/* Submit button */}
          <button type="submit">Send</button>
        </form>
      </div>

      <style jsx>{`
        .contact-container {
          display: flex;
          justify-content: space-between;
          max-width: 900px; /* Adjust the container width as needed */
          margin: 0 auto;
          padding: 20px;
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }

        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-illustration {
          flex: 1; /* Take up 50% of the container's width */
          padding: 10px; /* Add padding for spacing */
        }

        .contact-form {
          flex: 1; /* Take up 50% of the container's width */
          padding: 10px; /* Add padding for spacing */
        }

        .contact-form h2 {
          text-align: center;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        button {
          display: block;
          margin: 0 auto;
          padding: 10px 20px;
          background-color: #7f71ff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          /* Adjust styling for mobile devices */
          .contact-form {
            max-width: 100%;
            padding: 10px;
          }

          .form-group {
            margin-bottom: 10px;
          }

          input,
          textarea {
            padding: 8px;
            font-size: 14px;
          }

          button {
            padding: 8px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
