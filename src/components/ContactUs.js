import React, { useState, useEffect } from 'react';
import '../index.css';

import contactUsImage from '../images/contactus.png'; // Adjust the path as needed

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [textareaRows, setTextareaRows] = useState(6);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  useEffect(() => {
    // Add a delay to trigger the fade-in animation
    const delay = setTimeout(() => {
      setIsFormVisible(true);
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  const handleTextareaChange = (e) => {
    // Calculate the number of rows based on the textarea content
    const textareaRowCount = e.target.value.split('\n').length;
    setTextareaRows(textareaRowCount >= 4 ? textareaRowCount : 4);
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Generate the mailto link
    const mailtoLink = `mailto:touristique@example.com?subject=Contact%20Us&body=Name:%20${encodeURIComponent(
      name
    )}%0D%0AEmail:%20${encodeURIComponent(email)}%0D%0AMessage:%20${encodeURIComponent(
      message
    )}`;

    // Try to open the email client
    const isOpened = window.open(mailtoLink, '_self');

    if (isOpened) {
      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
      setTextareaRows(6);
      setIsSubmissionSuccessful(true);
    } else {
      alert('Failed to open the email client. Please try again later.');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  return (
    <div className={`contact-container ${isFormVisible ? 'fade-in' : ''}`}>
      <h2 style={{ textAlign: 'center', marginTop: 0 }}>
        Contact <span style={{ color: '#7f71ff' }}>Us</span>
      </h2>
      <div className="contact-content">
        <div className="contact-form">
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
                onChange={handleTextareaChange}
                required
                rows={textareaRows}
                style={{ resize: 'none' }}
                placeholder="Your message here..."
              />
            </div>

            {/* Submit button */}
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-illustration">
          {/* Add your illustrator image here */}
          <img
            src={contactUsImage}
            alt="ContactUs"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
      {isSubmissionSuccessful && (
        <div className="confirmation-message">
          <p>Thank you for your message! We'll get back to you soon.</p>
        </div>
      )}

      <style jsx>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 900px;
          margin: 20px auto;
          padding: 20px;
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }

        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-content {
          display: flex;
          flex-direction: column-reverse; /* Reverse the order for mobile */
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 20px;
        }

        .contact-form {
          flex: 1;
          padding: 10px;
          background-color: #f7f7f7;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          width: 100%; /* Make the form full width on mobile */
        }

        .form-group {
          margin-bottom: 20px;
        }

        .confirmation-message {
          text-align: center;
          margin-top: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          transition: border-color 0.3s ease-in-out;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #7f71ff;
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
          font-size: 16px;
          transition: background-color 0.3s ease-in-out;
        }

        button:hover {
          background-color: #ff695e;
        }

        /* Media query for mobile responsiveness */
        @media (max-width: 768px) {
          .contact-content {
            flex-direction: column; /* Revert to original order for larger screens */
          }

          .contact-form {
            margin-top: 20px; /* Add spacing between form and image on mobile */
          }

          .contact-illustration img {
            max-width: 100%; /* Make the image responsive on mobile */
            height: auto;
          }
          .confirmation-message{
            margin-top: 20px;
            color: green;
            font-weight: bold;
          }
          /* .confirmation-message p {
            margin-top: 20px;
            text-align: center;
          } */
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
