import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1>{isLoading ? "Loading..." : "Done"}</h1>
      </div>
    );
  }
}

export default App;
