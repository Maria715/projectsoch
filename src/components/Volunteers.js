import React from 'react';
import volunteers from "../data/team";  // Import the JSON-like data

//  Reusable Team Member Card Component 
const TeamMemberCard = ({ image, name, role, tagline, message }) => {
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
    // soft shadow with orange tint
    boxShadow: "0 6px 18px rgba(255, 127, 0, 0.25)", 
  };


  const frontStyles = {
    ...frontBackCommon,
    backgroundColor: "white",
      position: "absolute",
  width: "100%",
  height: "100%",
   backfaceVisibility: "hidden",
  borderRadius: "1rem",
  overflow: "visible", // allow image to show fully
    alignItems: "center",
    justifyContent: "center",
  };

  const backStyles = {
    ...frontBackCommon,
    backgroundColor: "white",
    transform: "rotateY(180deg)",
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    textAlign: "center",
  };

  //  front container for image
  const imageFrontContainer = {
    width: "140px",
    height: "140px",
    borderRadius: "50%",          // fully circular
    overflow: "hidden",
    backgroundColor: "white",   // same as card background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1.5rem auto",        // centers image horizontally
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const imageFrontStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",          // ensure image itself is circular
    display: "block",
  };

// backimage 
  const Imageshape = {
  width: "140px",   // was 100px
  height: "140px",  // was 100px
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "1rem",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  paddingTop:"1px",
};


const nameStyles = {
  fontWeight: 700,
  color: "#233d60",
  fontSize: "1.5rem",  // 
  marginBottom: "0.25rem",
  textAlign:"center",
};

  const roleStyles = {
    color: "#ff7f00",
    fontSize: "1.0rem",
    marginBottom: "0.5rem",
    textAlign:"center",
  };

 const taglineStyles = {
    color: "#64748b",
    fontSize: "1rem",
    marginBottom: "0.5rem",
    textAlign:"center",
  };

  const messageStyle = {
     color: "#64748b",
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
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
          <h4 style={nameStyles}>{name}</h4>
          <p style={roleStyles}>{role}</p>
         <p style={taglineStyles}>{tagline}</p>
         
        </div>
        {/*  BACK => Info Side */}
        <div style={backStyles}>
          <img src={image} alt={name} style={Imageshape} />
         <p style={messageStyle}>{message}</p>  
        </div>
      </div>
    </div>
  );
};

//  Main Volunteers Component
const Volunteers = () => {


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
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
            tagline={member.tagline}
           message={member.message}

          />
        ))}
      </div>
    </section>
  );
};

export default Volunteers;                                 
