import styles from './ProjectCard.module.css'
import { FiEye } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


function ProjectCard({ imgProject, technologies, projectAbout, projectLink, repositoryLink, status = "concluido" }) {
      const isDevelopment = status.toLowerCase() === "em desenvolvimento";

      return (

            <>
                  <div className={styles.projectCard}>
                        <img src={imgProject} alt={projectAbout || "Imagem do projeto"} />
                        <p className={styles.projectAbout}>{projectAbout}</p>

                        <div className={styles.techStatusLine}>
                              <p className={styles.projectTechnologies}>{technologies}</p>
                              <span
                                    className={`${styles.projectStatus} ${isDevelopment ? styles.devStatus : styles.doneStatus
                                          }`}
                              >
                                    {status}
                              </span>
                        </div>

                        <div className={styles.linksNavigations}>
                              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                                    <FiEye /> Ver site
                              </a>
                              <a href={repositoryLink} target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> GitHub
                              </a>
                        </div>
                  </div>
            </>
      )
}

export default ProjectCard