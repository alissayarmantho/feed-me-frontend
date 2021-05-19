import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import classnames from "classnames";
import "./Home.scss";

const Home: React.FC = () => {
  const [searchPlace, setSearchPlace] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const handleSearch = () => history.push(`/result/${searchPlace}`);
  const history = useHistory();
  const onKeyPress = (e: any) => (e.key === "Enter" ? handleSearch() : {});
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
          onKeyPress={onKeyPress}
        ></input>
      </div>
      <Button
        type="button"
        className={classnames(
          "btn btn-dark btn-lg shadow-none",
          "searchButton"
        )}
        aria-label="search-button"
        onClick={handleSearch}
      >
        Find Me Food
      </Button>
      <Link
        to="/login"
        className={classnames("btn btn-link shadow-none", "signInLink")}
        aria-label="sign-in-link"
      >
        Not searching for food ? Be our partner!
      </Link>
    </div>
  );
};

export default Home;
