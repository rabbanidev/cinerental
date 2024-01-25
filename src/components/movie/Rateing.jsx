/* eslint-disable react/prop-types */

import { assests } from "../../assets";

const Rateing = ({ value }) => {
  const stars = Array(value).fill(assests.star);

  return (
    <div className="flex items-center space-x-1 mb-5">
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="Star" />
      ))}
    </div>
  );
};

export default Rateing;
