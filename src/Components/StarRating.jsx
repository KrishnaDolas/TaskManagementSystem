import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function StarRating({ value, onRate }) {
  const stars = Array.from({ length: 10 }, (_, index) => (
    <span
      key={index}
      style={{ cursor: 'pointer', color: index < value ? 'gold' : 'gray' }}
      onClick={() => onRate(index + 1)}
    >
      {index < value ? <StarIcon /> : <StarBorderIcon />}
    </span>
  ));

  return <div>{stars}</div>;
}

export default StarRating;
