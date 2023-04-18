import React from "react";
import { NavLink } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
const FavoriteSingers = (props) => {
  const { name, avatar, images } = props;
  return (
    <div>
      <NavLink to="#" title={`góc nhạc của ${name}`}>
        <div className="relative overflow-hidden rounded-md h-auto group">
          <figure>
            <img
              className="group-hover:scale-110 transition-all ease-in-out duration-500"
              src={avatar}
              alt=""
            />
          </figure>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%, rgb(180, 172, 158))",
            }}
          ></div>
          <div className="p-1 border border-white border-solid rounded-full z-10 absolute bottom-1/2 left-1/2 -translate-x-1/2 hidden group-hover:block">
            <BsPlayFill className="text-3xl" />
          </div>
          <div className="absolute left-0 right-0 bottom-3 px-4">
            <h3 className="mb-3">
              <span className="text-xl font-extrabold">{name}</span>
            </h3>
            <div className="flex gap-3">
              {images.map((image, index) => (
                <figure key={index} className="rounded-md overflow-hidden">
                  <img src={image} alt="" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default FavoriteSingers;
