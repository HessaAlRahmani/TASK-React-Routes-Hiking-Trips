import React, { useState } from "react";
import tripsData from "../tripsData";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";
import { useSearchParams } from "react-router-dom";
function TripsList() {
  const [query1, setQuery1] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({ query: "" });
  const trips = tripsData
    .filter(
      (trip) =>
        trip.name.toLowerCase().includes(query1.toLowerCase()) &&
        trip.difficulty.includes(searchParams.get("query"))
    )
    .map((trip) => <TripItem trip={trip} />);

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery1} />
        <center>
          <button
            className="btn btn-primary btn-xl"
            onClick={() => setSearchParams({ query: "easy" })}
          >
            Easy
          </button>
          <button
            className="btn btn-primary btn-xl"
            onClick={() => setSearchParams({ query: "moderate" })}
          >
            Moderate
          </button>
          <button
            className="btn btn-primary btn-xl"
            onClick={() => setSearchParams({ query: "hard" })}
          >
            Hard
          </button>
        </center>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">{trips}</div>
      </div>
    </section>
  );
}

export default TripsList;
