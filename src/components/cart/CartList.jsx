/* eslint-disable react/prop-types */

import CartItem from "./CartItem";

const CartList = ({ onClose }) => {
  return (
    <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
      <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">Your Carts</h2>
      <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="flex items-center justify-end gap-2">
        <a
          className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
          href="#"
        >
          <img
            src="./assets/icons/checkout.svg"
            width="24"
            height="24"
            alt=""
          />
          <span>Checkout</span>
        </a>
        <button
          className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CartList;
