import React from 'react';

const Volunteers = () => {
  const volunteers = [
    {
      id: 1,
      name: "Muhammad Arslan Bosan",
      role: "Co-Founder & Head of Ops",
      image: `${process.env.PUBLIC_URL}/images/arslan.png`,
      quote: "Working with these kids has been the most rewarding experience of my life. Their resilience inspires me every day."
    },
    {
      id: 2,
      name: "Maria Akhtar",
      role: "Founder & CEO",
      image: `${process.env.PUBLIC_URL}/images/maria.png`,
      quote: "The best way to truly live a meaningful and fulfilling life is by dedicating ourselves to the service of others, bringing hope, kindness, and positive change to those around us."
    },

    {
      id: 4,
      name: "Muhammad Saqib",
      role: "Co-Founder & Tech/Partnerships Lead",
      image: `${process.env.PUBLIC_URL}/images/saqib.png`,
      quote: "Every child deserves a chance to succeed. I'm proud to be part of an organization that makes this possible."
    }
  ];

  const sectionStyles = {
    padding: '5rem 0',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem'
  };

  const volunteerStyles = {
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '3rem 2rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: 'all 0.3s ease',
    border: '1px solid #f1f5f9',
    position: 'relative',
    overflow: 'hidden'
  };

  const imageStyles = {
    width: '8rem',
    height: '8rem',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 auto 1.5rem',
    boxShadow: '0 12px 25px rgba(255, 127, 0, 0.25)',
    border: '4px solid #fff7ed',
    transition: 'all 0.3s ease'
  };

  const nameStyles = {
    fontWeight: 700,
    color: '#233d60',
    marginBottom: '0.5rem',
    fontSize: '1.25rem',
    fontFamily: 'Poppins, sans-serif'
  };

  const roleStyles = {
    color: '#ff7f00',
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const quoteStyles = {
    color: '#64748b',
    fontSize: '1rem',
    fontStyle: 'italic',
    lineHeight: 1.7,
    position: 'relative',
    paddingTop: '1rem'
  };

  const ctaContainerStyles = {
    textAlign: 'center',
    marginTop: '3rem'
  };

  const ctaButtonStyles = {
    backgroundColor: '#ff7f00',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '1.125rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    transform: 'scale(1)',
    display: 'inline-block',
    boxShadow: '0 6px 16px rgba(255, 127, 0, 0.3)',
    border: 'none',
    cursor: 'pointer',
    minWidth: '200px',
    textAlign: 'center'
  };

  return (
    <section id="volunteers" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Meet Our Team</h2>
          <p style={subtitleStyles}>
            Meet some of the incredible people who have dedicated their time and energy to make our mission possible.
          </p>
        </div>
        
        <div style={gridStyles}>
          {volunteers.map((volunteer) => (
            <div 
              key={volunteer.id} 
              style={volunteerStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
            >
              {/* Quote decoration */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1.5rem',
                fontSize: '3rem',
                color: '#fff7ed',
                fontFamily: 'serif',
                fontWeight: 'bold',
                zIndex: 1
              }}>
                "
              </div>
              
              <img 
                src={volunteer.image} 
                alt={volunteer.name} 
                style={imageStyles}
                onError={(e) => {
                  console.log('Image failed to load:', volunteer.image);
                  // Fallback to a default image or hide
                  e.target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', volunteer.image);
                }}
              />
              <h4 style={nameStyles}>{volunteer.name}</h4>
              <p style={roleStyles}>{volunteer.role}</p>
              <p style={quoteStyles}>
                <span style={{
                  position: 'relative',
                  zIndex: 2
                }}>
                  "{volunteer.quote}"
                </span>
              </p>
            </div>
          ))}
        </div>
        
        <div style={ctaContainerStyles}>
          <a 
            href="https://forms.gle/MAv6MLXVeVU8v4iJ9" 
            target="_blank"
            rel="noopener noreferrer"
            style={ctaButtonStyles}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 20px rgba(255, 127, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 6px 16px rgba(255, 127, 0, 0.3)';
            }}
          >
            Join Our Volunteer Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Volunteers;
