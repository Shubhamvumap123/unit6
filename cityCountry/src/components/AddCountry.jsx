import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const AddCountry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Country, setCountry] = useState({
    country: "",
  });

  const changeHandler = (event) => {
    event.preventDefault();
    setCountry({
      ...Country,
      [event.target.name]: event.target.value,
    });
  };
 
  const clickHandler = (event) => {
    event.preventDefault();
    const payload = Country;
    axios.post("http://localhost:8000/country", payload).then(({ data }) => {
      // console.log("data",data)
      // dispatch(addACountry(data))
      navigate("/");
    });
  };

  return (
    <div>
      <input
        type="text"
        name="country"
        placeholder="Add a country"
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>Add</button>
    </div>
  );
};
