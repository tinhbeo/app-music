import React from "react";
import { NavLink } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
const MediaRanking = (props) => {
  const { image, nameMusic, singer, time, ranking } = props;
  return (
    <div className="bg-[#2f2739] w-full flex p-[15px] rounded select-none group cursor-pointer">
      <div className="mr-[10px] w-[120px] h-[120px] overflow-hidden rounded relative">
        <figure>
          <img
            className="hover:scale-110 ease-in-out duration-700 "
            src={image}
            alt=""
          />
        </figure>
        <div className="absolute inset-0 justify-center items-center bg-[#00000080] hidden group-hover:flex">
          <div className="border border-white border-solid rounded-full">
            <BsPlayFill className="text-4xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <p className="text-base font-bold capitalize">{nameMusic}</p>
          <p className="text-xs mt-[3px] text-[#ffffff80]">
            <span>
              <NavLink to="#" className="hover:text-text-hover hover:underline">
                {singer}
              </NavLink>
            </span>
          </p>
        </div>
        <div className="flex items-baseline justify-between">
          <span
            style={{ WebkitTextStroke: "1px #fff" }}
            className="text-[40px] text-transparent font-black opacity-40"
          >
            #{ranking}
          </span>
          <span className="text-sm opacity-40">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default MediaRanking;
