import { ADD_CITY, SORTDATA, DELETECITY, FILTERDATA } from "./action";

const init = {
  city: [],
};

export const CityReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_CITY:
      return { ...store, city: payload };
    case SORTDATA:
      return {
        ...store,
        city: [...store.city].sort((a, b) => {
          if (payload === "ASC") {
            return a.Population - b.Population;
          } else if (payload === "DEC") {
            return b.Population - a.Population;
          } else {
            return a.id - b.id;
          }
        }),
      };
    case DELETECITY:
      return { ...store, city: [...store.city].filter((e) => e.id != payload) };
    case FILTERDATA:
      return {
        ...store,
        city: store.city.filter((e) => e.Country.includes(payload)),
      };
    default:
      return { ...store };
  }
};
