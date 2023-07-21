import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './homepage.css';
function Search() {
  const { searchtext } = useParams();
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchtext}&apikey=4a3b711b`)
      .then((response) => {
        setMovies(response.data.Search);

      });
  }, [searchtext]);
  return (
    <div className="App2">
      {

        Movies.map((movie) =>
        (

          <div key={movie.imdbID}>


            <div className="card2" >
              <Link to={`/moviedetails/${movie.imdbID}`}>

                <h4>{movie.Title}</h4>
                <div><img src={movie.Poster} alt={movie.Title} height={"400px"}/></div>
              </Link>

            </div></div>


        )


        )
      }

    </div>

  );
}

export default Search;
