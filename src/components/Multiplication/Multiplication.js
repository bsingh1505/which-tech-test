import React, { useState } from "react";
import "./Multiplication.css";

const MULTIPLICATIONS_UPTO = 144;

const Multiplication = ({ multiplicationsUpto = MULTIPLICATIONS_UPTO }) => {
  const numberToArray = Array.from(Array(multiplicationsUpto).keys());
  const [selectedItem, setSelectedItem] = useState(1);

  const handleItemClick = (clickedItem) => {
    setSelectedItem(clickedItem);
  };

  const applyClass = (currentNumber) => {
    const isMultiple = currentNumber % selectedItem === 0;
    return isMultiple ? `Item Item-selected` : `Item`;
  };

  return (
    <>
      <ul className="Container">
        {numberToArray.map((item) => {
          const currentNumber = item + 1;
          return (
            <li
              key={`key-${currentNumber}`}
              data-testid={"list-item"}
              className={applyClass(currentNumber)}
              onClick={() => handleItemClick(currentNumber)}
            >
              {currentNumber}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Multiplication;
