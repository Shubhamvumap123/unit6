import axios from "axios";

export const ADD_CITY = "ADD_CITY";

export const addCity = (data) => {
  return {
    type: ADD_CITY,
    payload: data,
  };
};

export const getAllCity = () => async (dispatch) => {
  axios.get("http://localhost:8000/cities").then(({ data }) => {
    dispatch(addCity(data));
  });
};
