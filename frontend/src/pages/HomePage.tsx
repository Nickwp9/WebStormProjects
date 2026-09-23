import bannerVideo from '../assets/230749.mp4'

export const HomePage: React.FC = () => {
  return (
    <section className="banner">
      <video className="banner-video" autoPlay loop muted playsInline style = {{pointerEvents: 'none'}}>
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <div className="banner-content">
      </div>
    </section>
  );
};