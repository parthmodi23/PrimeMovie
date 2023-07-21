import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import '../homepage.css';
import '../index.js';


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
            <h3>Movie Title :<br/>{moviedetail.Title}</h3>
           <img className="box" src={moviedetail.Poster} alt={moviedetail.Title}  height={"300px"}/><br/><br/>
           <h2> <p>Actors : {moviedetail.Actors}<br></br></p></h2>
           <h2> <p>Year : {moviedetail.Year}<br></br></p></h2>
           <h2> <p>Language : {moviedetail.Language}<br></br></p></h2>
           <h2> <p>Plot : {moviedetail.Plot}</p></h2>
           
           <div >
           <Link to="/">
                <button className="btn btn-primary btn-lg" type="submit" >Home</button>
              </Link></div></div>
        </div>
    );

}
export default Moviedetails;
