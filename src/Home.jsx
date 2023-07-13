import React, { useState } from 'react'
import News from './News'
import "./Home.css"

export const Home = (props) => {


  const [newsCountry, setNewsCountry] = useState("in");
  const [newsGenre, setNewsGenre] = useState("general");
  const [key, setKey] = useState(newsCountry + newsGenre);

  const handleGenreSelection = async (genre) => {
    setNewsGenre(genre);
    setKey(newsCountry + newsGenre);
  }

  const handleCountrySelection = async (country) => {
    setNewsCountry(country);
    setKey(newsCountry + newsGenre);
  }




  return (
    <>
      <div className="newsNavigation">
        <div className="genreNavigation">
          <h5>News Category: </h5>
          <ul>
            <li><button onClick={() => { handleGenreSelection("general") }} style={{ backgroundColor: newsGenre === "general" ? "white" : "black", color: newsGenre === "general" ? "black" : "white" }}>General</button></li>
            <li><button onClick={() => { handleGenreSelection("business") }} style={{ backgroundColor: newsGenre === "business" ? "white" : "black", color: newsGenre === "business" ? "black" : "white" }}>Business</button></li>
            <li><button onClick={() => { handleGenreSelection("entertainment") }} style={{ backgroundColor: newsGenre === "entertainment" ? "white" : "black", color: newsGenre === "entertainment" ? "black" : "white" }}>Entertainment</button></li>
            <li><button onClick={() => { handleGenreSelection("health") }} style={{ backgroundColor: newsGenre === "health" ? "white" : "black", color: newsGenre === "health" ? "black" : "white" }}>Health</button></li>
            <li><button onClick={() => { handleGenreSelection("sports") }} style={{ backgroundColor: newsGenre === "sports" ? "white" : "black", color: newsGenre === "sports" ? "black" : "white" }}>Sports</button></li>
            <li><button onClick={() => { handleGenreSelection("science") }} style={{ backgroundColor: newsGenre === "science" ? "white" : "black", color: newsGenre === "science" ? "black" : "white" }}>Science</button></li>
            <li><button onClick={() => { handleGenreSelection("technology") }} style={{ backgroundColor: newsGenre === "technology" ? "white" : "black", color: newsGenre === "technology" ? "black" : "white" }}>Technology</button></li>
          </ul>
        </div>

        <div className='countryNavigation'>
          <h5>Country: </h5>
          <ul>
            <li><button onClick={() => { handleCountrySelection("in") }} style={{ backgroundColor: newsCountry === "in" ? "white" : "black", color: newsCountry === "in" ? "black" : "white" }}>India</button></li>
            <li><button onClick={() => { handleCountrySelection("ca") }} style={{ backgroundColor: newsCountry === "ca" ? "white" : "black", color: newsCountry === "ca" ? "black" : "white" }}>Canada</button></li>
            <li><button onClick={() => { handleCountrySelection("cn") }} style={{ backgroundColor: newsCountry === "cn" ? "white" : "black", color: newsCountry === "cn" ? "black" : "white" }}>China</button></li>
            <li><button onClick={() => { handleCountrySelection("de") }} style={{ backgroundColor: newsCountry === "de" ? "white" : "black", color: newsCountry === "de" ? "black" : "white" }}>Germany</button></li>
            <li><button onClick={() => { handleCountrySelection("gb") }} style={{ backgroundColor: newsCountry === "gb" ? "white" : "black", color: newsCountry === "gb" ? "black" : "white" }}>UK</button></li>
            <li><button onClick={() => { handleCountrySelection("us") }} style={{ backgroundColor: newsCountry === "us" ? "white" : "black", color: newsCountry === "us" ? "black" : "white" }}>USA</button></li>

          </ul>
        </div>
      </div>
      <News apiKey={props.apiKey} setProgress={props.setProgress} key={key} newsGenre={newsGenre} pageSize={"15"} newsCountry={newsCountry} />
    </>
  )
}


export default Home;