import {useIntersectionEffect} from '../../hooks/useIntersectionEffect';
function ApresentationContainer({ onClick, styles }) {

  useIntersectionEffect("hidden", "show", 150); 

  function dowloadCv() {
    const link = document.createElement("a");
    link.href = "/documents/ThiagoMarques.pdf";
    link.download = "ThiagoMarques";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className={styles.apresentationContainer}>
      <h1 className="hidden">
        Olá, eu sou <span className={styles.nome}>Thiago Marques</span>
      </h1>
      <p className={`hidden ${styles.textDeveloper}`}>Desenvolvedor Front-end</p>
      <div className={styles.btns}>
        <button className={`hidden ${styles.aboutMe}`} onClick={onClick}>
          Saiba Mais
        </button>
        <button className={`hidden ${styles.dowload}`} onClick={dowloadCv}>
          Dowload CV
        </button>
      </div>
    </div>
  );
}

export default ApresentationContainer;
