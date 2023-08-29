import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-content">
      <style>
        {`
          .privacy-policy-content {
            text-align: center;
            margin: auto;
            width: 60%;
            padding: 20px;
          }

          .privacy-policy-content h2 {
            text-align: center;
            margin-bottom: 20px; /* Add margin at the bottom of the title */
            color: #4362AB; /* Set the title color to blue (#4362AB) */
          }

          .privacy-policy-content p {
            margin-top: 20px; /* Add margin at the top of the paragraph */
          }
          .centered-justified-paragraph {
            text-align: justify;
            margin: 20px 10px; /* Adjust the margin-top value here */
          }
          }
          .centered-justified-paragraph {
          text-align: left; /* Align the paragraph to the left */
          font-size: 16px;
          line-height: 1.5;
          max-width: 800px;
          margin: 20px auto; /* Adjust the margin-top value here */
          padding: 0 20px;
          }
        `}
      </style>
      <div className="privacy-policy-content">

        <h2>Privacy Policy</h2>

        <p>
        Welcome to Touristique App! 
        </p>
        <p className='centered-justified-paragraph'>
        This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information
        when you interact with our Touristique Web App (referred to as "App," "we," "us," or "our"). <br/> <br/>
        Protecting your privacy and ensuring the security of your personal information is important to us. 
        By using our App, you agree to the practices described in this Privacy Policy.
          {/* Add your Privacy Policy content here */}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
