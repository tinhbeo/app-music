import React from "react";
import Tippy from "@tippyjs/react";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineUpload } from "react-icons/hi";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { IoSearchOutline, IoShirtOutline } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";
import { RiVipDiamondLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "tippy.js/dist/tippy.css";

const Header = () => {
  return (
    <header className="h-[70px] flex items-center justify-between fixed top-0 left-60 bg-layout-bg z-50 px-14 right-0">
      <div className="flex items-center flex-grow mr-[10px]">
        <button disabled={true}>
          <IoIosArrowRoundBack className="w-6 h-6 mr-5 text-gray-600" />
        </button>
        <button disabled={true}>
          <IoIosArrowRoundForward className="w-6 h-6 mr-5 text-gray-600" />
        </button>
        <form className="w-full max-w-[540px] relative">
          <div className="flex items-center bg-alpha-bg h-10 rounded-[20px] p-3 focus-within:bg-primary-bg focus-within:rounded-b-none">
            <IoSearchOutline className="w-6 h-6 text-primary-text mr-[10px]" />
            <input
              type="text"
              className="peer bg-transparent outline-none border-none py-[5px] w-full leading-8 text-white placeholder:text-white"
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát ...."
            />
            <ul className="hidden absolute w-full left-0 top-full rounded-b-[20px] overflow-hidden peer-focus:block">
              <div className="py-3 px-[10px] bg-primary-bg">
                <div className="font-bold px-[10px] pb-2">Đề xuất cho bạn</div>
                <div className="flex items-center py-2 px-[10px] hover:bg-alpha-bg cursor-pointer">
                  <IoIosTrendingUp className="mr-[10px]" />
                  <p>hoa điêu thuyền</p>
                </div>
                <div className="flex items-center py-2 px-[10px] hover:bg-alpha-bg cursor-pointer">
                  <IoIosTrendingUp className="mr-[10px]" />
                  <p>hoa điêu thuyền</p>
                </div>
                <div className="flex items-center py-2 px-[10px] hover:bg-alpha-bg cursor-pointer">
                  <IoIosTrendingUp className="mr-[10px]" />
                  <p>hoa điêu thuyền</p>
                </div>
                <div className="flex items-center py-2 px-[10px] hover:bg-alpha-bg cursor-pointer">
                  <IoIosTrendingUp className="mr-[10px]" />
                  <p>hoa điêu thuyền</p>
                </div>
              </div>
            </ul>
          </div>
        </form>
      </div>
      <div className="flex items-center">
        <Tippy content="Chủ đề">
          <button className="items-header">
            <IoShirtOutline className="w-5 h-5" />
          </button>
        </Tippy>
        <Tippy content="Nâng cấp vip">
          <NavLink to="#" className="items-header">
            <RiVipDiamondLine className="w-5 h-5" />
          </NavLink>
        </Tippy>
        <Tippy content="Tải lên">
          <NavLink to="#" className="items-header">
            <HiOutlineUpload className="w-5 h-5" />
          </NavLink>
        </Tippy>
        <Tippy content="Cài đặt">
          <button className="items-header">
            <AiOutlineSetting className="w-5 h-5" />
          </button>
        </Tippy>
        <img
          className="items-header"
          src="https://avatar.talk.zdn.vn/default"
          alt="avatar"
          width={40}
          height={40}
        />
      </div>
    </header>
  );
};

export default React.memo(Header);
