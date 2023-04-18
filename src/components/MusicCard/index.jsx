import Tippy from "@tippyjs/react";
import { Fragment } from "react";

import { BsPlayFill } from "react-icons/bs";
import { FiHeart, FiMoreHorizontal } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const MusicCard = ({ image, nameMusic, singer }) => {
  const singers = singer ? singer.split(", ") : [];
  return (
    <div className="flex flex-col h-full">
      <div className="relative group cursor-pointer rounded-md overflow-hidden select-none mb-2">
        <img
          className="group-hover:scale-110 ease-in-out duration-500"
          src={image}
          alt="image-music"
        />
        <div className="group-hover:flex hidden gap-2 items-center justify-center absolute top-0 inset-0 before:absolute before:inset-0 before:bg-dark-alpha">
          <Tippy content="Thêm vào thư viện">
            <button className="hover:bg-hover-icon p-1 rounded-full z-10">
              <FiHeart className="text-xl" />
            </button>
          </Tippy>
          <div className="p-1 border border-white border-solid rounded-full z-10">
            <BsPlayFill className="text-4xl" />
          </div>
          <Tippy content="Khác">
            <button className="hover:bg-hover-icon p-1 rounded-full z-10">
              <FiMoreHorizontal className="text-xl" />
            </button>
          </Tippy>
        </div>
      </div>
      {nameMusic && singer && (
        <div className="flex-shrink-0">
          <NavLink
            to="#"
            className="font-bold hover:text-text-hover capitalize"
          >
            {nameMusic}
          </NavLink>
          <p className="text-text-gray">
            {singers.map((nameSinger, index) => {
              return (
                <Fragment key={index}>
                  {index !== 0 && ", "}
                  <NavLink to="#" className="hover:text-text-hover">
                    {nameSinger}
                  </NavLink>
                </Fragment>
              );
            })}
          </p>
        </div>
      )}
    </div>
  );
};

export default MusicCard;
