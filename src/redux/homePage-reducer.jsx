const SET_DATA_NOTES = "SET-DATA-NOTES";
const SET_INPUT_VALUE = "SET_INPUT_VALUE";
const SET_DATA_NOTE = "SET_DATA_NOTE";

const initialState = {
  notes: [],
  oneNotes: "",
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_NOTES:
      return {
        ...state,
        notes: action.data,
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.text,
      };
    case SET_DATA_NOTE:
      return {
        ...state,
        oneNotes: action.data,
      };

    default:
      return state;
  }
};
export default homePageReducer;

export const setDataNotes = (data) => {
  return {
    type: SET_DATA_NOTES,
    data,
  };
};
export const setInputValue = (text) => {
  return {
    type: SET_INPUT_VALUE,
    text,
  };
};
export const setDataName = (data) => {
  return {
    type: SET_DATA_NOTE,
    data,
  };
};
