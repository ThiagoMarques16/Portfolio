import curriculo from '../../../public/documents/ThiagoMarques.pdf'

function ApresentationContainer({ onClick, styles }) {

      function dowloadCv(){
            const link = document.createElement("a");
            link.href = curriculo
            link.download = "ThiagoMarques"
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
      }

      return (
            <div className={styles.apresentationContainer}>
                  <h1 className={styles.hidden}>
                        Olá, eu sou <span className={styles.nome}>Thiago Marques</span>
                  </h1>
                  <p className={`${styles.textDeveloper} ${styles.hidden}`}>Desenvolvedor Front-end</p>
                  <div className={styles.btns}>
                        <button className={`${styles.aboutMe} ${styles.hidden}`} onClick={onClick}>
                              Saiba Mais
                        </button>
                        <button className={`${styles.dowload} ${styles.hidden}`} onClick={dowloadCv}>
                              Dowload CV
                        </button>
                  </div>
            </div>
      )
}

export default ApresentationContainer