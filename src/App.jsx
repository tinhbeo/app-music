import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
import Scrollbar from "@/components/Scrollbar";
import Sidebar from "@/components/Sidebar";
import MediaPlayer from "./components/MediaPlayer";

function App() {
  const contentElement = useRef(null);
  const [heightContent, setHeightContent] = useState(null);
  const [scrollTopPxl, setScrollTopPxl] = useState(0);
  useEffect(() => {
    setHeightContent(contentElement.current.scrollHeight);
  }, []);
  const handleScroll = () => {
    setScrollTopPxl(contentElement.current.scrollTop);
  };
  return (
    <div className="bg-layout-bg text-white flex font-inter text-sm h-screen">
      <Sidebar />
      <Header />
      <div className="flex-grow overflow-hidden relative">
        <div
          className="absolute inset-0 overflow-y-scroll px-14 no-scrollbar"
          onScroll={handleScroll}
          ref={contentElement}
        >
          <div className="mt-[70px]">
            <Outlet />
          </div>
        </div>
        {/* <Scrollbar fullHeight={heightContent} scrollTopPxl={scrollTopPxl} /> */}
      </div>
      {/* <div className="w-[200px] flex-shrink-0">abc</div> */}
    </div>
  );
}

export default App;
