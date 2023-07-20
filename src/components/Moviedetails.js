import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import '../homepage.css';


function Moviedetails(){
    const { imdbID }=useParams();
    const [moviedetail,setMoviedetail]=useState(null);

    useEffect(()=>{
        axios
        .get(`https://www.omdbapi.com/?i=${ imdbID }&apikey=4a3b711b`)
        .then((response)=>
            setMoviedetail(response.data));
    },[imdbID]);
    if(!moviedetail){
        return <div>Loading data...</div>;
    }

    return(
        <div className="App2">
            <div className="card2">
            <h1>Movie Title :<br></br>{moviedetail.Title}</h1>
            <img src={moviedetail.Poster} alt={moviedetail.Title} width={"300px"}height={"400px"}/>
           <h2> <p>Actors : {moviedetail.Actors}<br></br></p></h2>
           <h2> <p>Year : {moviedetail.Year}<br></br></p></h2>
           <h2> <p>Language : {moviedetail.Language}<br></br></p></h2>
           <h2> <p>Plot : {moviedetail.Plot}</p></h2>
           <div className="button"></div>
           <div className="button">
           <Link to="/">
                <button  style={{color:"black"}}type="submit" >click here to go back</button>
              </Link></div></div>
        </div>
    );

}
export default Moviedetails;
