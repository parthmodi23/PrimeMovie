import React, { useState, useEffect } from "react";
import axios from "axios";


function MyApp() {
  const [postcount, setPostcount] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then((res) => {
        // Assuming the response data is an array of movies
        setPostcount(res.data.Search);
      })
  }, []);

  // Function to show movie details when the "Movie details" button is clicked
  const showMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };

  // Function to close movie details and go back to the movie list
  const closeMovieDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      {/* Show the list of movies */}
      {!selectedMovie && (
        <><div className="grid">
           {postcount.map((post) => {
            const { imdbID, Title, Poster } = post;
            return (
              <div className="card" style={{ width: "18rem" }} key={imdbID}>
                <img src={Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>{Title}</h1>
                  <button className="btn btn-primary"
                    onClick={() => showMovieDetails(post)}>Movie deta</button>
                </div>
              </div>
            );
          })}
          </div>
        </>
      )}

      {/* Show movie details if a movie is selected */}
      {selectedMovie && (
        <div ClassName="card" style={{ width: "18rem" }}>
          <h1>Movie Name:-{selectedMovie.Title}</h1>
          <h2>Release Year:-{selectedMovie.Year}</h2>
          <h3>Type:-{selectedMovie.Type}</h3>
          <img src={selectedMovie.Poster} alt="Movie Poster" />
          <button className="btn btn-primary" onClick={closeMovieDetails}> Close Movie Details </button>
        </div>
      )}
    </>
  );
}

export default MyApp;
