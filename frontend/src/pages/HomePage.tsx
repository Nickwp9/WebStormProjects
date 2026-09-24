import bannerVideo from '../assets/230749.mp4'
import { ProductCard } from '../components/ui/ProductCard'
import image1 from '../assets/H68990.webp'
import image2 from '../assets/LEBRON+XXIII+ALT+(GS).avif'
import image3 from '../assets/shopping.webp'


export const HomePage: React.FC = () => {
  return (
    <section className="relative overflow-hidden h-[2000px]">
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-30" autoPlay loop muted playsInline style={{pointerEvents: 'none'}}>
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <div className="flex flex-wrap gap-6 justify-start">
  <ProductCard name = 'Adidas Dame 7' price = '70$' image = {image1}/>
  <ProductCard name='Nike LeBron XXIII "Masked Menace"' price="200$" image= {image2} flipImage/>
  <ProductCard name='Jordan Tatum 3' price="130$" image= {image3} flipImage/>
</div>
      </div>
    </section>
  );
};  