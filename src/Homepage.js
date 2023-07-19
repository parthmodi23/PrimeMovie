import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './App.css';

function Homepage() {
  const [mydata, setMydata] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then((res) => {
        // Assuming the response data is an array of movies
        setMydata(res.data.Search);
      })
  }, []);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="App">
            <div className="card2" >
          <h1>Movie Details</h1>
          <input  type="text" value={searchInput} onChange={handleSearchChange} />
          <Link to={`/search/${searchInput}`}>
            <button>Search</button>
          </Link></div>
          {
            mydata.map((movie) => (
              <div className="column" key={movie.imdbID}>
                <div className="card2" style={{ display: "center" }} >
                  <Link to={`/moviedetails/${movie.imdbID}`}>
                    <h1>{movie.Title}</h1>
                    <div><img src={movie.Poster} alt={movie.Title} /></div>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Homepage;
