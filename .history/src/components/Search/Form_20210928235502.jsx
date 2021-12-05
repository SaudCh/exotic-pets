import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  return (
    <form className="form" action="">
      <input placeholder="What" type="text" />
      <input placeholder={"Where ?"} type="text" />
      <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch} />
        Find
      </button>
    </form>
  );
}
