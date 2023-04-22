import React, { useEffect, useState } from "react";
import { VscChevronRight } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "@/axiosConfig.js";

import SliderHome from "@/components/SliderHome";
import Media from "@/components/Media";
import MusicCard from "@/components/MusicCard";
import FavoriteSingers from "@/components/FavoriteSingers";
import { favoriteSingers } from "@/static/data.js";
import SlideSingers from "@/components/SlideSingers";
import MediaRanking from "@/components/MediaRanking";
import MediaPlayer from "@/components/MediaPlayer";
import "swiper/css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [trendingMusics, setTrendingMusics] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [topViews, setTopViews] = useState([]);
  const [song, setSong] = useState(null);
  useEffect(() => {
    (async () => {
      let [trendingMusicRes, newReleasesRes, topViewsRes] = await Promise.all([
        axios.get("/music/trending?_limit=14"),
        axios.get("/music/new-music?_limit=9"),
        axios.get("/music/top-views?_limit=5"),
      ]);
      trendingMusicRes = JSON.parse(trendingMusicRes.data);
      newReleasesRes = JSON.parse(newReleasesRes.data);
      topViewsRes = JSON.parse(topViewsRes.data);
      console.log(trendingMusicRes);
      setTrendingMusics(trendingMusicRes.data);
      setNewReleases(newReleasesRes.data);
      setTopViews(topViewsRes.data.sort((a, b) => b.view - a.view));
      setLoading(false);
    })();
  }, []);
  return (
    <>
      {loading ? null : (
        <>
          <div className="py-8">
            <SliderHome />
          </div>

          <section>
            <h3 className="flex justify-between items-center mb-4 font-bold text-xl capitalize">
              Gần đây
              <NavLink
                to="#"
                href="./"
                className="flex items-center text-xs uppercase text-text-gray font-medium hover:text-text-hover"
              >
                tất cả
                <VscChevronRight className="text-base ml-[6px]" />
              </NavLink>
            </h3>
            <div className="flex gap-7">
              {trendingMusics.slice(0, 9).map((music) => (
                <div className="overflow-hidden w-[150px]" key={music._id}>
                  <MusicCard image={music.image_music} isSmall />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-4 font-bold text-xl capitalize">
              Có thể bạn muốn nghe
            </h3>
            <div className="flex gap-7">
              {trendingMusics.slice(9, 14).map((music) => (
                <div
                  className="w-1/5 h-80 overflow-hidden"
                  key={music._id}
                  onClick={() =>
                    setSong({
                      srcMusic: music.src_music,
                      image: music.image_music,
                      nameMusic: music.name_music,
                      singer: music.name_singer,
                    })
                  }
                >
                  <MusicCard
                    image={music.image_music}
                    nameMusic={music.name_music}
                    singer={music.name_singer}
                  />
                </div>
              ))}
            </div>
          </section>
          {/* New release */}
          <section>
            <h3 className="mb-4 font-bold text-xl capitalize">Mới phát hành</h3>
            <div className="mb-[30px] flex items-center justify-between">
              <div>
                <button className="py-1 px-6 rounded-full bg-purple-primary text-white uppercase border border-purple-primary text-xs mr-4">
                  Bài hát
                </button>

                <button className="py-1 px-6 rounded-full bg-transparent text-white uppercase text-xs border border-border-alpha">
                  ALBUM
                </button>
              </div>
              <NavLink
                to="#"
                href="./"
                className="flex items-center text-xs uppercase text-text-gray font-medium hover:text-text-hover"
              >
                tất cả
                <VscChevronRight className="text-base ml-[6px]" />
              </NavLink>
            </div>

            <div className="flex flex-wrap">
              {newReleases.map((item) => (
                <div className="w-1/3" key={item._id}>
                  <Media
                    vip={true}
                    image={item.image_music}
                    singer={item.name_singer}
                    srcMusic={item.src_music}
                    nameMusic={item.name_music}
                  />
                </div>
              ))}
            </div>
          </section>
          {/* Favorite Singers */}
          <section>
            <h3 className="text-xl font-bold capitalize mb-4">
              nghệ sĩ yêu thích
            </h3>
            <div className="flex gap-7">
              {favoriteSingers.map((favoriteArtist, index) => (
                <div key={index} className="w-1/5">
                  <FavoriteSingers
                    name={favoriteArtist.name}
                    avatar={favoriteArtist.avatar}
                    images={favoriteArtist.images}
                  />
                </div>
              ))}
            </div>
          </section>
          {/* Slide Singers */}
          <section>
            <SlideSingers />
          </section>
          {/* New Music */}
          <section>
            <h3 className="flex justify-between items-center mb-4 font-bold text-xl capitalize">
              Top View
              <NavLink
                to="#"
                href="./"
                className="flex items-center text-xs uppercase text-text-gray font-medium hover:text-text-hover"
              >
                tất cả
                <VscChevronRight className="text-base ml-[6px]" />
              </NavLink>
            </h3>
            <div>
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 5000,
                }}
                slidesPerView={3}
                spaceBetween={28}
                slidesPerGroup={3}
                allowTouchMove={false}
              >
                {topViews &&
                  topViews.map((topView, index) => (
                    <SwiperSlide key={topView._id}>
                      <MediaRanking
                        image={topView.image_music}
                        nameMusic={topView.name_music}
                        singer={topView.name_singer}
                        ranking={index + 1}
                        time={topView.time_format}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </section>
          {song && (
            <section>
              <MediaPlayer {...song} />
            </section>
          )}
        </>
      )}
    </>
  );
};

export default React.memo(Home);
