import React from "react";

let BtnLanguege = (props) => {
  return (
    <p>
      <button
        onClick={() => {
          props.toggleIsFetching("en");
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          props.toggleIsFetching("ru");
        }}
      >
        Russian
      </button>
    </p>
  );
};

export default BtnLanguege;
