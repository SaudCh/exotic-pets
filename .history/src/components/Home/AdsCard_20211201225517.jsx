import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function AdsCard(props) {
  const { res } = props;
  return (
    <div class="card col-3">
      <img
        src={res.img}
        class="card-img-top"
        style={{ height: "200px", width: "auto" }}
        alt="..."
      />
      <div class="card-body">
        <h5 style={{ height: "45px" }} class="card-title">
          {res.name}
        </h5>
        <p class="card-text">
          <FontAwesomeIcon icon={faClock} />
          &#160;
          {res.time}
          &#160;
          <FontAwesomeIcon icon={faFolder} />
          &#160;
          {res.category}
          &#160;
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          &#160;
          {res.location}
        </p>

        <Link href="#" class="btn btn-primary">
          Save
        </Link>
      </div>
    </div>
  );
}
