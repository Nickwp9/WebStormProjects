type ProductCardProps = {
  name: string;
  price: string;
  image: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="bg-neutral-900 rounded-lg p-4 flex flex-col w-64 h-100">
      <div className="bg-neutral-800 rounded-md h-48 w-full mb-4">
        <img src={image} alt={name} className="h-full w-full object-cover rounded-md" />
      </div>
      <h3 className="text-[#f5f5f5] font-semibold text-lg">{name}</h3>
      <p className="text-[#f5f5f5] opacity-70 mb-4">{price}</p>
      <button className="mt-auto bg-[#b6ff00] text-black font-semibold py-2 rounded-md hover:opacity-90">
        Add to Cart
      </button>
    </div>
  );
};
