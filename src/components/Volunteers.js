import React from "react";
import volunteers from "../data/team"; // Import team data

//  Reusable Team Member Card Component
const TeamMemberCard = ({ image, name, role, tagline, message }) => {
  const cardContainer = {
    perspective: "1000px",
    width: "280px",
    minHeight: "420px",
    margin: "1rem auto",
  };

  const cardStyles = {
    position: "relative",
    width: "100%",
    minHeight: "100%",
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
    boxShadow: "0 6px 18px rgba(255, 127, 0, 0.25)", // soft orange glow
  };

  const frontStyles = {
    ...frontBackCommon,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    padding: "1.5rem",
  };

  const backStyles = {
    ...frontBackCommon,
    backgroundColor: "white",
    transform: "rotateY(180deg)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "1.5rem",
  };

  // --- FRONT IMAGE ---
  const imageFrontContainer = {
    width: "140px",
    height: "140px",
    borderRadius: "50%", // perfect circle
    overflow: "hidden",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1.5rem auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  };

  const imageFrontStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // ensures face is centered, not stretched
    objectPosition: "center top", // focuses on face area
    borderRadius: "50%",
    display: "block",
  };

  // --- BACK IMAGE ---
  const Imageshape = {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center top", // keep centered crop on back too
    marginBottom: "1rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  const nameStyles = {
    fontWeight: 700,
    color: "#233d60",
    fontSize: "1.5rem",
    marginBottom: "0.25rem",
    textAlign: "center",
  };

  const roleStyles = {
    color: "#ff7f00",
    fontSize: "1rem",
    marginBottom: "0.5rem",
    textAlign: "center",
  };

  const taglineStyles = {
    color: "#64748b",
    fontSize: "1rem",
    marginBottom: "0.5rem",
    textAlign: "center",
  };

  const messageStyle = {
    color: "#64748b",
    fontSize: "1.1rem",
    marginBottom: "0.5rem",
  };

  return (
    <div
      style={cardContainer}
      onMouseEnter={(e) =>
        (e.currentTarget.firstChild.style.transform = "rotateY(180deg)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.firstChild.style.transform = "rotateY(0deg)")
      }
    >
      <div style={cardStyles}>
        {/* FRONT SIDE */}
        <div style={frontStyles}>
          <div style={imageFrontContainer}>
            <img src={image} alt={name} style={imageFrontStyles} />
          </div>
          <h4 style={nameStyles}>{name}</h4>
          <p style={roleStyles}>{role}</p>
          <p style={taglineStyles}>{tagline}</p>
        </div>

        {/* BACK SIDE */}
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
    alignItems: "stretch", // keeps cards aligned
  };

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
