import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate the mailto link
    const mailtoLink = `mailto:touristique@example.com?subject=Contact%20Us&body=Name:%20${encodeURIComponent(name)}%0D%0AEmail:%20${encodeURIComponent(email)}%0D%0AMessage:%20${encodeURIComponent(message)}`;
    // Open the email client with the mailto link
    window.location.href = mailtoLink;
  };

  return (
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
            placeholder="John Doe"
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
            placeholder="johndoe@example.com"
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

      <style jsx>{`
        .contact-form {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
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
          background-color: #007bff;
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
}

export default ContactUs;
