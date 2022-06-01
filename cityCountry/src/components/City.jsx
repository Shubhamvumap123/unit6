import { useState, useEffect } from "react";
import axios from "axios";
import { getAllCity } from "../redux/CityAction/action";
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
  return (
    <div>
      <button onClick={clickHandler}>ADD CITY</button>
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
          {Cities.map((e) => {
            return (
              <tr>
                <td>{e.id}</td>
                <td>{e.Country}</td>
                <td>{e.City}</td>
                <td>{e.Population}</td>
                <td>
                  <button>EDIT</button>
                </td>
                <td>
                  <button>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
