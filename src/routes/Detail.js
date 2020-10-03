import React from "react";

function Detail({ history, location: { state } }) {
  state ?? history.push("/");
  return <span>{state.title}</span>;
}

export default Detail;
