import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const navStyles = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(4px)',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    zIndex: 50,
    transition: 'all 0.3s ease'
  };

  const containerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const contentStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4rem'
  };

  const logoStyles = {
    display: 'flex',
    alignItems: 'center'
  };

  const logoIconStyles = {
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: '#233d60',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.75rem'
  };

  const logoTextStyles = {
    fontSize: '1.25rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    color: '#233d60'
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

  const navLinksStyles = {
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    gap: '2rem'
  };

  const navLinkStyles = {
    color: '#233d60',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease'
  };

  const ctaButtonStyles = {
    backgroundColor: '#ff7f00',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '12px',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    transform: 'scale(1)',
    boxShadow: '0 4px 12px rgba(255, 127, 0, 0.3)',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem'
  };

  const mobileMenuBtnStyles = {
    display: isMobile ? 'block' : 'none'
  };

  const mobileMenuStyles = {
    display: 'none',
    backgroundColor: 'white',
    borderTop: '1px solid #f3f4f6'
  };

  const mobileMenuContentStyles = {
    padding: '1.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const mobileNavLinkStyles = {
    display: 'block',
    color: '#233d60',
    textDecoration: 'none',
    fontWeight: 500,
    padding: '0.5rem 0',
    transition: 'color 0.3s ease'
  };

  const mobileCtaButtonStyles = {
    backgroundColor: '#ff7f00',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    fontWeight: 500,
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block'
  };

  return (
    <nav style={navStyles}>
      <div style={containerStyles}>
        <div style={contentStyles}>
          {/* Logo */}
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
          
          {/* Desktop Navigation */}
          <div style={navLinksStyles} className="nav-links">
            <a href="#home" style={navLinkStyles}>Home</a>
            <a href="#about" style={navLinkStyles}>About</a>
            <a href="#programs" style={navLinkStyles}>Programs</a>
            <a href="#get-involved" style={navLinkStyles}>Get Involved</a>
            <a href="#mission" style={navLinkStyles}>Mission</a>
            <a href="#stories" style={navLinkStyles}>Stories</a>
            <a href="#volunteers" style={navLinkStyles}>Volunteers</a>
            <a href="#contact" style={navLinkStyles}>Contact</a>
          </div>
          
          {/* CTA Button */}
          <div style={{ display: isMobile ? 'none' : 'block' }} className="nav-cta">
            <a 
              href="#" 
              style={ctaButtonStyles}
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
          </div>
          
          {/* Mobile menu button */}
          <div style={mobileMenuBtnStyles} className="mobile-menu-btn">
            <button 
              onClick={toggleMobileMenu}
              style={{ 
                color: '#233d60', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                fontSize: '1.25rem'
              }}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobile && isMobileMenuOpen && (
        <div style={{ ...mobileMenuStyles, display: 'block' }} className="mobile-menu">
          <div style={mobileMenuContentStyles}>
            <a href="#home" style={mobileNavLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" style={mobileNavLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#programs" style={mobileNavLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>Programs</a>
            <a href="#get-involved" style={mobileNavLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>Get Involved</a>
            <a href="#mission" style={mobileNavLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>Mission</a>
            <a href="#stories" style={mobileNavLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>Stories</a>
            <a href="#volunteers" style={mobileNavLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>Volunteers</a>
            <a href="#contact" style={mobileNavLinkStyles} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a 
              href="#" 
              style={mobileCtaButtonStyles} 
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                const phoneNumber = "491724350490";
                const message = "Hello! I would like to make a donation to support Project Soch's mission of empowering street kids and the transgender community. Please let me know how I can proceed with the donation. Thank you!";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
