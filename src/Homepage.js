import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './App.css';
import './index.js';
import './homepage.css';
import logo from './logo1.jpg';

function Homepage() {
  const [mydata, setMydata] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then((res) => {
        // Assuming the response data is an array of movies
        setMydata(res.data.Search);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <img width="250px" src={logo} alt="logo" className="navbar-brand" />
          <h1 className="navbar-title" style={{fontSize:"50px"}} ><b>Prime Movies</b></h1>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchInput} onChange={handleSearchChange} />
            <Link to={`/search/${searchInput}`}>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </Link>
          </form>
        </div>
      </nav>

      <Carousel
        interval={2000}
        pause="hover"
        wrap={true}
        onSlide={(slideIndex) => console.log(`Active Slide: ${slideIndex}`)}
      >
        {mydata.map((movie) => (
          <Carousel.Item key={movie.imdbID}>
            <Link to={`/moviedetails/${movie.imdbID}`}>
              <img
                className="d-block w-100"
                src={movie.Poster}
                alt={movie.Title}
              />
              <Carousel.Caption>
                <h3>{movie.Title}</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="App2">
        {mydata.map((movie) => (
          <div key={movie.imdbID}>
            <div className="card2" style={{ display: "center" }} >
              <Link to={`/moviedetails/${movie.imdbID}`}>
                <div className="container">
                  <div className="box">
                  <h4>{movie.Title}</h4>
                    <img src={movie.Poster} alt={movie.Title} width="400px" height="400px" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Homepage;
