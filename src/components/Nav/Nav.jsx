import styles from './Nav.module.css'
import home from '../../img/home.png'
import webDevelopment from '../../img/web-development.png'
import project from '../../img/project.png'
import contact from '../../img/contact.png'
import { useEffect, useState } from 'react'

function Nav({ homeRef, techRef, projRef, contactRef }) {

      const [activeSection, setActiveSection] = useState('');


      const scrollToSection = (ref) => {
            ref.current?.scrollIntoView({ behavior: 'smooth' })
      }

      useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                              setActiveSection(entry.target.id)
                        }
                  })
            }, {
                  threshold: 0.5,
            });
            if (homeRef.current) observer.observe(homeRef.current);
            if (techRef.current) observer.observe(techRef.current);
            if (projRef.current) observer.observe(projRef.current);
            if (contactRef.current) observer.observe(contactRef.current);


            return () => observer.disconnect()
      }, []);

      return (
            <>
                  <nav>
                        <div className={styles.navItens}>
                              <button onClick={() => scrollToSection(homeRef)} className={`${activeSection === 'home' ? styles.sectionActivated : ""} ${styles.navLink}`}>
                                    <img src={home} alt="" />
                                    HOME
                              </button>

                              <button onClick={() => scrollToSection(techRef)} className={`${activeSection === 'tech' ? styles.sectionActivated : ""} ${styles.navLink}`}>
                                    <img src={webDevelopment} alt="" />
                                    TECNOLOGIAS
                              </button>

                              <button onClick={() => scrollToSection(projRef)} className={`${activeSection === 'proj' ? styles.sectionActivated : ""} ${styles.navLink}`}>
                                    <img src={project} alt="" />
                                    PROJETOS
                              </button>

                              <button onClick={() => scrollToSection(contactRef)} className={styles.navLink}>
                                    <img src={contact} alt="" />
                                    CONTATO
                              </button>
                        </div>

                  </nav>
            </>
      )
}

export default Nav