import React from "react";
import Box from "./Box";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Box
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.name}
              img={restaurant.imgUrl}
              type={restaurant.type}
            />
          );
        })}
    </div>
  );
};

export default Restaurants;