type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  flipImage?: boolean;
};

export const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, flipImage }) => {
  return (
    <div className="bg-neutral-900 rounded-lg p-4 flex flex-col w-64 h-100 transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#b6ff00]/20">
      <div className="bg-neutral-800 rounded-md h-48 w-full mb-4">
        <img
          src={image}
          alt={name}
          className={`h-full w-full object-cover rounded-md ${flipImage ? 'scale-x-[-1]' : ''}`}
        />
      </div>

<h3 className="text-[#e0e0e0] font-semibold text-lg">{name}</h3>
<p className="text-[#b6ff00] mt-auto mb-2">{price}</p>
<button className="bg-[#b6ff00] text-black font-semibold py-2 rounded-md hover:opacity-90">
  Add to Cart
</button>
    </div>
  );
};