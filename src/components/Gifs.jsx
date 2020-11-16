import React from "react";

const Gifs = ({ gifs }) => {
  return (
    <div>
      {gifs.map((url) => (
        <li key={url}>
          <img src={url}></img>
        </li>
      ))}
    </div>
  );
};

export default Gifs;
