import React from "react";

export default function Description() {
  return (
    <div className="mt-3">
      <div className="p-0 m-0 border-bottom " style={{ marginLeft: "100" }}>
        <p
          className="bg-white p-0 border rounded-top border-bottom-0"
          style={{ marginBottom: "-1px", width: 80 }}
        >
          Ad Detail
        </p>
      </div>
      <div className="bg-white border border-top-0 rounded-bottom rounded-end">
        Description
      </div>
    </div>
  );
}
