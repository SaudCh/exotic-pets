import React from "react";
import { Link } from "react-router-dom";

export default function AdsCard(props) {
  const { res } = props;
  return (
    <div class="card col-3">
      <img src={res.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{res.name}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link href="#" class="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}
