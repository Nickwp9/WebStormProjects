export const CartPage: React.FC = () => {
  return (
    <div className="flex gap-8 p-8 min-h-screen max-w-5xl mx-auto">
      <div className="flex-1">
        <h2 className="text-[#f5f5f5] text-2xl font-bold mb-6">Bought Items</h2>
        <div className="bg-neutral-900 rounded-lg p-6 flex flex-col gap-4">
          {/* cart items go here */}
        </div>
      </div>

      <div className="w-80 bg-neutral-900 rounded-lg p-6 h-fit">
        <h2 className="text-[#f5f5f5] text-2xl font-bold mb-6">Total</h2>
        <div className="flex justify-between text-[#f5f5f5] mb-4">
          <span>Subtotal</span>
          <span>$0</span>
        </div>
        <button className="w-full bg-[#b6ff00] text-black font-semibold py-3 rounded-md hover:opacity-90">
          Checkout
        </button>
      </div>
    </div>
  );
};