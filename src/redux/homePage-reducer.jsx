const SET_DATA_NOTES = "SET-DATA-NOTES";
const SET_INPUT_VALUE = "SET_INPUT_VALUE";
const SET_DATA_NOTE = "SET_DATA_NOTE";
const TOGGEL_IS_FETCHING = "TOGGEL_IS_FETCHING";

const initialState = {
  notes: [],
  oneNotes: "",
  isFetching: "en",
  en: {
    inputName: {
      title: "Take your notes",
      placeHolder: "Take your notes",
      btn: "Add",
    },
    tableName: {
      notes: "Your notes",
      actions: "Action",
    },
    tableValue: {
      action: {
        edit: "Edit",
        delete: "Delete",
      },
    },
  },
  ru: {
    inputName: {
      title: "Делайте ваши заметки",
      placeHolder: "Делайте ваши заметки",
      btn: "Добавить",
    },
    tableName: {
      notes: "Ваши заметки",
      actions: "Действие",
    },
    tableValue: {
      action: {
        edit: "Изменить",
        delete: "Удалить",
      },
    },
  },
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
    case TOGGEL_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
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
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGEL_IS_FETCHING,
    isFetching,
  };
};
