import React, { useEffect, useState } from "react";
import axios from "../Axios";
import { API_KEY, imageUrl } from "../const";

const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[1]);
        setMovie(response.data.results[1]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="bg-cover h-[548px] text-white"
    >
      <div className="pt-[140px] h-[190px] pl-[15px]">
        <h1 className="text-[3rem] font-800 pb-[0.3rem]">
          {movie ? movie.title : ""}
        </h1>
        <div>
          <button className="text-white outline-none border-none font-700 rounded-lg px-[2rem] py-[0.5rem] bg-[#33333380] cursor-pointer ml-[1rem] hover:text-black hover:bg-[#e6e6e6]">
            Play
          </button>
          <button className="text-white outline-none border-none font-700 rounded-lg px-[2rem] py-[0.5rem] bg-[#33333380] cursor-pointer ml-[1rem] hover:text-black hover:bg-[#e6e6e6]">
            My List
          </button>
        </div>
        <h1 className="w-[45rem] leading-1.5 pt-16 text-16 h-[80px] max-w-[360px]">
          {movie ? movie.overview : ""}
        </h1>
      </div>
      <div className="h-[360px] bg-gradient-to-b from-transparent via-[rgba(37,37,37,0.61)] to-[#111]"></div>
    </div>
  );
};

export default Banner;
