import styles from './Nav.module.css'
import home from '../../img/home.png'
import webDevelopment from '../../img/web-development.png'
import project from '../../img/project.png'
import contact from '../../img/contact.png'

function Nav({ homeRef, techRef }) {
      const scrollToSection = (ref) => {
            ref.current?.scrollIntoView({ behavior: 'smooth' })
      }
      return (
            <>
                  <nav>
                        <div className={styles.navItens}>
                              <button onClick={() => scrollToSection(homeRef)} className={styles.navLink}>
                                    <img src={home} alt="" />
                                    HOME
                              </button>

                              <button onClick={() => scrollToSection(techRef)} className={styles.navLink}>
                                    <img src={webDevelopment} alt="" />
                                    TECNOLOGIAS
                              </button>

                              <button onClick={() => scrollToSection(techRef)} className={styles.navLink}>
                                    <img src={project} alt="" />
                                    PROJETOS
                              </button>

                              <button onClick={() => scrollToSection(techRef)} className={styles.navLink}>
                                    <img src={contact} alt="" />
                                    CONTATO
                              </button>
                        </div>

                  </nav>
            </>
      )
}

export default Nav