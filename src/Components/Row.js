import React, { useState, useEffect } from "react";
import axios from "../middlewares/axios";
import "../Styles//Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseImageUrl = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(fetchUrl);
      console.log(res.data.results);
      setMovies(res.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const clickedMovie = (movie) => {
    console.log(movie);
    console.log("clicked");

    if (trailerUrl) {
      settrailerUrl("");
    }
    //   const url = movieTrailer(movie?.name || "");
    //   console.log(url);
    //   console.log(movie?.name || movie?.original_title);
    movieTrailer(movie?.name || movie?.original_title || movie?.original_name)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams.get("v"));
        settrailerUrl(urlParams.get("v"));
      })
      .catch(console.error);

    //   .then((url) => {
    //       const urlParams = new URLSearchParams(new URL(url).search);
    //       settrailerUrl(urlParams);
    //     })

    //     .catch((err) => console.log(err));
  };
  return (
    <div className="row">
      {/* {title} */}
      <h2>{title}</h2>
      <div className="row_posters">
        {/* {row posters} */}
        {movies.map((movie) => (
          <img
            onClick={() => clickedMovie(movie)}
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarg"}`}
            src={
              isLargeRow
                ? `${baseImageUrl}${movie.poster_path}`
                : `${baseImageUrl}${movie.backdrop_path}`
            }
            alt={movie.name}
          ></img>
        ))}
      </div>
      {/* {container}->posters */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  );
};

Row.defaultProps = {
  isLargeRow: false,
};

export default Row;
