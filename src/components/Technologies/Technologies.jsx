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
    </div>
  );
}

export default Technologies;
