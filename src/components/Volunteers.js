import React from "react";

//  Reusable Team Member Card Component 
const TeamMemberCard = ({ image, name, role, email, socialLinks }) => {
  const cardContainer = {
    perspective: "1000px",
    width: "280px",
    height: "350px",
    margin: "1rem auto",
  };

  const cardStyles = {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 0.8s ease",
  };

  const frontBackCommon = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "1rem",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  };

  const frontStyles = {
    ...frontBackCommon,
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const backStyles = {
    ...frontBackCommon,
    backgroundColor: "white",
    transform: "rotateY(180deg)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    textAlign: "center",
  };

  //  front container for image
  const imageFrontContainer = {
    width: "90%",
    height: "80%",
    borderRadius: "50% / 35%",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  };

  const imageFrontStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const Imageshape = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

const nameStyles = {
  fontWeight: 700,
  color: "#233d60",
  fontSize: "1.5rem",  // 
  marginBottom: "0.25rem",
};

  const roleStyles = {
    color: "#ff7f00",
    fontSize: "1.1rem",
    marginBottom: "0.5rem",
  };

  const emailStyles = {
    color: "#64748b",
    fontSize: "1rem",
    marginBottom: "0.5rem",
  };

  const socialContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    marginTop: "0.5rem",
  };

  return (
    <div
      style={cardContainer}
      onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = "rotateY(180deg)")}
      onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = "rotateY(0deg)")}
    >
      <div style={cardStyles}>
        {/* FRONT=> Image Container */}
        <div style={frontStyles}>
          <div style={imageFrontContainer}>
            <img src={image} alt={name} style={imageFrontStyles} />
          </div>
        </div>
        {/*  BACK => Info Side */}
        <div style={backStyles}>
          <img src={image} alt={name} style={Imageshape} />
          <h4 style={nameStyles}>{name}</h4>
          <p style={roleStyles}>{role}</p>
          {email && <p style={emailStyles}>{email}</p>}
         <div style={socialContainer}>
  {socialLinks?.map((link, index) => (
    <div key={index} style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
      {/* Icon stays static */}
      <img src={link.icon} alt={link.name} style={{ width: "22px", height: "22px" }} />
      
      {/* Clickable name */}
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#0A66C2", fontWeight: "500" }}
      >
        {link.name}  {/* This will show "LinkedIn" */}
      </a>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  );
};

//  Main Volunteers Component
const Volunteers = () => {
  const volunteers = [
    {

      name: "Your name",
      role: "Position that you are holding in this project",
      email: "Your gmail",
      image: `${process.env.PUBLIC_URL}/images/maria.png`,  // path to your image
   socialLinks: [
  {

    name: "LinkedIn", // Optional label text
    url: "https://www.linkedin.com/in/maria-akhtar-067b88162/", // actual clickable link
    icon: "/images/linkedin.jpg", // path to icon

  },
],
    },
  ];

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    padding: "2rem",
  };
/* Loop throgh all volunteers and render a team member card for each*/
  return (
    <section id="volunteers">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Meet Our Team</h2>
      <div style={gridStyles}>
        {volunteers.map((member) => (
          <TeamMemberCard
        
            image={member.image}
            name={member.name}
            role={member.role}
            email={member.email}
            socialLinks={member.socialLinks}

          />
        ))}
      </div>
    </section>
  );
};

export default Volunteers;

