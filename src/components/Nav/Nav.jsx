import styles from './Nav.module.css'
import home from '../../img/home.png'
import webDevelopment from '../../img/web-development.png'
import project from '../../img/project.png'
import contact from '../../img/contact.png'

function Nav(){
      return(
            <>
                  <nav>
                        <div className={styles.navItens}>
                              <a href="#" className={styles.navLink}>
                                    <img src={home} alt="" />
                                    HOME
                              </a>

                              <a href="#" className={styles.navLink}>
                                    <img src={webDevelopment} alt="" />
                                    TECNOLOGIAS
                              </a>

                              <a href="#" className={styles.navLink}>
                                    <img src={project} alt="" />
                                    PROJETOS
                              </a>

                              <a href="#" className={styles.navLink}>
                                    <img src={contact} alt="" />
                                    CONTATO
                              </a>
                        </div>

                  </nav>
            </>
      )
}

export default Nav