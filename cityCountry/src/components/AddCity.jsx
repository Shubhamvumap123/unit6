import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const AddCity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [City, setCity] = useState({
    Country: "",
    City: "",
    Population: "",
  });

  const changeHandler = (event) => {
    event.preventDefault();
    setCity({
      ...City,
      [event.target.name]: [event.target.value],
    });
  };
  const clickHandler = (event) => {
    event.preventDefault();
    const payload = City;
    axios.post("http://localhost:8000/cities", payload).then(({ data }) => {
      // console.log("data",data)
      // dispatch(addACountry(data))
      navigate("/");
    });
  };

  return (
    <div>
      <input
        type="text"
        name="Country"
        placeholder="Add a country"
        onChange={changeHandler}
      />
      <input
        type="text"
        name="City"
        placeholder="Add a city"
        onChange={changeHandler}
      />
      <input
        type="text"
        name="Population"
        placeholder="Add a Population"
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>Add</button>
    </div>
  );
};
