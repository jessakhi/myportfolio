import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div style={styles.container}>
      {/* Introduction Section */}
      <motion.div
        style={styles.box}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.title}>About Me</h2>
        <p style={styles.text}>
          Hi, I'm <strong>Jihane Essakhi</strong>, a 5th-year Computer Science student at INSA Rouen Normandie. My expertise lies in machine learning, data analysis, and software engineering. I am passionate about leveraging data to solve real-world challenges.
        </p>
      </motion.div>

      {/* Education Section */}
      <motion.div
        style={styles.box}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.title}>Education</h2>
        <p style={styles.text}>
          <strong>INSA Rouen Normandie</strong> — Computer Science Engineering (2020-2025)
        </p>
        <p style={styles.text}>
          Focused on Big Data Analytics, Applied Mathematics, Machine Learning, and Software Development, I have gained a strong foundation to tackle complex challenges in the tech industry.
        </p>
        <p style={styles.text}>
          <strong>UTP, Perak, Malaysia</strong> — Semester Abroad (2024)
        </p>
        <p style={styles.text}>
          Enrolled in courses on Data Science, Audit, and Project Management while exploring a new cultural and academic environment.
        </p>
        <p style={styles.text}>
          <strong>Ecole Al Jabr, Morocco</strong> — Baccalaureate in Sciences (2019)
        </p>
        <p style={styles.text}>
          Graduated with a specialization in Mathematical Sciences, earning a "Mention Très Bien."
        </p>
      </motion.div>

      {/* Professional Projects Section */}
      <motion.div
        style={styles.box}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.title}>Key Projects</h2>
        <div style={styles.subBox}>
          <h3 style={styles.subTitle}>Project "Ciel Mon Point d'Eau"</h3>
          <p style={styles.text}>
            Developed a deep learning model (U-Net) for hydrological object detection, leveraging TensorFlow and Keras for the SWOT CNES/NASA mission.
          </p>
        </div>
        <div style={styles.subBox}>
          <h3 style={styles.subTitle}>OR2S - INSA Rouen</h3>
          <p style={styles.text}>
            Built an information system for managing health data and calculating spatio-temporal indicators using PostgreSQL and SQLAlchemy.
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        style={styles.box}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.title}>Skills</h2>
        <div style={styles.skillsGrid}>
          <div style={styles.skillBox}>
            <h3 style={styles.subTitle}>Technical Skills</h3>
            <ul style={styles.list}>
              <li>Programming: Python, SQL, Java, JavaScript</li>
              <li>Machine Learning Libraries: TensorFlow, Keras, PyTorch</li>
              <li>Data Visualization Tools: Qlik Sense, Power BI</li>
            </ul>
          </div>
          <div style={styles.skillBox}>
            <h3 style={styles.subTitle}>Languages</h3>
            <ul style={styles.list}>
              <li>French, Arabic (Native)</li>
              <li>English (C1)</li>
              <li>German (B2)</li>
            </ul>
          </div>
          <div style={styles.skillBox}>
            <h3 style={styles.subTitle}>Soft Skills</h3>
            <ul style={styles.list}>
              <li>Problem-Solving</li>
              <li>Team Collaboration</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Interests Section */}
      <motion.div
        style={styles.box}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.title}>Hobbies & Interests</h2>
        <p style={styles.text}>
          Outside of work, I enjoy <strong>cheerleading</strong>, mentoring, and participating in Model United Nations (MUN) conferences.
        </p>
      </motion.div>
    </div>
  );
};

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
  },
  skillBox: {
    flex: 1,
    backgroundColor: "#ffffff", // White for contrast
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
};

export default About;
