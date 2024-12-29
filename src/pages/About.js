import React from "react";
import { motion } from "framer-motion";
import CV from "../assets/CV_ESSAKHI_Jihane_1.pdf";

const About = ({ language }) => {
  const translations = {
    en: {
      aboutMe: "About Me",
      intro: "Hi, I'm Jihane Essakhi, a 5th-year Computer Science student at INSA Rouen Normandie. My expertise lies in machine learning, data analysis, and software engineering. I am passionate about leveraging data to solve real-world challenges.",
      education: "Education",
      educationDetails: [
        { institution: "INSA Rouen Normandie", details: "Computer Science Engineering (2020-2025)" },
        { institution: "UTP, Perak, Malaysia", details: "Semester Abroad (2024)" },
        { institution: "Ecole Al Jabr, Morocco", details: "Baccalaureate in Sciences (2020)" },
      ],
      keyProjects: "Key Projects",
      projects: [
        {
          title: "Project 'Ciel Mon Point d'Eau'",
          description: "Developed a deep learning model (U-Net) for hydrological object detection, leveraging TensorFlow and Keras for the SWOT CNES/NASA mission.",
        },
        {
          title: "OR2S - INSA Rouen",
          description: "Built an information system for managing health data and calculating spatio-temporal indicators using PostgreSQL and SQLAlchemy.",
        },
      ],
      skills: "Skills",
      hobbies: "Hobbies & Interests",
      hobbiesDetails: "Outside of work, I enjoy cheerleading, mentoring, and participating in Model United Nations (MUN) conferences.",
      downloadCV: "Download My CV",
      viewOrDownload: "You can view or download my CV by clicking the buttons below:",
    },
    fr: {
      aboutMe: "À propos de moi",
      intro: "Bonjour, je suis Jihane Essakhi, étudiante en informatique en 5e année à l'INSA Rouen Normandie. Mon expertise inclut l'apprentissage automatique, l'analyse de données et le génie logiciel. Je suis passionnée par l'utilisation des données pour résoudre des défis concrets.",
      education: "Formation",
      educationDetails: [
        { institution: "INSA Rouen Normandie", details: "Ingénierie en informatique (2020-2025)" },
        { institution: "UTP, Perak, Malaisie", details: "Semestre à l'étranger (2024)" },
        { institution: "École Al Jabr, Maroc", details: "Baccalauréat en sciences (2020)" },
      ],
      keyProjects: "Projets clés",
      projects: [
        {
          title: "Projet 'Ciel Mon Point d'Eau'",
          description: "Développement d'un modèle d'apprentissage profond (U-Net) pour la détection d'objets hydrologiques, utilisant TensorFlow et Keras pour la mission SWOT CNES/NASA.",
        },
        {
          title: "OR2S - INSA Rouen",
          description: "Création d'un système de gestion des données de santé et calcul des indicateurs spatio-temporels avec PostgreSQL et SQLAlchemy.",
        },
      ],
      skills: "Compétences",
      hobbies: "Loisirs & intérêts",
      hobbiesDetails: "En dehors du travail, je pratique le cheerleading, le mentorat et je participe aux conférences Model United Nations (MUN).",
      downloadCV: "Téléchargez mon CV",
      viewOrDownload: "Vous pouvez visualiser ou télécharger mon CV en cliquant sur les boutons ci-dessous :",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <div style={styles.container}>
      {/* Introduction Section */}
      <motion.div style={styles.box} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 style={styles.title}>{t.aboutMe}</h2>
        <p style={styles.text}>{t.intro}</p>
      </motion.div>

      {/* Education Section */}
      <motion.div style={styles.box} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 style={styles.title}>{t.education}</h2>
        {t.educationDetails.map((edu, index) => (
          <p key={index} style={styles.text}>
            <strong>{edu.institution}</strong> — {edu.details}
          </p>
        ))}
      </motion.div>

      {/* Key Projects Section */}
      <motion.div style={styles.box} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 style={styles.title}>{t.keyProjects}</h2>
        {t.projects.map((project, index) => (
          <div key={index} style={styles.subBox}>
            <h3 style={styles.subTitle}>{project.title}</h3>
            <p style={styles.text}>{project.description}</p>
          </div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <motion.div style={styles.box} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 style={styles.title}>{t.skills}</h2>
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

      {/* CV Section */}
      <motion.div style={styles.box} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 style={styles.title}>{t.downloadCV}</h2>
        <p style={styles.text}>{t.viewOrDownload}</p>
        <div style={styles.buttonContainer}>
          <a href={CV} download style={styles.link}>
            <button style={styles.button}>Download</button>
          </a>
          <a href={CV} target="_blank" rel="noopener noreferrer" style={styles.link}>
            <button style={styles.button}>Preview</button>
          </a>
        </div>
      </motion.div>

      {/* Hobbies Section */}
      <motion.div style={styles.box} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 style={styles.title}>{t.hobbies}</h2>
        <p style={styles.text}>{t.hobbiesDetails}</p>
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
  link: {
    textDecoration: "none",
  },
  button: {
    backgroundColor: "#4b3f33",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
};

export default About;
