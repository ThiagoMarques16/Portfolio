import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/ThiagoMarques16"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub className={styles.icon} size={55} />
      </a>

      <a
        href="https://www.linkedin.com/in/thiago-marques016/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={styles.icon} size={55} />
      </a>
    </footer>
  );
}

export default Footer;
