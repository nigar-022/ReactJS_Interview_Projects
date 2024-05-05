import React, { useState } from "react";
import { data } from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelectionClick = (getCurrentID) => {
    console.log(getCurrentID);
    setSelected(getCurrentID === selected ? null : getCurrentID);
  };

  const handleMultipleSelection = (getCurrentID) => {
    console.log("clicked");

    let copyMultiple = [...multiple];

    let findIndexOfCurrentId = copyMultiple.indexOf(getCurrentID);
    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentID);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  };
  console.log(multiple);

  return (
    <div className="wrapper">
      <div>
        <button
          className="multiple"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          Enable Multi Selection
        </button>
      </div>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <>
              <div className="item" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSelectionClick(dataItem.id)
                  }
                  className="title"
                >
                  <div>{dataItem.question}</div>
                  <span>{selected === dataItem.id ? "-" : "+"}</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="answer">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="answer">{dataItem.answer}</div>
                    )}
              </div>
            </>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
