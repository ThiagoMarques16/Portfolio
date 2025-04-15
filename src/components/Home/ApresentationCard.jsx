import styles from './ApresentationCard.module.css'

function ApresentationCard(){
      return(
            <>
                  <div className={styles.apresentationCardContainer}>

                        <button className={styles.removePage}>X</button>
                        <div className={styles.academicContainer}>
                              <h2>Academico</h2>
                              <p>Sou formado em Análise e Desenvolvimento de Sistemas e atualmente curso o primeiro semestre de Engenharia de Software. Também estou me especializando em desenvolvimento web através de um curso Full Stack, com foco em tecnologias modernas de front-end e back-end. Estou em constante evolução, buscando sempre aprimorar minhas habilidades e entregar soluções eficientes e inovadoras.</p>
                        </div>

                        <div className={styles.experienceContainer}>
                              <h2>Experiência Profissional</h2>
                              <p>Atuei por 3 anos como Supervisor Administrativo, desenvolvendo habilidades em gestão, organização e comunicação. Atualmente, estou em transição de carreira e buscando minha primeira oportunidade como Desenvolvedor Front-End. Tenho experiência prática com projetos pessoais, onde venho aplicando conhecimentos em HTML, CSS, JavaScript e frameworks modernos.</p>
                        </div>

                  </div>
            </>
      )
}

export default ApresentationCard