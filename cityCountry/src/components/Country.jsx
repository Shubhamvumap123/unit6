import { useState, useEffect } from "react";
import axios from "axios";
import { getAllCountry } from "../redux/CountryAction/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Country = () => {
  const Countries = useSelector((store) => store.country.country);
  //console.log(Countries)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllCountry());
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          navigate("/add-country");
        }}
      >
        ADD COUNTRY
      </button>
      <table>
        <thead>
          <tr>
            <td>Serial No</td>
            <td>Country Name</td>
          </tr>
        </thead>
        <tbody>
          {Countries.map((e) => {
            return (
              <tr>
                <td>{e.id}</td>
                <td>{e.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
