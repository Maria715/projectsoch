import React, { useState } from 'react';
import Toast from './Toast';

const Donate = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });

  const donationOptions = [
    {
      amount: 25,
      description: "Provides school supplies for one child"
    },
    {
      amount: 50,
      description: "Feeds a child for one month"
    },
    {
      amount: 100,
      description: "Provides vocational training for one youth"
    }
  ];

  const handleDonate = (amount) => {
    const phoneNumber = "491724350490"; // German number without + and spaces
    const message = `Hello! I would like to make a donation of €${amount} to support Project Soch's mission of empowering street kids and the transgender community. Please let me know how I can proceed with the donation. Thank you!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show toast notification
    setToast({
      isVisible: true,
      message: `Thank you for your interest in donating €${amount}! We've opened WhatsApp for you to complete the donation.`,
      type: 'success'
    });
  };

  const handleCustomDonation = () => {
    if (customAmount && customAmount > 0) {
      handleDonate(customAmount);
      setCustomAmount('');
    } else {
      setToast({
        isVisible: true,
        message: 'Please enter a valid donation amount.',
        type: 'error'
      });
    }
  };

  const sectionStyles = {
    padding: '5rem 0',
    background: 'linear-gradient(90deg, #233d60 0%, #1d314e 100%)',
    color: 'white',
    textAlign: 'center'
  };

  const containerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const titleStyles = {
    fontSize: 'clamp(1.875rem, 4vw, 3rem)',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    marginBottom: '1.5rem'
  };

  const subtitleStyles = {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    color: '#f3f4f6',
    maxWidth: '48rem',
    margin: '0 auto 2rem'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
    maxWidth: '64rem',
    margin: '0 auto 3rem'
  };

  const cardStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(4px)',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const amountStyles = {
    fontSize: '1.875rem',
    fontWeight: 700,
    color: '#ff7f00',
    marginBottom: '1rem'
  };

  const descriptionStyles = {
    color: '#e5e7eb',
    marginBottom: '1rem'
  };

  const buttonStyles = {
    backgroundColor: '#ff7f00',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    width: '100%',
    display: 'block',
    border: 'none',
    cursor: 'pointer'
  };

  const customCardStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(4px)',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    maxWidth: '32rem',
    margin: '0 auto'
  };

  const customTitleStyles = {
    fontSize: '1.5rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    marginBottom: '1rem'
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const inputStyles = {
    flex: 1,
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    color: '#233d60',
    fontWeight: 500,
    border: 'none',
    outline: 'none'
  };

  const customButtonStyles = {
    backgroundColor: '#ff7f00',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '0.5rem',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <section id="donate" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={titleStyles}>Make a Difference Today</h2>
        <p style={subtitleStyles}>
          Your donation directly supports our programs and helps us continue our mission of empowering street kids and the transgender community through education.
        </p>
        
        <div style={gridStyles}>
          {donationOptions.map((option, index) => (
            <div key={index} style={cardStyles}>
              <div style={amountStyles}>€{option.amount}</div>
              <p style={descriptionStyles}>{option.description}</p>
              <button 
                onClick={() => handleDonate(option.amount)}
                style={buttonStyles}
              >
                Donate €{option.amount}
              </button>
            </div>
          ))}
        </div>
        
        <div style={customCardStyles}>
          <h3 style={customTitleStyles}>Custom Amount</h3>
          <form style={formStyles} onSubmit={(e) => { e.preventDefault(); handleCustomDonation(); }}>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
              <input 
                type="number" 
                placeholder="Enter amount in €" 
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                style={inputStyles}
              />
              <button 
                type="submit"
                style={customButtonStyles}
              >
                Donate Now
              </button>
            </div>
          </form>
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

export default Donate;
