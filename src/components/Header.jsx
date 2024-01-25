import { useState } from "react";
import { assests } from "../assets";
import Modal from "./Modal";
import CartList from "./cart/CartList";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useCart();
  const { darkMode, onThemeToggle } = useTheme();

  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/">
          <img src={assests.logo} width="139" height="26" alt="Logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={assests.ring} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={onThemeToggle}
            >
              <img
                src={darkMode ? assests.icons.sun : assests.icons.moon}
                width="24"
                height="24"
                alt="Moon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowCart(true)}
            >
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
              <img
                src={assests.shoppingCart}
                width="24"
                height="24"
                alt="Shopping cart"
              />
            </a>
          </li>
        </ul>
      </nav>
      {
        <Modal show={showCart} size="md">
          <CartList onClose={() => setShowCart(false)} />
        </Modal>
      }
    </header>
  );
};

export default Header;
