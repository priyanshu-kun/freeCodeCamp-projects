import React from "react";
import Review from "./review";
import "./styles.css";

export default function App() {
  return (
    <main className="App">
      <section className="container">
        <h2>Our Reviews</h2>
        <div className="underline"></div>
      </section>
      <Review />
    </main>
  );
}
