import React from 'react';

const GetInvolved = () => {
  const involvementOptions = [
    {
      id: 1,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and contribute your time and skills to help those in need.",
      icon: "fas fa-hands-helping",
      buttonText: "Become a Volunteer",
      link: "#contact"
    },
    {
      id: 2,
      title: "Partner With Us",
      description: "Collaborate with us on projects, share resources, or help us expand our reach in the community.",
      icon: "fas fa-handshake",
      buttonText: "Partner Up",
      link: "#contact"
    },
    {
      id: 3,
      title: "Support Our Cause",
      description: "Every contribution, no matter how small, helps us continue our work and reach more people in need.",
      icon: "fas fa-heart",
      buttonText: "Support Us",
      link: "#donate"
    }
  ];

  const sectionStyles = {
    padding: '5rem 0',
    backgroundColor: '#f9fafb'
  };

  const containerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '4rem'
  };

  const titleStyles = {
    fontSize: 'clamp(1.875rem, 4vw, 3rem)',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    color: '#233d60',
    marginBottom: '1.5rem'
  };

  const subtitleStyles = {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '48rem',
    margin: '0 auto'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  };

  const cardStyles = {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const iconContainerStyles = {
    width: '5rem',
    height: '5rem',
    backgroundColor: 'rgba(255, 127, 0, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem'
  };

  const cardTitleStyles = {
    fontSize: '1.25rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    color: '#233d60',
    marginBottom: '1rem'
  };

  const cardDescriptionStyles = {
    color: '#6b7280',
    marginBottom: '1.5rem',
    lineHeight: 1.6
  };

  const buttonStyles = {
    backgroundColor: '#233d60',
    color: 'white',
    padding: '0.875rem 1.75rem',
    borderRadius: '12px',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    transform: 'scale(1)',
    boxShadow: '0 4px 12px rgba(35, 61, 96, 0.3)',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    minWidth: '160px',
    textAlign: 'center',
    display: 'inline-block'
  };

  return (
    <section id="get-involved" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Get Involved</h2>
          <p style={subtitleStyles}>
            There are many ways you can support our mission and make a difference in the lives of vulnerable children and communities.
          </p>
        </div>
        
        <div style={gridStyles}>
          {involvementOptions.map((option) => (
            <div key={option.id} style={cardStyles}>
              <div style={iconContainerStyles}>
                <i className={`${option.icon}`} style={{ color: '#ff7f00', fontSize: '1.875rem' }}></i>
              </div>
              <h3 style={cardTitleStyles}>{option.title}</h3>
              <p style={cardDescriptionStyles}>
                {option.description}
              </p>
              <a 
                href={option.link} 
                style={buttonStyles}
              >
                {option.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
