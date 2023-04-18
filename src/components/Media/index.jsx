import React, { Fragment } from "react";
import Tippy from "@tippyjs/react";
import { FiMoreHorizontal } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";

const Media = ({ vip, singer, image, srcMusic, nameMusic }) => {
  const singers = singer ? singer.split(", ") : [];
  return (
    <div className="flex items-center justify-between p-[10px] w-full max-w-xs select-none group rounded overflow-hidden relative">
      <div className="flex">
        <figure className=" mr-[10px] flex-shrink-0 rounded-sm overflow-hidden cursor-pointer relative">
          <img className="w-[60px] h-[60px] " src={image} alt="music-image" />
          <BsPlayFill className="absolute text-3xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden group-hover:block" />
        </figure>
        <div className="flex-grow">
          <div className="flex items-center">
            <h5 className="font-bold line-clamp-1">{nameMusic}</h5>
            {vip && (
              <span className="ml-2 rounded-sm w-[26px] h-3 bg-vip"></span>
            )}
          </div>

          <p className="my-1 text-xs text-text-gray line-clamp-1">
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
          <p className="text-xs text-text-gray">2 ngày trước</p>
        </div>
      </div>
      <Tippy content="Khác">
        <div className="text-base w-9 h-9 items-center justify-center flex-shrink-0 rounded-full hover:bg-hover-icon cursor-pointer hidden group-hover:flex">
          <FiMoreHorizontal />
        </div>
      </Tippy>

      <div className="absolute w-full h-full bg-alpha-bg left-0 pointer-events-none hidden group-hover:block"></div>
    </div>
  );
};

export default Media;
