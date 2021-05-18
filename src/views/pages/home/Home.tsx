import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./Home.scss";

const Home: React.FC = () => {
  const [searchPlace, setSearchPlace] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const handleClick = () => console.log("Hello World");
  return (
    <div className="pageContainer">
      <h1>Feed Me</h1>
      <div className="search">
        <input
          type="text"
          className="searchBox"
          value={searchPlace}
          placeholder="Type your location here"
          onChange={(e) => setSearchPlace(e.target.value)}
          disabled={isSearching}
        ></input>
      </div>
      <Link
        to={`/result/${searchPlace}`}
        className={classnames(
          "btn btn-dark btn-lg shadow-none",
          "searchButton"
        )}
        aria-label="search-button"
        onClick={handleClick}
      >
        Find Me Food
      </Link>
      <Link
        to="/login"
        className={classnames("btn btn-link shadow-none", "signInLink")}
        aria-label="sign-in-link"
        onClick={handleClick}
      >
        Not searching for food ? Be our partner!
      </Link>
    </div>
  );
};

export default Home;
