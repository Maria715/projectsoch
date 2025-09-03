import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyles = {
    backgroundColor: '#233d60',
    color: 'white',
    padding: '4rem 0'
  };

  const containerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 1024 ? '2fr 1fr 1fr' : window.innerWidth > 768 ? '1fr 1fr' : '1fr',
    gap: '2rem'
  };

  const logoSectionStyles = {
    order: 1
  };

  const logoStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  };

  const logoIconStyles = {
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: '#ff7f00',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.75rem'
  };

  const logoTextStyles = {
    fontSize: '1.25rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700
  };

  const logoImageStyles = {
    height: '2.5rem',
    width: 'auto',
    objectFit: 'contain'
  };

  const logoFallbackStyles = {
    display: 'flex',
    alignItems: 'center'
  };

  const descriptionStyles = {
    color: '#d1d5db',
    marginBottom: '1.5rem',
    maxWidth: '28rem',
    lineHeight: 1.6
  };

  const socialLinksStyles = {
    display: 'flex',
    gap: '1rem'
  };

  const socialLinkStyles = {
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    color: 'white',
    textDecoration: 'none'
  };

  const sectionStyles = {
    order: 2
  };

  const sectionTitleStyles = {
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '1rem'
  };

  const linkListStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const linkStyles = {
    color: '#d1d5db',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };

  const dividerStyles = {
    borderTop: '1px solid #4b5563',
    marginTop: '3rem',
    paddingTop: '2rem',
    textAlign: 'center'
  };

  const copyrightStyles = {
    color: '#d1d5db'
  };

  const heartStyles = {
    color: '#ff7f00'
  };

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={gridStyles}>
          {/* Logo and Description */}
          <div style={logoSectionStyles}>
            <div style={logoStyles}>
              <img 
                src="/images/logo.png" 
                alt="Project Soch Logo" 
                style={logoImageStyles}
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{...logoFallbackStyles, display: 'none'}}>
                <div style={logoIconStyles}>
                  <i className="fas fa-heart" style={{ color: 'white', fontSize: '1.125rem' }}></i>
                </div>
                <span style={logoTextStyles}>Project Soch</span>
              </div>
            </div>
            <p style={descriptionStyles}>
              Empowering street kids and the transgender community through education, support, and opportunities for a brighter future.
            </p>
            
            {/* Social Media Links */}
            <div style={socialLinksStyles}>
              <a 
                href="https://www.facebook.com/share/1KhkUrtGsf/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialLinkStyles}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1877f2'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://www.instagram.com/projectsochofficial?igsh=MXNiOXEyaXB5Zms5eQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialLinkStyles}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#E4405F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" style={socialLinkStyles}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={socialLinkStyles}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div style={sectionStyles}>
            <h4 style={sectionTitleStyles}>Quick Links</h4>
            <ul style={linkListStyles}>
              <li><a href="#about" style={linkStyles}>About Us</a></li>
              <li><a href="#programs" style={linkStyles}>Our Programs</a></li>
              <li><a href="#get-involved" style={linkStyles}>Get Involved</a></li>
              <li><a href="#stories" style={linkStyles}>Success Stories</a></li>
              <li><a href="#volunteers" style={linkStyles}>Volunteers</a></li>
              <li><a href="#contact" style={linkStyles}>Contact Us</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div style={sectionStyles}>
            <h4 style={sectionTitleStyles}>Support</h4>
            <ul style={linkListStyles}>
              <li>
                <a 
                  href="#" 
                  style={linkStyles}
                  onClick={(e) => {
                    e.preventDefault();
                    const phoneNumber = "491724350490";
                    const message = "Hello! I would like to make a donation to support Project Soch's mission of empowering street kids and the transgender community. Please let me know how I can proceed with the donation. Thank you!";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Donate Now
                </a>
              </li>
              <li><a href="#contact" style={linkStyles}>Volunteer</a></li>
              <li><a href="#contact" style={linkStyles}>Partner With Us</a></li>
              <li><a href="#" style={linkStyles}>Privacy Policy</a></li>
              <li><a href="#" style={linkStyles}>Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div style={dividerStyles}>
          <p style={copyrightStyles}>
            &copy; {currentYear} Project Soch. All rights reserved. Made with <i className="fas fa-heart" style={heartStyles}></i> for a better world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
