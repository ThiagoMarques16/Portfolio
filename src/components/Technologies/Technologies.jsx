import styles from './Technologies.module.css'

function Technologies(){
      return(
            <>
                  <div className={styles.technologiesContainer}>
                        <h1 className={styles.technologiesTitle}>TECNOLOGIAS</h1>
                        <div className={styles.technologies}>
                              <div>HTML</div>
                              <div>CSS</div>
                              <div>JS</div>
                              <div>REACT</div>
                        </div>
                  </div>

            </>
      )
}

export default Technologies