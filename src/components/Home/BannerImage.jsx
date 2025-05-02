import {useIntersectionEffect} from '../../hooks/useIntersectionEffect'
import banner from '../../img/banner.png';

function BannerImage({ styles }) {
  // Aqui usamos as strings literais, pois são classes globais do CSS
  useIntersectionEffect("hidden", "show");

  return (
    <div className={`hidden ${styles.banner}`}>
      <img src={banner} alt="Banner" />
    </div>
  );
}

export default BannerImage;
