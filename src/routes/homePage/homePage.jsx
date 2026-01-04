import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            The Best Place for Renting and Selling Your Properties
          </h1>
          <SearchBar />
        </div>
      </div>
      <div className="imgContainer">
        <img src="/property.png" alt="" />
        <div>SOoo goodd</div>
      </div>
    </div>
  );
};

export default HomePage;
