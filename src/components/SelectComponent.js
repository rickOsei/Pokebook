import { useState } from "react";

import { FiChevronDown } from "react-icons/fi";

const SelectComponent = ({ itemsPerPage, setItemsPerPage }) => {
  const options = [8, 12, 24];
  const [isOpen, setIsOpen] = useState(false);
  // const [itemsPerPage, setItemsPerPage] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setItemsPerPage(value);
    setIsOpen(false);
    console.log(itemsPerPage);
  };

  return (
    <article>
      <div className="dropdown-container">
        <div className="dropdown-header-icon">
          <div onClick={toggling} className="dropdown-header">
            {itemsPerPage || 8}
          </div>
          <FiChevronDown />
        </div>
        {isOpen && (
          <div className="dropdown-list-container">
            <ul className="dropdownlist">
              {options.map((option) => (
                <li
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                  className="listItem"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};

export default SelectComponent;
