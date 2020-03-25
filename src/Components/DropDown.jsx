import React, { useState, useLayoutEffect } from "react";
import "../Styles/DropDown.less";

function Dropdown({ title, selected, items }) {
  let styleDinamicDiv;
  const [open, setOpen] = useState(false);
  const [chosen, setChosen] = useState(selected);

  useLayoutEffect(() => {
    styleDinamicDiv = document.getElementsByClassName("style--dinamicDiv")[0];
  });

  function closeDropDown() {
    styleDinamicDiv.style.height = "0px";
    setOpen(false);
  }
  
  function openDropDown() {
    styleDinamicDiv.style.height = items.length * 32 + "px";
    setOpen(true);
  }

  function DropDownMenu() {
    open ? closeDropDown() : openDropDown();
  }

  function optionSelected(element) {
    setChosen(element);
    closeDropDown();
  }

  return (
    <div className={`dropdown ${open ? "up" : null}`}>
      <h3>{title}</h3>
      <button className="button" onClick={DropDownMenu}>
        <div>{chosen}</div>
        <div className="chevron"> </div>
      </button>
      <ul className="style--dinamicDiv">
        {items.map(element => (
          <li
            onClick={() => {
              optionSelected(element);
            }}
            className="p--item"
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
