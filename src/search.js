import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Search(){
    const { searchtext }=useParams();
    const [moviedetail,setMoviedetail]=useState(null);

    useEffect(()=>{
        axios
        .get(`https://www.omdbapi.com/?s=${ searchtext }&apikey=4a3b711b`)
        .then((response)=>
            setMoviedetail(response.data));
    },[searchtext]);
    if(!moviedetail){
        return <div>Loading data...</div>;
    }

    return (
        <>
          <div>
            <h1>Movie Details</h1>
            {
              moviedetail.map((movie) => (
                <div key={movie.imdbID}>
                    <h1>{movie.Title}</h1>
                    <div><img src={movie.Poster} alt={movie.Title} /></div>
                  
                </div>
              ))
            }
          </div>
        </>
      );

}
export default Search;
