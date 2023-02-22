import React, { useState } from "react";

function SearchPosts(props) {
  const { onSearch } = props;
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex items-center">
      <svg
        className="mr-2 h-6 w-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 18.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22 22L15.5 15.5"
        ></path>
      </svg>
      <input
        type="text"
        className="w-full rounded-md border border-gray-400 py-2 px-3 text-gray-800"
        placeholder="Search by title or content"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchPosts;
