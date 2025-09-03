import React from 'react';

const Mission = () => {
  const missionPoints = [
    {
      id: 1,
      title: "Education for All",
      description: "Ensuring every child has access to quality education regardless of their background."
    },
    {
      id: 2,
      title: "Community Empowerment",
      description: "Building strong, supportive communities that uplift and protect vulnerable members."
    },
    {
      id: 3,
      title: "Sustainable Change",
      description: "Creating lasting impact through education, skills training, and community development."
    }
  ];

  const goals = [
    {
      title: "100+ children enrolled in schools, app launched.",
      progress: 75
    },
    {
      title: "International donor base, 1,000+ children supported, transgender.",
      progress: 60
    },
    {
      title: "A global education-financing movement for groups.",
      progress: 80
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

  const contentStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1fr' : '1fr',
    gap: '3rem',
    alignItems: 'center'
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
    marginBottom: '2rem',
    lineHeight: 1.6
  };

  const pointsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const pointStyles = {
    display: 'flex',
    alignItems: 'center'
  };

  const pointIconStyles = {
    width: '2rem',
    height: '2rem',
    backgroundColor: '#ff7f00',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1.25rem',
    flexShrink: 0
  };

  const pointContentStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const pointTitleStyles = {
    fontWeight: 600,
    color: '#233d60',
    marginBottom: '0.25rem',
    fontSize: '1.1rem'
  };

  const pointDescriptionStyles = {
    color: '#6b7280',
    lineHeight: 1.6,
    margin: 0
  };

  const goalsContainerStyles = {
    position: 'relative'
  };

  const goalsCardStyles = {
    background: 'linear-gradient(135deg, #233d60 0%, #1d314e 100%)',
    borderRadius: '1rem',
    padding: '2rem',
    color: 'white'
  };

  const goalsTitleStyles = {
    fontSize: '1.5rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    marginBottom: '1.5rem'
  };

  const goalsListStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const goalItemStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '1rem'
  };

  const progressBarStyles = {
    width: '6rem',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '9999px',
    height: '0.5rem'
  };

  const progressFillStyles = (progress) => ({
    backgroundColor: '#ff7f00',
    height: '0.5rem',
    borderRadius: '9999px',
    transition: 'all 1s ease',
    width: `${progress}%`
  });

  const progressTextStyles = {
    color: '#ff7f00',
    fontWeight: 700
  };

  return (
    <section id="mission" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={contentStyles}>
          <div>
            <h2 style={titleStyles}>Our Mission & Vision</h2>
            <p style={subtitleStyles}>
              We envision a world where every child, regardless of their circumstances, has access to quality education and the opportunity to build a bright future.
            </p>
            
            <div style={pointsContainerStyles}>
              {missionPoints.map((point) => (
                <div key={point.id} style={pointStyles}>
                  <div style={pointIconStyles}>
                    <i className="fas fa-check" style={{ color: 'white', fontSize: '0.875rem' }}></i>
                  </div>
                  <div style={pointContentStyles}>
                    <h4 style={pointTitleStyles}>{point.title}</h4>
                    <p style={pointDescriptionStyles}>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={goalsContainerStyles}>
            <div style={goalsCardStyles}>
              <h3 style={goalsTitleStyles}>Our Strategic Timeline</h3>
              <div style={goalsListStyles}>
                {goals.map((goal, index) => (
                  <div key={index} style={goalItemStyles}>
                    <span style={{ flex: 1, lineHeight: 1.4, fontSize: '0.95rem' }}>{goal.title}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                      <div style={progressBarStyles}>
                        <div style={progressFillStyles(goal.progress)}></div>
                      </div>
                      <span style={progressTextStyles}>{goal.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
