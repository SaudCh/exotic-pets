import React from "react";

export default function Description() {
  return (
    <div className="mt-3">
      <div className="p-0 m-0 me-1 border-bottom ">
        <p
          className="bg-white mx-0 mt-0 p-0 px-1 border rounded-top border-bottom-0"
          style={{ marginBottom: "-1px", width: 80 }}
        >
          Ad Detail
        </p>
      </div>
      <div
        style={{ height: 100 }}
        className="bg-white border border-top-0 rounded-bottom rounded-end"
      >
        <div>
          <div></div>
          <div></div>
        </div>
        <hr className="m-0 p-0" />
        <p className="bg-light border rounded mx-1 ">Description</p>
      </div>
    </div>
  );
}
