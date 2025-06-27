import React, {useRef, useEffect, useState} from 'react'
import './TitleCards.css'
import {Link} from 'react-router-dom'

const TitleCards = ({title, category}) => {
  const [apiData, setApiData]= useState([]);
  
  const cardsRef= useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2EyZmJjMDkwNjg5OWE5NjM5OGRmZDQ2YzRlYzAxMiIsIm5iZiI6MTc1MDYwNTAxMC4wNzcsInN1YiI6IjY4NTgxY2QyMmJhM2Q3MjU4ZGNiNGUzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIaIPFFtGFrNBlYMgT1IyZtyWitYYA9LX9EUge_4ve4'
  }
};



  const handleWheel = (event)=>{
     event.preventDefault();
     cardsRef.current.scrollLeft += event.deltaX;
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category ? category: "now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
  }, );
  
  return (
    <div className="titlecards">
    <h2>{title ? title: "Popular on Netflix"} </h2>
    <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}></img>
            <p>{card.original_title}</p>
          </Link>
      })}
    </div>
    </div>
  )
}

export default TitleCards