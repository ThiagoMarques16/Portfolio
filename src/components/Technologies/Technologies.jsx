import styles from './Technologies.module.css'
import TechnologiesCard from './TechnologiesCard'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'
import react from '../../img/react.png'

function Technologies() {
      return (
            <>
                  <div className={styles.technologiesContainer}>
                        <h1 className={styles.technologiesTitle}>TECNOLOGIAS</h1>
                        <div className={styles.technologies}>

                              <TechnologiesCard
                                    image={html}
                                    title={"HTML"}
                              />

                              <TechnologiesCard
                                    image={css}
                                    title={"CSS"}
                              />

                              <TechnologiesCard
                                    image={javascript}
                                    title={"JavaScript"}
                              />

                              <TechnologiesCard
                                    image={react}
                                    title={"React"}
                              />

                        </div>
                  </div>

            </>
      )
}

export default Technologies