import styles from './Nav.module.css'

function Nav(){
      return(
            <>
                  <nav>
                        <a href="#" className={styles.navLink}>HOME</a>
                        <a href="#" className={styles.navLink}>TECNOLOGIAS</a>
                        <a href="#" className={styles.navLink}>PROJETOS</a>
                        <a href="#" className={styles.navLink}>CONTATO</a>
                  </nav>
            </>
      )
}

export default Nav