import React, { useState, useRef } from "react";
import Tippy from "@tippyjs/react";
import { FiHeart, FiMoreHorizontal } from "react-icons/fi";
import { TbMicrophone2 } from "react-icons/tb";
import { RxSpeakerLoud } from "react-icons/rx";

function MediaPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  console.log(audioRef);
  function togglePlay() {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <audio
        // controls
        ref={audioRef}
        src={props.src}
      />
      <div className="fixed left-0 right-0 bottom-0 flex content-around h-[90px] z-50 px-5 bg-player-bg">
        <div className="w-[30%] h-full flex items-center">
          <div className="flex items-center">
            <figure className="w-16 mr-3 rounded overflow-hidden shrink-0">
              <img
                src="https://res.cloudinary.com/phuockaito/image/upload/v1657265099/image_music/g9wzgsl6z4h0lh66bbmb.jpg"
                alt=""
              />
            </figure>
            <div className="grow pr-2 min-w-[30px]">
              <p className="mb-0 text-sm">STAY</p>
              <span className="text-xs text-text-gray hover:text-text-hover cursor-pointer">
                Justin Bieber
              </span>
            </div>
            <div className="ml-3 shrink-0">
              <Tippy className="text-xs" content="Thêm vào thư viện">
                <button className="hover:bg-hover-icon p-2 rounded-full z-10">
                  <FiHeart className="text-lg" />
                </button>
              </Tippy>
              <Tippy className="text-xs" content="Khác">
                <button className="hover:bg-hover-icon p-2 rounded-full z-10">
                  <FiMoreHorizontal className="text-lg" />
                </button>
              </Tippy>
            </div>
          </div>
        </div>
        <div className="grow"></div>
        <div className="w-[30%] flex items-center">
          <Tippy className="text-xs" content="Xem lời bài hát">
            <button className="hover:bg-hover-icon p-2 rounded-full z-10">
              <TbMicrophone2 className="text-lg" />
            </button>
          </Tippy>
          <div>
            <label for="volume">
              <button className="hover:bg-hover-icon p-2 rounded-full z-10">
                <RxSpeakerLoud className="text-base" />
              </button>
            </label>
            <input type="range" id="volume" name="volume" min="0" max="11" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaPlayer;
