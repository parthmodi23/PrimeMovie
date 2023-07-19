import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function Search() {
  const { searchtext } = useParams();
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${ searchtext }&apikey=4a3b711b`)
      .then((response) => {
          setMovies(response.data.Search);
        
      });
  }, [searchtext]);
  return (
    <div className="App">
    {
        Movies.map((movie) => (
          <div className="column" key={movie.imdbID}>
            <div className="card2" style={{ display: "center" }} >
              <Link to={`/moviedetails/${movie.imdbID}`}>
                <h1>{movie.Title}</h1>
                <div><img src={movie.Poster} alt={movie.Title} /></div>
              </Link>
            </div>
          </div>
        ))
      }</div>
  );
}

export default Search;
