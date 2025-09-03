import React, { useState } from 'react';
import Toast from './Toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    setToast({
      isVisible: true,
      message: 'Thank you for your message! We will get back to you soon.',
      type: 'success'
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would subscribe the email to a newsletter
    setToast({
      isVisible: true,
      message: 'Thank you for subscribing to our newsletter!',
      type: 'success'
    });
    setNewsletterEmail('');
  };

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
    gap: '3rem'
  };

  const formCardStyles = {
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    padding: '2rem',
    border: '1px solid #f3f4f6',
    height: 'fit-content'
  };

  const formTitleStyles = {
    fontSize: '1.5rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    color: '#233d60',
    marginBottom: '1.5rem',
    textAlign: 'center'
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
  };

  const rowStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
    gap: '1.25rem'
  };

  const labelStyles = {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#233d60',
    marginBottom: '0.5rem',
    fontFamily: 'Poppins, sans-serif',
    marginLeft: '1rem',
    marginRight: '1rem'
  };

  const inputStyles = {
    width: 'calc(100% - 2rem)',
    padding: '0.875rem 1rem',
    borderRadius: '12px',
    border: '2px solid #e5e7eb',
    outline: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    backgroundColor: '#fafafa',
    fontWeight: '500',
    color: '#374151',
    margin: '0 1rem',
    boxSizing: 'border-box'
  };

  const selectStyles = {
    width: 'calc(100% - 2rem)',
    padding: '0.875rem 1rem',
    borderRadius: '12px',
    border: '2px solid #e5e7eb',
    outline: 'none',
    fontSize: '0.95rem',
    backgroundColor: '#fafafa',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    color: '#374151',
    cursor: 'pointer',
    margin: '0 1rem',
    boxSizing: 'border-box'
  };

  const textareaStyles = {
    width: 'calc(100% - 2rem)',
    padding: '0.875rem 1rem',
    borderRadius: '12px',
    border: '2px solid #e5e7eb',
    outline: 'none',
    fontSize: '0.95rem',
    resize: 'vertical',
    minHeight: '120px',
    backgroundColor: '#fafafa',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    color: '#374151',
    fontFamily: 'Inter, sans-serif',
    lineHeight: '1.6',
    margin: '0 1rem',
    boxSizing: 'border-box'
  };

  const submitButtonStyles = {
    backgroundColor: '#ff7f00',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    transform: 'scale(1)',
    border: 'none',
    cursor: 'pointer',
    width: 'calc(100% - 2rem)',
    boxShadow: '0 6px 16px rgba(255, 127, 0, 0.3)',
    fontFamily: 'Poppins, sans-serif',
    letterSpacing: '0.025em',
    margin: '0 1rem',
    boxSizing: 'border-box'
  };

  const infoCardStyles = {
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    padding: '2rem',
    marginBottom: '2rem',
    border: '1px solid #f3f4f6',
    height: 'fit-content'
  };

  const infoTitleStyles = {
    fontSize: '1.5rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    color: '#233d60',
    marginBottom: '1.5rem'
  };

  const infoItemStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem'
  };

  const infoIconStyles = {
    width: '3rem',
    height: '3rem',
    backgroundColor: 'rgba(255, 127, 0, 0.2)',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1.25rem',
    flexShrink: 0
  };

  const infoContentStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const infoLabelStyles = {
    fontWeight: 600,
    color: '#233d60',
    marginBottom: '0.25rem',
    fontSize: '1.1rem'
  };

  const infoTextStyles = {
    color: '#6b7280',
    lineHeight: 1.6,
    margin: 0
  };

  const newsletterCardStyles = {
    background: 'linear-gradient(135deg, #233d60 0%, #1d314e 100%)',
    borderRadius: '20px',
    padding: '2.5rem',
    color: 'white',
    boxShadow: '0 20px 25px -5px rgba(35, 61, 96, 0.3)'
  };

  const newsletterTitleStyles = {
    fontSize: '1.75rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    marginBottom: '1rem',
    textAlign: 'center'
  };

  const newsletterTextStyles = {
    color: '#f3f4f6',
    marginBottom: '1.5rem',
    lineHeight: 1.6
  };

  const newsletterFormStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const newsletterInputStyles = {
    width: 'calc(100% - 2rem)',
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    color: '#233d60',
    fontWeight: 500,
    border: 'none',
    outline: 'none',
    backgroundColor: 'white',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    margin: '0 1rem',
    boxSizing: 'border-box'
  };

  const newsletterButtonStyles = {
    backgroundColor: '#ff7f00',
    color: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '12px',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    width: 'calc(100% - 2rem)',
    boxShadow: '0 4px 12px rgba(255, 127, 0, 0.4)',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1rem',
    letterSpacing: '0.025em',
    margin: '0 1rem',
    boxSizing: 'border-box'
  };

  const partnershipCardStyles = {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    borderRadius: '20px',
    padding: '2.5rem',
    marginBottom: '2rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
  };

  const partnershipTitleStyles = {
    fontSize: '1.75rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    color: '#233d60',
    marginBottom: '1rem',
    textAlign: 'center'
  };

  const partnershipTextStyles = {
    color: '#64748b',
    marginBottom: '2rem',
    lineHeight: 1.6,
    textAlign: 'center',
    fontSize: '1.1rem'
  };

  const partnershipOptionsStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
    gap: '1.5rem',
    marginBottom: '2rem'
  };

  const partnershipItemStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '1px solid #f1f5f9',
    transition: 'all 0.3s ease'
  };

  const partnershipIconStyles = {
    width: '3rem',
    height: '3rem',
    backgroundColor: '#fff7ed',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  };

  const partnershipLabelStyles = {
    fontSize: '1.1rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    color: '#233d60',
    marginBottom: '0.5rem'
  };

  const partnershipDescStyles = {
    color: '#64748b',
    fontSize: '0.95rem',
    lineHeight: 1.5
  };

  const partnershipContactStyles = {
    backgroundColor: '#233d60',
    borderRadius: '12px',
    padding: '1.5rem',
    textAlign: 'center'
  };

  const partnershipContactTextStyles = {
    color: 'white',
    fontSize: '1.1rem',
    margin: 0
  };

  // Full Width Newsletter Styles
  const fullWidthNewsletterStyles = {
    marginTop: '4rem'
  };

  const newsletterCardFullStyles = {
    background: 'linear-gradient(135deg, #233d60 0%, #1d314e 100%)',
    borderRadius: '20px',
    padding: window.innerWidth > 768 ? '3rem 2rem' : '2rem 1.5rem',
    color: 'white',
    boxShadow: '0 20px 25px -5px rgba(35, 61, 96, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
    flexWrap: 'wrap',
    flexDirection: window.innerWidth > 768 ? 'row' : 'column',
    textAlign: window.innerWidth > 768 ? 'left' : 'center'
  };

  const newsletterContentStyles = {
    flex: '1',
    minWidth: '300px'
  };

  const newsletterTitleFullStyles = {
    fontSize: '2rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    marginBottom: '0.75rem'
  };

  const newsletterTextFullStyles = {
    color: '#f3f4f6',
    marginBottom: 0,
    lineHeight: 1.6,
    fontSize: '1.1rem'
  };

  const newsletterFormFullStyles = {
    display: 'flex',
    gap: '1rem',
    flex: '1',
    minWidth: window.innerWidth > 768 ? '400px' : '100%',
    alignItems: 'center',
    flexDirection: window.innerWidth > 480 ? 'row' : 'column'
  };

  const newsletterInputFullStyles = {
    flex: '1',
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    color: '#233d60',
    fontWeight: 500,
    border: 'none',
    outline: 'none',
    backgroundColor: 'white',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    width: window.innerWidth <= 480 ? '100%' : 'auto',
    minWidth: window.innerWidth <= 480 ? '100%' : '300px'
  };

  const newsletterButtonFullStyles = {
    backgroundColor: '#ff7f00',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '12px',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 6px 16px rgba(255, 127, 0, 0.4)',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1rem',
    letterSpacing: '0.025em',
    whiteSpace: 'nowrap',
    width: window.innerWidth <= 480 ? '100%' : 'auto'
  };

  // Full Width Partnership Styles
  const fullWidthPartnershipStyles = {
    marginTop: '4rem'
  };

  const partnershipCardFullStyles = {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    borderRadius: '20px',
    padding: window.innerWidth > 768 ? '3rem 2rem' : '2rem 1.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  };

  const partnershipHeaderFullStyles = {
    textAlign: 'center',
    marginBottom: '3rem'
  };

  const partnershipTitleFullStyles = {
    fontSize: '2rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    color: '#233d60',
    marginBottom: '1rem'
  };

  const partnershipTextFullStyles = {
    color: '#64748b',
    lineHeight: 1.6,
    fontSize: '1.2rem',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const partnershipOptionsFullStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(4, 1fr)' : window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
    gap: '2rem',
    marginBottom: '3rem'
  };

  const partnershipItemFullStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1.5rem',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #f1f5f9',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  };

  const partnershipIconFullStyles = {
    width: '4rem',
    height: '4rem',
    backgroundColor: '#fff7ed',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    transition: 'all 0.3s ease'
  };

  const partnershipLabelFullStyles = {
    fontSize: '1.25rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    color: '#233d60',
    marginBottom: '1rem'
  };

  const partnershipDescFullStyles = {
    color: '#64748b',
    fontSize: '1rem',
    lineHeight: 1.6
  };

  const partnershipContactFullStyles = {
    backgroundColor: '#233d60',
    borderRadius: '16px',
    padding: '2rem',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const partnershipContactTextFullStyles = {
    color: 'white',
    fontSize: '1.2rem',
    margin: 0,
    fontWeight: 500
  };

  return (
    <section id="contact" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Get in Touch</h2>
          <p style={subtitleStyles}>
            Have questions? Want to volunteer? Ready to make a difference? We'd love to hear from you.
          </p>
        </div>
        
        <div style={contentStyles}>
          {/* Contact Form */}
          <div style={formCardStyles}>
            <h3 style={formTitleStyles}>Send us a Message</h3>
            <form onSubmit={handleSubmit} style={formStyles}>
              <div style={rowStyles}>
                <div>
                  <label htmlFor="firstName" style={labelStyles}>First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required 
                    style={inputStyles}
                    onFocus={(e) => e.target.style.borderColor = '#ff7f00'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={labelStyles}>Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required 
                    style={inputStyles}
                    onFocus={(e) => e.target.style.borderColor = '#ff7f00'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" style={labelStyles}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  style={inputStyles}
                  onFocus={(e) => e.target.style.borderColor = '#ff7f00'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
              
              <div>
                <label htmlFor="subject" style={labelStyles}>Subject</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                  style={selectStyles}
                  onFocus={(e) => e.target.style.borderColor = '#ff7f00'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  <option value="">Select a subject</option>
                  <option value="volunteer">I want to volunteer</option>
                  <option value="partnership">Partnership opportunities</option>
                  <option value="ngo-collaboration">NGO Collaboration</option>
                  <option value="corporate-csr">Corporate CSR Partnership</option>
                  <option value="donation">Donation inquiry</option>
                  <option value="funding">Funding & Grants</option>
                  <option value="program-support">Program Support</option>
                  <option value="general">General inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" style={labelStyles}>Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  style={textareaStyles}
                  placeholder="Tell us how you'd like to get involved..."
                  onFocus={(e) => e.target.style.borderColor = '#ff7f00'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                style={submitButtonStyles}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.boxShadow = '0 8px 20px rgba(255, 127, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 6px 16px rgba(255, 127, 0, 0.3)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div style={infoCardStyles}>
              <h3 style={infoTitleStyles}>Contact Information</h3>
              
              <div>
                <div style={infoItemStyles}>
                  <div style={infoIconStyles}>
                    <i className="fas fa-map-marker-alt" style={{ color: '#ff7f00' }}></i>
                  </div>
                  <div style={infoContentStyles}>
                    <h4 style={infoLabelStyles}>Address</h4>
                    <p style={infoTextStyles}>Frankfurt<br/>Germany</p>
                  </div>
                </div>
                
                <div style={infoItemStyles}>
                  <div style={infoIconStyles}>
                    <i className="fas fa-phone" style={{ color: '#ff7f00' }}></i>
                  </div>
                  <div style={infoContentStyles}>
                    <h4 style={infoLabelStyles}>Phone</h4>
                    <p style={infoTextStyles}>+49 172 4350490</p>
                  </div>
                </div>
                
                <div style={infoItemStyles}>
                  <div style={infoIconStyles}>
                    <i className="fas fa-envelope" style={{ color: '#ff7f00' }}></i>
                  </div>
                  <div style={infoContentStyles}>
                    <h4 style={infoLabelStyles}>Email</h4>
                    <p style={infoTextStyles}>info@projectsoch.eu</p>
                  </div>
                </div>
              </div>
            </div>
            

            

          </div>
        </div>
        
        {/* Full Width Partnership Opportunities */}
        <div style={fullWidthPartnershipStyles}>
          <div style={partnershipCardFullStyles}>
            <div style={partnershipHeaderFullStyles}>
              <h3 style={partnershipTitleFullStyles}>Partnership Opportunities</h3>
              <p style={partnershipTextFullStyles}>We welcome collaborations with NGOs, corporations, and institutions to amplify our impact.</p>
            </div>
            
            <div style={partnershipOptionsFullStyles}>
              <div 
                style={partnershipItemFullStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={partnershipIconFullStyles}>
                  <i className="fas fa-handshake" style={{ color: '#ff7f00', fontSize: '2rem' }}></i>
                </div>
                <h4 style={partnershipLabelFullStyles}>NGO Collaborations</h4>
                <p style={partnershipDescFullStyles}>Joint programs, resource sharing, and community outreach initiatives</p>
              </div>
              
              <div 
                style={partnershipItemFullStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={partnershipIconFullStyles}>
                  <i className="fas fa-building" style={{ color: '#ff7f00', fontSize: '2rem' }}></i>
                </div>
                <h4 style={partnershipLabelFullStyles}>Corporate CSR</h4>
                <p style={partnershipDescFullStyles}>Employee volunteering, funding, and skill-based partnerships</p>
              </div>
              
              <div 
                style={partnershipItemFullStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={partnershipIconFullStyles}>
                  <i className="fas fa-graduation-cap" style={{ color: '#ff7f00', fontSize: '2rem' }}></i>
                </div>
                <h4 style={partnershipLabelFullStyles}>Educational Institutions</h4>
                <p style={partnershipDescFullStyles}>Student internships, research projects, and academic partnerships</p>
              </div>
              
              <div 
                style={partnershipItemFullStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={partnershipIconFullStyles}>
                  <i className="fas fa-heart" style={{ color: '#ff7f00', fontSize: '2rem' }}></i>
                </div>
                <h4 style={partnershipLabelFullStyles}>Grant Funding</h4>
                <p style={partnershipDescFullStyles}>Government grants, foundation funding, and international aid</p>
              </div>
            </div>
            
            <div style={partnershipContactFullStyles}>
              <p style={partnershipContactTextFullStyles}>
                <strong>Partnership Inquiries:</strong> partnerships@projectsoch.eu
              </p>
            </div>
          </div>
        </div>
        
        {/* Full Width Newsletter Subscription */}
        <div style={fullWidthNewsletterStyles}>
          <div style={newsletterCardFullStyles}>
            <div style={newsletterContentStyles}>
              <h3 style={newsletterTitleFullStyles}>Stay Updated</h3>
              <p style={newsletterTextFullStyles}>Subscribe to our newsletter to receive updates about our programs and impact.</p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} style={newsletterFormFullStyles}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required 
                style={newsletterInputFullStyles}
                onFocus={(e) => {
                  e.target.style.boxShadow = '0 0 0 3px rgba(255, 127, 0, 0.2)';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'scale(1)';
                }}
              />
              <button 
                type="submit" 
                style={newsletterButtonFullStyles}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 8px 20px rgba(255, 127, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 6px 16px rgba(255, 127, 0, 0.4)';
                }}
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
        duration={4000}
      />
    </section>
  );
};

export default Contact;

