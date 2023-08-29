import React from 'react';

const PrivacyPolicy = () => {
  const styles = {
    privacyPolicyContent: {
      textAlign: 'center',
      padding: '20px',
      '@media (max-width: 768px)': {
        padding: '10px',
      },
    },
    title: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#4362A7',
    },
    paragraph: {
      fontSize: '16px',
    },
  };

  return (
    <div className="privacy-policy-content" style={styles.privacyPolicyContent}>
      <h2 style={styles.title}>Privacy Policy</h2>
      <p style={styles.paragraph}>
        Welcome to our Privacy Policy page!
        {/* Add your Privacy Policy content here */}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
