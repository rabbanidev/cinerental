import { useState } from "react";
import { assests } from "../assets";
import Modal from "./Modal";
import CartList from "./cart/CartList";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
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
            >
              <img src={assests.icons.moon} width="24" height="24" alt="Moon" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowCart(true)}
            >
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
