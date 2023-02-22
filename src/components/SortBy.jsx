import { useState } from "react";

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Title (A-Z)", value: "title_asc" },
  { label: "Title (Z-A)", value: "title_desc" },
];

export default function SortBy({ onChange }) {
  const [selectedValue, setSelectedValue] = useState(SORT_OPTIONS[0].value);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">Sort by:</span>
      <select
        className="rounded-md border-gray-300 shadow-sm"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
