import { useState } from "react";

export default function AvailabilityFilter({ setAvailability }) {
  const filterByAvailability = () => {
    setAvailability((availability) => !availability);
  };

  return (
    <div>
      <label htmlFor="available">Show only Available </label>
      <input
        type="checkbox"
        className="available-checkbox"
        name="checkbox"
        onChange={filterByAvailability}
      />
    </div>
  );
}
