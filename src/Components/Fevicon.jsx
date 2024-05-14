import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Fevicon = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <span onClick={handleClick}>
      {isFilled ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </span>
  );
};

export default Fevicon;
