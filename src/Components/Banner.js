import Axios from "axios";
import React, { useState, useEffect } from "react";
import axios from "../middlewares/axios";
import requests from "../middlewares/request";
import "../Styles/Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(requests.fetchRomanceMovies);

      console.log(res.data.results);

      // using math function to get a random number/
      console.log(Math.floor(Math.random() * res.data.results.length - 1));
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    };
    fetchMovie();
  }, []);
  console.log(movie);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie && movie.name}</h1>

        <div className="banner-buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">My List</button>
        </div>
        <div className="banner_description">
          {truncate(movie?.overview, 300)}
        </div>
      </div>
      {/* { Background Image} */}

      {/* { title} */}

      {/* { two button to play and mylist} */}

      {/* { description} */}

      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
