function ApresentationContainer({ onClick, styles }) {
      return (
            <div className={styles.apresentationContainer}>
                  <h1 className={styles.hidden}>
                        Olá, eu sou <span className={styles.nome}>Thiago Marques</span>
                  </h1>
                  <p className={`${styles.textDeveloper} ${styles.hidden}`}>Desenvolvedor Front-end</p>
                  <button className={`${styles.aboutMe} ${styles.hidden}`} onClick={onClick}>
                        Saiba Mais
                  </button>
            </div>
      )
}

export default ApresentationContainer