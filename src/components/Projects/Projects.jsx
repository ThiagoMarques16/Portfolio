import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'
import siteFotografia from '../../img/siteFotografia.png'
import automatic from '../../img/automatic.png'
import Title from '../Title/Title'


function Projects(){
      return(
            <>
                  <section className={styles.projectsContainer}>
                        <Title title={"Projetos"}/>
                        <div className={styles.projectsCards}>
                              <ProjectCard 
                                    imgProject={siteFotografia}
                                    projectAbout={"O projeto tem como foco a exposição da galeria de um fotografo, mostrando os principais estilos de fotografias"}
                                    technologies={"HTML CSS JS"}
                                    projectLink={"https://photographystudiodev.netlify.app"}
                                    repositoryLink={"https://github.com/ThiagoMarques16/PhotographyStudio"}
                              />
                              <ProjectCard 
                                    imgProject={automatic}
                                    projectAbout={"Site para apresentação das atividades de uma empresa de automação, com foco em pequenas e medias empresas"}
                                    technologies={"HTML CSS JS"}
                                    projectLink={"https://automatictech.netlify.app/"}
                                    repositoryLink={"https://github.com/ThiagoMarques16/Automatic"}
                                    status = "Em Desenvolvimento"
                              />
                        </div>
                  </section>
            </>
      )
}

export default Projects