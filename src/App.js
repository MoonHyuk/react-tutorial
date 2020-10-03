import React from "react";
import axios from "axios";
import Movie from "./Movie";

import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  fetchMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");

    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div>
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default App;
