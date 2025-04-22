import styles from './TechnologiesCard.module.css'

function TechnologiesCard({image, title}){
      return(
            <>    
                  <div className={styles.technologieCard}>
                        <img className={styles.technologieImage} src={image} alt="" />
                        <h2>{title}</h2>
                  </div>
            </>
      )
}

export default TechnologiesCard