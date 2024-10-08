import React from "react";

const Card = ({ imgUrl, name, type }) => {
  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl m-4">
        <figure>
          <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title ">{name}</h2>
          <p>{type}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
