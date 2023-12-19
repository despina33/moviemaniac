import React from 'react'
import "./App.css"
import Navbar from './components/navbar/Navbar'
import MovieList from './components/movieList/MovieList'
import Fire from "./assets/fire.png"
import Star from "./assets/glowing-star.png"
import Party from "./assets/partying-face.png"

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <MovieList type="popular" title="Popular" emoji={Fire}/>
      <MovieList type="top_rated" title="Top Rated" emoji={Star}/>
      <MovieList type="upcoming" title="Upcoming" emoji={Party}/>
    </div>
  )
}

export default App