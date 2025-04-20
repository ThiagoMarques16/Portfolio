import banner from '../../img/banner.png'

function BannerImage({ styles }) {
  return (
    <div className={`${styles.banner} ${styles.hidden}`}>
      <img src={banner} alt="Banner" />
    </div>
  )
}

export default BannerImage