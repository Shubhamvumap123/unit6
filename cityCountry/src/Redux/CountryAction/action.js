import axios from "axios";

export const ADD_COUNTRY = "ADD_COUNTRY";

export const addCountry = (data) => {
  return {
    type: ADD_COUNTRY,
    payload: data,
  };
};

export const getAllCountry = () => async (dispatch) => {
  axios.get("http://localhost:8000/country").then(({ data }) => {
    dispatch(addCountry(data));
  });
};
