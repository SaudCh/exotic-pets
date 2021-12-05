import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Form(props) {
  return (
    <div>
      <form className="search-form my-4">
        <div className="col-3">
          <select
            onChange={(e) => props.location(e)}
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Location</option>
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
          </select>
        </div>
        <div class="col-6">
          <input type="text" class="form-control" id="query" disabled />
        </div>
        <div className="col-1">
          <button className="btn btn-success">
            <FontAwesomeIcon icon={faSearch} />
            Find
          </button>
        </div>
      </form>
    </div>
  );
}
