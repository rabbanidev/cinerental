/* eslint-disable react/prop-types */
import { getMovieImgUrl } from "../../utils/getImgurl";

const MovieDetails = ({ movie, onClose, onAddToCart }) => {
  const { cover, title, description, genre, price } = movie;

  return (
    <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
      <img
        className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
        src={getMovieImgUrl(cover)}
        alt={title}
      />
      <div className="p-5 lg:p-11">
        <div className="">
          <h2 className="text-3xl lg:text-[50px] mb-2 font-bold">{title}</h2>
          <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
            {genre}
          </span>
          <div></div>
        </div>
        <p className="text-sm lg:text-base mb-8 lg:mb-16">{description}</p>
        <div className="grid lg:grid-cols-2 gap-2">
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={(e) => onAddToCart(e, movie)}
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${price} | Add to Cart</span>
          </a>
          <button
            className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
