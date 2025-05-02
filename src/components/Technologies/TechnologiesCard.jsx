import styles from './TechnologiesCard.module.css'
import { useIntersectionEffect } from "../../hooks/useIntersectionEffect";


function TechnologiesCard({ image, title }) {
      useIntersectionEffect(styles.hidden, styles.show);

      return (
            <>
                  <div className={`${styles.technologieCard} ${styles.hidden}`}>
                        <img className={styles.technologieImage} src={image} alt={title} />
                        <h2>{title}</h2>
                  </div>
            </>
      )
}

export default TechnologiesCard