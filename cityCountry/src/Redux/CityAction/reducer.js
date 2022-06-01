import { ADD_CITY } from "./action";

const init = {
  city: [],
};

export const CityReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_CITY:
      return { ...store, city: payload };
    default:
      return { ...store };
  }
};
