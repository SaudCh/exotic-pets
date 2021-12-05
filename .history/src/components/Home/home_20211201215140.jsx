import React from "react";
import "./css/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <div className="search">
        <h3>EXOTIC PETS & ACCESSORIES</h3>
        <p>BUY & SELL | PETS MARKETPLACE | PAKISTAN</p>
        <form className="form" action="">
          <input placeholder="What ?" type="text" className="border" />
          <input placeholder={"Where ?"} type="text" className="border" />
          <button className="btn btn-success px-4">
            <FontAwesomeIcon icon={faSearch} />
            Find
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
