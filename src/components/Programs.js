import React from 'react';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Back-to-School Drive",
      description: "Providing school supplies, uniforms, and educational materials to street children, ensuring they have the tools they need to succeed in their education.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "fas fa-school",
      status: "Active: Aug - Sep"
    },
    {
      id: 2,
      title: "Skill Training for Transgender Youth",
      description: "Vocational training programs in various skills like computer literacy, beauty services, and entrepreneurship to help transgender youth become financially independent.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "fas fa-tools",
      status: "Ongoing"
    },
    {
      id: 3,
      title: "Food & Shelter Aid",
      description: "Providing daily meals and temporary shelter to street children, ensuring their basic needs are met while we work on long-term solutions.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "fas fa-home",
      status: "Daily"
    }
  ];

  const sectionStyles = {
    padding: '5rem 0',
    backgroundColor: 'white'
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
    gap: '2rem'
  };

  const cardStyles = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    transform: 'translateY(0)',
    border: '1px solid #f3f4f6'
  };

  const imageStyles = {
    width: '100%',
    height: '12rem',
    objectFit: 'cover',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem'
  };

  const cardContentStyles = {
    padding: '1.5rem'
  };

  const cardHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.75rem'
  };

  const iconStyles = {
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: 'rgba(255, 127, 0, 0.2)',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.75rem'
  };

  const cardTitleStyles = {
    fontSize: '1.25rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    color: '#233d60'
  };

  const descriptionStyles = {
    color: '#6b7280',
    marginBottom: '1rem',
    lineHeight: 1.6
  };

  const cardFooterStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const statusStyles = {
    fontSize: '0.875rem',
    color: '#9ca3af'
  };

  const linkStyles = {
    color: '#ff7f00',
    fontWeight: 500,
    textDecoration: 'none'
  };

  return (
    <section id="programs" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Our Current Programs</h2>
          <p style={subtitleStyles}>
            We run various initiatives throughout the year to support our mission and create lasting impact in the community.
          </p>
        </div>
        
        <div style={gridStyles}>
          {programs.map((program) => (
            <div key={program.id} style={cardStyles}>
              <img 
                src={program.image} 
                alt={program.title} 
                style={imageStyles}
              />
              <div style={cardContentStyles}>
                <div style={cardHeaderStyles}>
                  <div style={iconStyles}>
                    <i className={program.icon} style={{ color: '#ff7f00' }}></i>
                  </div>
                  <h3 style={cardTitleStyles}>{program.title}</h3>
                </div>
                <p style={descriptionStyles}>
                  {program.description}
                </p>
                <div style={cardFooterStyles}>
                  <span style={statusStyles}>{program.status}</span>
                  <a href="#get-involved" style={linkStyles}>Learn More →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
