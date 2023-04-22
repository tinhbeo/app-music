import React, { useState, useRef, useEffect } from "react";
import Tippy from "@tippyjs/react";
import { FiHeart, FiMoreHorizontal } from "react-icons/fi";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { RxSpeakerLoud, RxLoop, RxShuffle } from "react-icons/rx";

function MediaPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const { style, max } = trackRef.current;
    const percent = (currentTime / max) * 100;
    style.background = `linear-gradient(to right, #fff ${percent}%, #999 ${percent}% )`;
  }, [currentTime]);

  useEffect(() => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    audioRef.current.play();
  }, [props.srcMusic]);
  function togglePlay() {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  const handleSeek = (e) => {
    setCurrentTime(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };

  const handleTimeUpdate = (e) => {
    const { currentTime } = e.target;
    setCurrentTime(currentTime);
  };

  function convertSecondsToMinutesAndSeconds(seccons) {
    const minutes = Math.floor(seccons / 60);
    const seconds = Math.trunc(seccons % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={props.srcMusic}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={(e) => setDuration(e.target.duration)}
      />
      <div className="fixed left-0 right-0 bottom-0 flex content-around h-[90px] z-50 px-5 bg-player-bg">
        <div className="w-[30%] h-full flex items-center">
          <div className="flex items-center">
            <figure className="w-16 mr-3 rounded overflow-hidden shrink-0">
              <img src={props.image} alt="" />
            </figure>
            <div className="grow pr-2 min-w-[30px]">
              <p className="mb-0 text-sm">{props.nameMusic}</p>
              <span className="text-xs text-text-gray">{props.singer}</span>
            </div>
            <div className="ml-3 shrink-0">
              <Tippy className="text-xs" content="Thêm vào thư viện">
                <button className="hover:bg-text-gray-2 p-2 rounded-full z-10">
                  <FiHeart className="text-lg" />
                </button>
              </Tippy>
              <Tippy className="text-xs" content="Khác">
                <button className="hover:bg-text-gray-2 p-2 rounded-full z-10">
                  <FiMoreHorizontal className="text-lg" />
                </button>
              </Tippy>
            </div>
          </div>
        </div>
        <div className="grow flex flex-col justify-center">
          <div className="flex gap-3 items-center justify-center">
            <Tippy className="text-xs" content="Bật phát ngẫu nhiên">
              <button className="hover:bg-text-gray-2 p-2 rounded-full z-10">
                <RxShuffle className="text-lg" />
              </button>
            </Tippy>

            <Tippy className="text-xs" content="Xem lời bài hát">
              <button className="hover:bg-text-gray-2 p-2 rounded-full z-10">
                <MdSkipPrevious className="text-xl" />
              </button>
            </Tippy>
            {!isPlaying && (
              <button
                className="hover:bg-text-gray-2 p-2 rounded-full z-10"
                onClick={togglePlay}
              >
                <BsPlayCircle className="text-xl" />
              </button>
            )}
            {isPlaying && (
              <button
                className="hover:bg-text-gray-2 p-2 rounded-full z-10"
                onClick={togglePlay}
              >
                <BsPauseCircle className="text-xl" />
              </button>
            )}

            <Tippy className="text-xs" content="Xem lời bài hát">
              <button className="hover:bg-text-gray-2 p-2 rounded-full z-10">
                <MdSkipNext className="text-xl" />
              </button>
            </Tippy>

            <Tippy className="text-xs" content="Bật phát lại tất cả">
              <button className="hover:bg-text-gray-2 p-2 rounded-full z-10">
                <RxLoop className="text-lg" />
              </button>
            </Tippy>
          </div>
          <div className="flex items-center">
            <div className="w-full flex items-center">
              <span className="text-xs">
                {convertSecondsToMinutesAndSeconds(currentTime)}
              </span>
              <input
                ref={trackRef}
                type="range"
                className="track"
                value={currentTime}
                onChange={handleSeek}
                max={duration}
              />
              <span className="text-xs">
                {convertSecondsToMinutesAndSeconds(duration)}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[30%] flex items-center">
          <Tippy className="text-xs" content="Xem lời bài hát">
            <button className="hover:bg-text-gray-2 p-2 rounded-full z-10">
              <TbMicrophone2 className="text-lg" />
            </button>
          </Tippy>
          <div>
            <label htmlFor="volume">
              <button className="hover:bg-text-gray-2 p-2 rounded-full z-10">
                <RxSpeakerLoud className="text-base" />
              </button>
            </label>
            <input type="range" id="volume" name="volume" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaPlayer;
