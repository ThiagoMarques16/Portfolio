import styles from './Technologies.module.css'
import TechnologiesCard from './TechnologiesCard'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'
import react from '../../img/react.png'
import Title from '../Title/Title'

function Technologies() {
      return (
            <>
                  <div className={styles.technologiesContainer}>
                        <Title title={"Tecnologias"}/>
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