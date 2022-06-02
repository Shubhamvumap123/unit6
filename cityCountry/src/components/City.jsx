import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  getAllCity,
  sortData,
  deleteCity,
  filterData,
  updateCity,
} from "../redux/CityAction/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const City = () => {
  const navigate = useNavigate();
  const Cities = useSelector((store) => store.city.city);
  console.log(Cities);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCity());
  }, []);
  const clickHandler = (e) => {
    e.preventDefault();
    navigate("/add-city");
  };
  const filterHandler = (e) => {
    e.preventDefault();
    dispatch(filterData(e.target.value));
  };
  const SortingHandler = (e) => {
    e.preventDefault();
    //console.log(e.target.value)
    dispatch(sortData(e.target.value));
  };
  const editHandler = () => {};
  return (
    <div>
      <button onClick={clickHandler}>ADD CITY</button>
      <input
        type="text"
        placeholder="Enter filter field"
        onChange={filterHandler}
      />
      <select onChange={SortingHandler}>
        <option value="">--Select--</option>
        <option value="ASC">ASC</option>
        <option value="DEC">DEC</option>
      </select>
      <table>
        <thead>
          <tr>
            <td>Serial No</td>
            <td>Country Name</td>
            <td>City</td>
            <td>Population</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {Cities.map((e, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{e.Country}</td>
                <td>{e.City}</td>
                <td>{e.Population}</td>
                <Link to={`/add-city/${e.id}`}>
                  <td>
                    <button>EDIT</button>
                  </td>
                </Link>
                <td>
                  <button
                    onClick={() => {
                      dispatch(deleteCity(e.id));
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
