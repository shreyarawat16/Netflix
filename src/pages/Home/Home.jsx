import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import TitleCards from '../../components/TitleCards/TitleCards'
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import playIcon from '../../assets/Play_icon.png'
import infoIcon from '../../assets/Info_icon.png'
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={heroBanner} className="banner-img"></img>
        <div className="hero-caption">
            <img src={heroTitle} className="caption-img"/>
            <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
       
            <div className="hero-btns">
                <button className="btn"><img src={playIcon} ></img>Play</button>
                <button className="btn dark-btn"><img src={infoIcon}></img>More Info</button>
            </div>
            <div className="title-cards"><TitleCards/></div>
          
       </div> 
      

     </div>
       <div className="more-cards">
        <TitleCards title="Blockbuster movies" category={"popular"}/>
        <TitleCards title="Only on Netflix" category={"top_rated"}/>
        <TitleCards title="Top Picks for you" category ={"upcoming"}/>
        <TitleCards title="Upcoming" category={"now_playing"}/>
       </div>
       <Footer/>
    </div>
  )
}

export default Home