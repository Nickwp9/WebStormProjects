import bannerVideo from '../assets/230749.mp4'
import { ProductCard } from '../components/ui/ProductCard'
import image1 from '../assets/H68990.webp'
import image2 from '../assets/LEBRON+XXIII+ALT+(GS).avif'
import image3 from '../assets/shopping.webp'
import image4 from '../assets/Harden_Volume_9_Shoes_Green_JR8289_01_00_standard.avif'
import image5 from '../assets/1.webp'
import image6 from '../assets/2.avif'
import image7 from '../assets/3.avif'
import image8 from '../assets/4.avif'
import image9 from '../assets/5.avif'
import image10 from '../assets/6.avif'

export const HomePage: React.FC = () => {
  return (
    <section className="relative overflow-hidden h-[2000px]">
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-30" autoPlay loop muted playsInline style={{pointerEvents: 'none'}}>
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <div className="relative z-10 h-full flex flex-col items-start justify-start text-center">
        <div className="flex flex-wrap gap-13 justify-start item-start p-40">


  <ProductCard name = 'Adidas Dame 7' price = '70$' image = {image1}/>
  <ProductCard name='Nike LeBron XXIII "Masked Menace"' price="200$" image= {image2} flipImage/>
  <ProductCard name='Jordan Tatum 3' price="130$" image= {image3} flipImage/>
  <ProductCard name='Adidas Harden Vol. 9' price="120$" image= {image4}/>
  <ProductCard name='Adidas Anthony Edwards 2' price="130$" image= {image5}/>
  <ProductCard name='Nike Ja 3' price="120$" image= {image6} flipImage/>
  <ProductCard name='Under Armour Curry 12' price="120$" image= {image7}/>
  <ProductCard name='Puma MB.04' price="120$" image= {image8} flipImage/>
  <ProductCard name='Nike Zoom GT Cut 3' price="120$" image= {image9} flipImage/>
  <ProductCard name='Nike Sabrina 3' price="120$" image= {image10} flipImage/>

</div>
      </div>
    </section>
  );
};  