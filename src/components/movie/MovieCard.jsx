/* eslint-disable react/prop-types */

import { useState } from "react";
import { assests } from "../../assets";
import { getMovieImgUrl } from "../../utils/getImgurl";
import Modal from "../Modal";
import MovieDetails from "./MovieDetails";
import Rateing from "./Rateing";
import { useCart } from "../../contexts/CartContext";

const MovieCard = ({ movie }) => {
  const [show, setShow] = useState(false);
  const [movieSelection, setMovieSelection] = useState(null);
  const { cartData, setCartData } = useCart();

  // Movie selection handler
  const handleMovieSelection = () => {
    setMovieSelection(movie);
    setShow(true);
  };

  // Modal close handler
  const handleModalClose = () => {
    setMovieSelection(null);
    setShow(false);
  };

  // Add to Cart Handler
  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    const found = cartData.find((item) => item.id === movie.id);
    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      throw new Error("Already movie added into cart!");
    }
  };

  const { cover, title, genre, rating, price } = movie;

  return (
    <>
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={handleMovieSelection}>
          <img
            className="w-full object-cover"
            src={getMovieImgUrl(cover)}
            alt={title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <Rateing value={rating} />
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={assests.tag} alt="Tag" />
              <span>${price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>

      <Modal show={show} size="lg">
        <MovieDetails
          movie={movieSelection}
          onClose={handleModalClose}
          onAddToCart={handleAddToCart}
        />
      </Modal>
    </>
  );
};

export default MovieCard;
