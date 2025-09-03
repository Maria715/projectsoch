import React from 'react';

const About = () => {
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

  const contentStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1fr' : '1fr',
    gap: '3rem',
    alignItems: 'center'
  };

  const textContentStyles = {
    order: 1
  };

  const storyTitleStyles = {
    fontSize: '1.5rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    color: '#233d60',
    marginBottom: '1rem'
  };

  const paragraphStyles = {
    color: '#6b7280',
    marginBottom: '1.5rem',
    lineHeight: 1.6
  };

  const featuresGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem'
  };

  const featureItemStyles = {
    display: 'flex',
    alignItems: 'flex-start'
  };

  const featureIconStyles = {
    width: '3rem',
    height: '3rem',
    backgroundColor: 'rgba(255, 127, 0, 0.2)',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1rem',
    flexShrink: 0
  };

  const featureContentStyles = {
    flex: 1
  };

  const featureTitleStyles = {
    fontWeight: 600,
    color: '#233d60',
    marginBottom: '0.5rem'
  };

  const featureDescriptionStyles = {
    color: '#6b7280',
    fontSize: '0.875rem'
  };

  const imageContainerStyles = {
    position: 'relative',
    order: 2
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
    borderRadius: '1rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  };

  const statsBoxStyles = {
    position: 'absolute',
    bottom: '-1.5rem',
    left: '-1.5rem',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  };

  const statsNumberStyles = {
    fontSize: '1.875rem',
    fontWeight: 700,
    color: '#ff7f00'
  };

  const statsLabelStyles = {
    color: '#233d60',
    fontWeight: 500
  };

  return (
    <section id="about" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>About Project Soch</h2>
          <p style={subtitleStyles}>
            We are a dedicated non-profit organization committed to creating positive change in the lives of street children and the transgender community.
          </p>
        </div>
        
        <div style={contentStyles}>
          <div style={textContentStyles}>
            <h3 style={storyTitleStyles}>Our Story</h3>
            <p style={paragraphStyles}>
            Founded in 2023, Project Soch began with a powerful vision: to uplift communities that society too often overlooks. Millions of street children, beggars, and transgender individuals lack access to education, dignity, and sustainable livelihoods. Traditional financial aid frequently fails due to misuse of funds, while many parents depend on their children’s earnings instead of sending them to school.
            </p>
            <p style={paragraphStyles}>
            At Project Soch, we believe in breaking this cycle by ensuring that education and support reach those who need it most, creating opportunities for empowerment and a brighter future.
            </p>
            
            <div style={featuresGridStyles}>
              <div style={featureItemStyles}>
                <div style={featureIconStyles}>
                  <i className="fas fa-graduation-cap" style={{ color: '#ff7f00', fontSize: '1.25rem' }}></i>
                </div>
                <div style={featureContentStyles}>
                  <h4 style={featureTitleStyles}>Education First</h4>
                  <p style={featureDescriptionStyles}>Providing quality education to underprivileged children</p>
                </div>
              </div>
              <div style={featureItemStyles}>
                <div style={featureIconStyles}>
                  <i className="fas fa-hands-helping" style={{ color: '#ff7f00', fontSize: '1.25rem' }}></i>
                </div>
                <div style={featureContentStyles}>
                  <h4 style={featureTitleStyles}>Community Support</h4>
                  <p style={featureDescriptionStyles}>Building strong support networks for vulnerable groups</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={imageContainerStyles}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Children learning together" 
              style={imageStyles}
            />
            <div style={statsBoxStyles}>
              <div style={statsNumberStyles}>5+</div>
              <div style={statsLabelStyles}>Years of Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
