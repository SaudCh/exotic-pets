import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function index() {
  return (
    <div>
      <form
        className="col-11 col-sm-6 p-4 border bg-light"
        style={{ margin: "50px auto" }}
      >
        <h4 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faUserPlus} /> Create your account, It's 100%
          free
        </h4>
        <div class="form-group mb-3">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group mb-3">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group mb-3">
          <label for="phoneNumber">Phone Number</label>
          <input
            type="text"
            class="form-control"
            id="phoneNumber"
            aria-describedby="emailHelp"
            placeholder="Phone Number"
          />
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group mb-3">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
