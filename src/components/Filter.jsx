import React, { useState } from "react";

//filter component
const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  //function to trigger the filter when user clicks
  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="m-1.5 p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="m-1.5 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleFilter}
        className="m-1.5 bg-green-500 text-white px-4 py-2 rounded"
      >
        Filter Movies
      </button>
    </div>
  );
};

export default Filter;
