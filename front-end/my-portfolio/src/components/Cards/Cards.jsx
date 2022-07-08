import { Typography } from '@mui/material';
import React from 'react';
import "./Cards.css";

function Cards({
    url = "lf;kagaflkdng",
    title = "Title Here",
    image,
}) {
  return (
    <div className="card">
        <a href={url} target="blank">
            <Typography>{title}</Typography>
            <img src={image} alt="model" />
        </a>
    </div>

  )
}

export default Cards