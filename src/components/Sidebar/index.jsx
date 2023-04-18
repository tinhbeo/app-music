import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { BsCircle } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { IoRadioOutline } from "react-icons/io5";
import "./style.css";
const Sidebar = () => {
  return (
    <div className="w-[240px] text-primary-text relative bg-alpha-bg flex-shrink-0">
      <div className="h-[70px] flex items-center pl-7">
        <div
          className="bg-contain bg-no-repeat w-[120px] h-[40px] cursor-pointer"
          style={{
            backgroundImage: `url("https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg")`,
          }}
        ></div>
      </div>
      <nav className="mb-4">
        <ul className="sidebar_list">
          <NavLink
            to="/123"
            className="py-[7px] pl-7 pr-[25px] hover:text-white block"
          >
            <li className=" flex items-center">
              <MdOutlineLibraryMusic
                width="24px"
                height="24px"
                className="text-2xl mr-2"
              />
              <span className="text-[13px] font-bold">Cá Nhân</span>
            </li>
          </NavLink>
          <NavLink
            to="#"
            className="py-[7px] pl-7 pr-[25px]  hover:text-white block"
          >
            <li className=" flex items-center">
              <BsCircle width="24px" height="24px" className="text-2xl mr-2" />
              <span className="text-[13px] font-bold">Khám Phá</span>
            </li>
          </NavLink>
          <NavLink
            to="/123"
            className="py-[7px] pl-7 pr-[25px]  hover:text-white block"
          >
            <li className=" flex items-center">
              <AiOutlineLineChart
                width="24px"
                height="24px"
                className="text-2xl mr-2"
              />
              <span className="text-[13px] font-bold">#zingchart</span>
            </li>
          </NavLink>
          <NavLink
            to="/123"
            className="py-[7px] pl-7 pr-[25px]  hover:text-white block"
          >
            <li className=" flex items-center">
              <IoRadioOutline
                width="24px"
                height="24px"
                className="text-2xl mr-2"
              />
              <span className="text-[13px] font-bold">Radio</span>
              <figure className="ml-2">
                <img
                  src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg"
                  alt=""
                />
              </figure>
            </li>
          </NavLink>
          <NavLink
            to="/123"
            className="py-[7px] pl-7 pr-[25px]  hover:text-white block"
          >
            <li className=" flex items-center">
              <IoRadioOutline
                width="24px"
                height="24px"
                className="text-2xl mr-2"
              />
              <span className="text-[13px] font-bold">Theo dõi</span>
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className="relative h-[0.75px] before:absolute before:top-0 before:bottom-0 before:bg-border-alpha before:left-6 before:right-6"></div>
      <nav className="mb-4 mt-2">
        <ul>
          <li className="py-[7px] pl-7 pr-[25px] hover:text-white">
            <NavLink to="#" className="flex items-center">
              <MdOutlineLibraryMusic
                width="24px"
                height="24px"
                className="text-2xl mr-2"
              />
              <span className="text-[13px] font-bold">Nhạc Mới</span>
            </NavLink>
          </li>
          <li className="py-[7px] pl-7 pr-[25px] hover:text-white">
            <NavLink to="#" className="flex items-center">
              <BsCircle width="24px" height="24px" className="text-2xl mr-2" />
              <span className="text-[13px] font-bold">Thể Loại</span>
            </NavLink>
          </li>
          <li className="py-[7px] pl-7 pr-[25px] hover:text-white">
            <NavLink to="#" className="flex items-center">
              <AiOutlineLineChart
                width="24px"
                height="24px"
                className="text-2xl mr-2"
              />
              <span className="text-[13px] font-bold">Top 100</span>
            </NavLink>
          </li>
          <li className="py-[7px] pl-7 pr-[25px] hover:text-white">
            <NavLink to="#" className="flex items-center">
              <IoRadioOutline
                width="24px"
                height="24px"
                className="text-2xl mr-2"
              />
              <span className="text-[13px] font-bold">MV</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="bg-purple-primary rounded-lg p-3 font-semibold text-white text-xs text-center mt-[15px] mb-[10px] mx-5">
        <p className="mb-2 leading-normal">
          Đăng nhập để khám phá playlist dành riêng cho bạn
        </p>
        <button className="uppercase border py-[6px] px-[35px] rounded-full hover:brightness-90">
          Đăng nhập
        </button>
      </div>

      <div
        className="rounded-lg p-3 font-semibold text-white text-xs text-center mx-5"
        style={{
          backgroundImage: "linear-gradient(117deg,#5a4be7,#c86dd7 102%)",
        }}
      >
        <p className="mb-2 leading-normal">
          Nghe nhạc không quảng cáo cùng kho nhạc VIP
        </p>
        <button className="bg-[#ffdb00] border-[#ffdb00] text-[#32323D] uppercase border py-[6px] px-[35px] rounded-full hover:brightness-90">
          nâng cấp vip
        </button>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
