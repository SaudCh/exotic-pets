import React from "react";
import { getBirds } from "../data/birds";
import AdsCard from "./AdsCard";

export default function Ads() {
  const birds = getBirds();
  return (
    <div className="p-3 container-fluid">
      <div className="row m-3 pt-2 pb-4 border bg-light">
        <h3>Ads</h3>
        {birds.map((res) => (
          <AdsCard res={res} />
        ))}
      </div>
    </div>
  );
}
