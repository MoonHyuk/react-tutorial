import React from "react";
import PropTypes from "prop-types";

const movies = [
  {
    id: 1,
    name: "D-war",
    img:
      "https://upload.wikimedia.org/wikipedia/en/9/91/Dragon_Wars_poster.jpg",
    rate: 0.1,
  },
  {
    id: 2,
    name: "Avengers",
    img:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
    rate: 4.0,
  },
  {
    id: 3,
    name: "The Dark Knight",
    img:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    rate: 4.5,
  },
];

function Movie({ name, img, rate }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name}></img>
      <h2>{rate}/5.0</h2>
    </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          name={movie.name}
          img={movie.img}
          rate={movie.rate}
        />
      ))}
    </div>
  );
}

export default App;
