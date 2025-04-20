import { useEffect, useState } from 'react'
import styles from './Home.module.css'
import ApresentationCard from './ApresentationCard'
import ApresentationContainer from './ApresentationContainer'
import BannerImage from './BannerImage'

function Home() {
  const [mostrarPagina, setMostrarPagina] = useState(false)

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add(styles.show)
  //         observer.unobserve(entry.target)
  //       }
  //     })
  //   })

  //   const hiddenElements = document.querySelectorAll(`.${styles.hidden}`)
  //   hiddenElements.forEach((el) => observer.observe(el))

  //   return () => {
  //     hiddenElements.forEach((el) => observer.unobserve(el))
  //   }
  // }, [])

  const ativarPagina = () => setMostrarPagina(true)
  const fecharPagina = () => setMostrarPagina(false)

  return (
    <section className={styles.HomeContainer}>
      <video autoPlay muted loop className={styles.videoBackground}>
        <source
          src="https://videos.pexels.com/video-files/3176015/3176015-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <ApresentationContainer onClick={ativarPagina} styles={styles} />
      <BannerImage styles={styles} />
      <ApresentationCard isVisible={mostrarPagina} onClose={fecharPagina} />
    </section>
  )
}

export default Home
