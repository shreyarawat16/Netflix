import React, { useState, useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const navigate= useNavigate();
  const {id}= useParams();
  const [apiData, setApiData]= useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2EyZmJjMDkwNjg5OWE5NjM5OGRmZDQ2YzRlYzAxMiIsIm5iZiI6MTc1MDYwNTAxMC4wNzcsInN1YiI6IjY4NTgxY2QyMmJhM2Q3MjU4ZGNiNGUzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIaIPFFtGFrNBlYMgT1IyZtyWitYYA9LX9EUge_4ve4'
  }
};
useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

}, )

  return (
    <div className="player">
      <img src={back_arrow_icon} onClick={()=> {navigate(-2)}} ></img>
      <iframe width="90%" height= "90%" src={`https://www.youtube.com/embed/${apiData.key}`}
       title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type} </p>
      </div>
    </div>
  )
}

export default Player