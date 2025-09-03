import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [counters, setCounters] = useState({
    kids: 0,
    volunteers: 0,
    programs: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = {
        kids: 100,
        volunteers: 50,
        programs: 5
      };

      const duration = 2000;
      const steps = 60;
      const stepValue = {};
      
      Object.keys(targets).forEach(key => {
        stepValue[key] = targets[key] / steps;
      });

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        
        setCounters(prev => ({
          kids: Math.min(prev.kids + stepValue.kids, targets.kids),
          volunteers: Math.min(prev.volunteers + stepValue.volunteers, targets.volunteers),
          programs: Math.min(prev.programs + stepValue.programs, targets.programs)
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    };

    // Start animation when component mounts
    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  const heroStyles = {
    paddingTop: '5rem',
    paddingBottom: '4rem',
    background: 'linear-gradient(135deg, #233d60 0%, #2d4a6b 50%, #1d314e 100%)',
    color: 'white',
    textAlign: 'center'
  };

  const containerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const titleStyles = {
    fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    marginBottom: '1.5rem',
    lineHeight: 1.2
  };

  const subtitleStyles = {
    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
    marginBottom: '2rem',
    color: '#f3f4f6',
    lineHeight: 1.6
  };

  const buttonContainerStyles = {
    display: 'flex',
    flexDirection: window.innerWidth < 640 ? 'column' : 'row',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '4rem',
    flexWrap: 'wrap'
  };

  const primaryButtonStyles = {
    backgroundColor: '#ff7f00',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '1.125rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    transform: 'scale(1)',
    boxShadow: '0 10px 25px rgba(255, 127, 0, 0.3)',
    border: 'none',
    cursor: 'pointer',
    minWidth: '180px',
    textAlign: 'center',
    display: 'inline-block'
  };

  const secondaryButtonStyles = {
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '1.125rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    minWidth: '180px',
    textAlign: 'center',
    display: 'inline-block'
  };

  const statsContainerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
    marginTop: '4rem'
  };

  const statsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem'
  };

  const statItemStyles = {
    textAlign: 'center'
  };

  const statNumberStyles = {
    fontSize: 'clamp(2.25rem, 4vw, 3rem)',
    fontWeight: 700,
    color: '#ff7f00',
    marginBottom: '0.5rem',
    transition: 'all 1s ease'
  };

  const statLabelStyles = {
    color: '#e5e7eb'
  };

  return (
    <section id="home" style={heroStyles}>
      <div style={containerStyles}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <h1 style={titleStyles}>
            Empowering Street Kids & 
            <span style={{ color: '#ff7f00' }}> Transgender Community</span>
          </h1>
          <p style={subtitleStyles}>
            Through education, support, and opportunities, we're building a brighter future for those who need it most.
          </p>
          <div style={buttonContainerStyles}>
            <a href="#get-involved" style={primaryButtonStyles}>
              Get Involved
            </a>
            <a href="#about" style={secondaryButtonStyles}>
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Impact Stats */}
      <div style={statsContainerStyles}>
        <div style={statsGridStyles}>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>
              {Math.round(counters.kids)}
            </div>
            <p style={statLabelStyles}>Kids Helped</p>
          </div>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>
              {Math.round(counters.volunteers)}
            </div>
            <p style={statLabelStyles}>Volunteers</p>
          </div>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>
              {Math.round(counters.programs)}
            </div>
            <p style={statLabelStyles}>Programs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
