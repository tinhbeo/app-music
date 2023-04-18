import { useEffect, useRef } from "react";
const Scrollbar = ({ fullHeight, scrollTopPxl }) => {
  const scrollbar = useRef(null);

  useEffect(() => {
    const viewHeight = window.innerHeight;
    scrollbar.current.style.height = (viewHeight / fullHeight) * 100 + "%"; //set height of scrollbar = percent of viewHeight
    const scrollTopPercent = (scrollTopPxl / fullHeight) * 100; // caculate percent of [scrollTop, fullHeight]
    const translatePxl = (viewHeight * scrollTopPercent) / 100; // change percent of [scrollTop, fullHeight] to px of viewHeight
    scrollbar.current.style.transform = `translateY(${translatePxl}px)`;
  }, [fullHeight, scrollTopPxl]);

  return (
    <div className="w-1 absolute right-[2px] top-[1px] bottom-0 z-50">
      <div
        className="relative w-full bg-scrollbar rounded-sm"
        ref={scrollbar}
      ></div>
    </div>
  );
};

export default Scrollbar;
