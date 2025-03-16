import React, { useEffect, useState } from "react";
import axios from "../Axios";
import { API_KEY, imageUrl } from "../const";
import Youtube from 'react-youtube'

const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data, "response here");
        setMovies(response.data.results);
      })
      .catch((err) => {
        // alert('Network Error')
      });
  });

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array empty");
        }
      });
  };
  return (
    <div className="ml-[20px] text-white">
      <h2>{props.title}</h2>
      <div className="flex p-20 overflow-x-scroll overflow-y-hidden [&::-webkit-scrollbar]:hidden">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={
              props.isSmall
                ? "cursor-pointer max-h-[150px] mr-10 hover:scale-110"
                : "cursor-pointer max-h-[250px] mr-10 hover:scale-110"
            }
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
};

export default RowPost;
