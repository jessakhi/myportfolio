const styles = {
  container: {
    backgroundColor: "#ffffff",
    padding: "50px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    fontFamily: "'Poppins', sans-serif",
  },
  box: {
    backgroundColor: "#fafaf7", // Light beige
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  subBox: {
    marginTop: "20px",
    borderLeft: "4px solid #4b3f33", // Dark brown accent
    paddingLeft: "15px",
  },
  title: {
    fontSize: "2rem",
    color: "#4b3832", // Sage green
    marginBottom: "10px",
  },
  subTitle: {
    fontSize: "1.5rem",
    color: "#4b3f33", // Dark brown
    marginBottom: "5px",
  },
  text: {
    fontSize: "1.1rem",
    color: "#7d6f64", // Muted beige
    lineHeight: "1.8",
  },
  skillsGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap", // Ensure wrapping on smaller screens
  },
  skillBox: {
    flex: "1 1 calc(33.333% - 20px)", // Three boxes in a row by default
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  list: {
    listStyleType: "circle",
    paddingLeft: "20px",
    color: "#4b3f33",
    fontSize: "1rem",
  },
  // Media query for phone devices
  "@media (max-width: 768px)": {
    skillsGrid: {
      flexDirection: "column", // Stack skill boxes vertically
      gap: "15px", // Add spacing between rows
    },
    skillBox: {
      flex: "1 1 100%", // Ensure skill boxes take full width
    },
    title: {
      fontSize: "1.5rem", // Adjust font size for smaller screens
    },
    text: {
      fontSize: "1rem",
    },
  },
};

export default About;
