import styles from './Home.module.css'
import banner from '../../img/banner.png'
import ApresentationCard from './ApresentationCard'
import { useState } from 'react'

function Home() {
  const [mostrarPagina, setMostrarPagina] = useState(false)

  const ativarPagina = () => {
    setMostrarPagina(true)
  }

  const fecharPagina = () => {
    setMostrarPagina(false)
  }

  return (
    <>
      <section className={styles.HomeContainer}>
        <video
          autoPlay
          muted
          loop
          className={styles.videoBackground}
        >
          <source
            src="https://videos.pexels.com/video-files/3176015/3176015-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className={styles.apresentationContainer}>
          <h1>
            Olá, eu sou
            <span className={styles.nome}> Thiago Marques</span>
          </h1>
          <p className={styles.textDeveloper}>Desenvolvedor Front-end</p>
          <button className={styles.aboutMe} onClick={ativarPagina}>
            Saiba Mais
          </button>
        </div>

        <ApresentationCard isVisible={mostrarPagina} onClose={fecharPagina} />
      </section>
    </>
  )
}

export default Home
