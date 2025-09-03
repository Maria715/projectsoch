import React from 'react';

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Priya, 14",
      role: "Former street child",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      story: "Project Soch gave me hope when I had none. They helped me get back to school and now I'm in 9th grade. I want to become a teacher to help other kids like me."
    },
    {
      id: 2,
      name: "Arjun, 22",
      role: "Transgender youth",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      story: "The skill training program changed my life. I learned computer skills and now I have my own small business. Project Soch believed in me when no one else did."
    },
    {
      id: 3,
      name: "Meera, 16",
      role: "Student",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      story: "Thanks to Project Soch, I not only got an education but also found a family. The volunteers became my support system and helped me dream of a better future."
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
    gap: '2rem'
  };

  const cardStyles = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    transition: 'all 0.3s ease'
  };

  const headerStyles2 = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  };

  const imageStyles = {
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '1rem'
  };

  const nameStyles = {
    fontWeight: 600,
    color: '#233d60',
    marginBottom: '0.25rem'
  };

  const roleStyles = {
    fontSize: '0.875rem',
    color: '#9ca3af'
  };

  const storyStyles = {
    color: '#6b7280',
    marginBottom: '1rem',
    lineHeight: 1.6
  };

  const starsStyles = {
    display: 'flex',
    alignItems: 'center',
    color: '#ff7f00'
  };

  return (
    <section id="stories" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Success Stories</h2>
          <p style={subtitleStyles}>
            Real stories of transformation and hope from the children and communities we've helped.
          </p>
        </div>
        
        <div style={gridStyles}>
          {stories.map((story) => (
            <div key={story.id} style={cardStyles}>
              <div style={headerStyles2}>
                <img 
                  src={story.image} 
                  alt={story.name} 
                  style={imageStyles}
                />
                <div>
                  <h4 style={nameStyles}>{story.name}</h4>
                  <p style={roleStyles}>{story.role}</p>
                </div>
              </div>
              <p style={storyStyles}>
                "{story.story}"
              </p>
              <div style={starsStyles}>
                <i className="fas fa-star" style={{ marginRight: '0.25rem' }}></i>
                <i className="fas fa-star" style={{ marginRight: '0.25rem' }}></i>
                <i className="fas fa-star" style={{ marginRight: '0.25rem' }}></i>
                <i className="fas fa-star" style={{ marginRight: '0.25rem' }}></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
