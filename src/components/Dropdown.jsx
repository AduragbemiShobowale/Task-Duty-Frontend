import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Dropdown = () => {
  const [options, setOptions] = useState(["Urgent", "Important"]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="border rounded mx-5 position-relative">
      <p className="position-absolute fw-semibold mx-4 mb-4 puddy aTag">Tags</p>
      <div
        className="d-flex align-items-center justify-content-between px-5 py-1"
        onClick={toggleDropdown}
      >
        <div className="d-flex gap-3 justify-content-center align-items-center">
          <p className="m-0 px-1 py-1 rounded tags">{selectedOption || 'Select a Tag'}</p>
        </div>
        <div>
          <MdOutlineKeyboardArrowDown
            className="fs-1"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s ease-in-out",
            }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-options-container">
          <ul className="dropdown-options py-3 px-5 w-100 rounded-2 position-absolute top-100 mt-4 border">
            {options.map((option) => (
              <li key={option} onClick={() => handleOption(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default Dropdown;
