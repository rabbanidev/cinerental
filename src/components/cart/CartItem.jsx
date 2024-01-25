/* eslint-disable react/prop-types */
import { assests } from "../../assets";
import { useCart } from "../../contexts/CartContext";
import { getMovieImgUrl } from "../../utils/getImgurl";

const CartItem = ({ cartItem }) => {
  const { title, cover, genre, price } = cartItem;
  const { cartData, setCartData } = useCart();

  const handleCartItemDelete = () => {
    const filteredCartItems = cartData.filter((c) => c.id !== cartItem.id);
    setCartData(filteredCartItems);
  };

  return (
    <div className="grid grid-cols-[1fr_auto] gap-4">
      <div className="flex items-center gap-4">
        <img
          className="rounded overflow-hidden"
          src={getMovieImgUrl(cover)}
          alt={title}
          width="50"
          height="50"
        />
        <div>
          <h3 className="text-base md:text-xl font-bold">{title}</h3>
          <p className="max-md:text-xs text-[#575A6E]">{genre}</p>
          <span className="max-md:text-xs">${price}</span>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <button
          className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
          onClick={handleCartItemDelete}
        >
          <img className="w-5 h-5" src={assests.deleteImg} alt="delete" />
          <span className="max-md:hidden">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
