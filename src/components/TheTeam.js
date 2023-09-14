import React from 'react';
import '../index.css';

const TheTeam = () => {
  const teamMembers = [
    {
      name: 'Ralph',
      role: 'Python & Back-end Developer',
      linkedin: 'https://www.linkedin.com/in/ralphrosael',
      // bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra arcu eu massa ullamcorper.',
      imageSrc: '/team/ralph.jpg',
    },
    {
      name: 'Hannah',
      role: 'Graphic Designer',
      linkedin: 'https://www.linkedin.com/in/ain-miguel-santurdio',
      // bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra arcu eu massa ullamcorper.',
      imageSrc: '/team/hannah.jpg',
    },
    {
      name: 'Ain Miguel',
      role: 'Front-end Developer',
      linkedin: 'https://www.linkedin.com/in/',
      // bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra arcu eu massa ullamcorper.',
      imageSrc: '/team/ain.jpg',
    },
  ];

  const styles = {
    title: {
      fontSize: '25px',
      marginBottom: '15px',
      textAlign: 'center',
    },
    description: {
      fontSize: '40px',
      textAlign: 'center',
      color: '#fff',
      marginBottom: '70px',
    },
    teamContainer: {
      display: 'flex',
      flexDirection: 'column', // Stack team members vertically on small screens
      alignItems: 'center', // Center align items horizontally
    },
    teamMember: {
      textAlign: 'center',
      padding: '20px',
      width: '80%', // Take up 80% of the container width on mobile
      maxWidth: '300px', // Limit the maximum width
      margin: '0 5px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      border: '2px solid #7f71ff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      margin: '0 auto', // Center align the image
    },
    name: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#fff',
    },
    role: {
      fontSize: '18px',
      color: '#333',
    },
    bio: {
      fontSize: '16px',
    },
    connectButton: {
      background: '#7f71ff',
      color: '#fff',
      padding: '8px 16px',
      borderRadius: '5px',
      textDecoration: 'none',
      display: 'block', // Display the button as a block for full width
      margin: '10px auto', // Center align the button
    },
    background: {
      background: 'linear-gradient(to right bottom, #6d327c, #485DA6, #00a1ba, #01b18e, #32b37b)',
    },
  };

  return (
    <div className="the-team" style={styles.background}>
      <h2 style={styles.title}>MEET</h2>
      <p style={styles.description}>The Team Achievers</p>
      <div style={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.teamMember}>
            <img src={member.imageSrc} alt={member.name} style={styles.image} />
            <h2 style={styles.name}>{member.name}</h2>
            <p style={styles.role}>{member.role}</p>
            <p style={styles.bio}>{member.bio}</p>
            <a
              href={member.linkedin}
              style={styles.connectButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheTeam;
