import React from "react";

export default function Card(props) {
  const { data } = props;
  return (
    <div className="card-container">
      <div class="card mb-3 col-11 col-md-5">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="" class="img-fluid rounded-start" alt="" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{data.name}</h5>
              <p class="card-text">{data.desc}</p>
              <p class="card-text">
                <small class="text-muted">{data.location}</small>
              </p>
              <div className="button-container">
                <button className="btn btn-secondary">Chat</button>
                <button className="btn btn-success">Add to Cart</button>
                <button className="btn btn-warning">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
