import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(`http://localhost:8080/data?_page=${page}&_limit=25`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);
  // console.log(data)

  const loadData = () => {
    setPage(page + 1);
  };

  window.onscroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      loadData();
    }
  };

  return (
    <div className="App">
      {data.map((e, i) => {
        return (
          <div key={i}>
            <p>{e.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
