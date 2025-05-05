import styles from './Technologies.module.css';
import TechnologiesCard from './TechnologiesCard';
import html from '../../img/html.png';
import css from '../../img/css.png';
import javascript from '../../img/javascript.png';
import react from '../../img/react.png';
import Title from '../Title/Title';
import { useIntersectionEffect } from "../../hooks/useIntersectionEffect";

function Technologies() {
  useIntersectionEffect("hidden", "show slide-left", 200);
  
  return (
    <div className={styles.technologiesContainer}>
      <Title title={"Tecnologias"} />
      <div className={styles.technologies}>
        <div className="hidden">
          <TechnologiesCard image={html} title={"HTML"} />
        </div>
        <div className="hidden">
          <TechnologiesCard image={css} title={"CSS"} />
        </div>
        <div className="hidden">
          <TechnologiesCard image={javascript} title={"JavaScript"} />
        </div>
        <div className="hidden">
          <TechnologiesCard image={react} title={"React"} />
        </div>
      </div>

      <div className={styles.softSkilsContainer}>
        <Title title={"Soft Skills"} />
        <div className={styles.softSkills}>
          <div className={styles.skill}>
            <p>Comunicação</p>
          </div>
          <div className={styles.skill}>
            <p>Trabalho em equipe</p>
          </div>
          <div className={styles.skill}>
            <p>Adaptabilidade</p>
          </div>
          <div className={styles.skill}>
            <p>Gestão do tempo</p>
          </div>
          <div className={styles.skill}>
            <p>Aprendizado contínuo</p>
          </div>
          <div className={styles.skill}>
            <p>Curiosidade e proatividade</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
