import bannerVideo from '../assets/230749.mp4'
import { ProductCard } from '../components/ui/ProductCard'

export const HomePage: React.FC = () => {
  return (
    <section className="relative overflow-hidden h-[2000px]">
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-30" autoPlay loop muted playsInline style={{pointerEvents: 'none'}}>
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <ProductCard name = 'Air Max Crossovers' price = '120$' image = '../assets/hero.png'/>
      </div>
    </section>
  );
};