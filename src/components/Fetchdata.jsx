import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Fetchdata = ({ cat }) => {
  const [Data, setData] = useState("");
  const fetchdata = async () => {
    await axios
      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=5920e87b04a5419b8129823e2e5a9564`
          : "https://newsapi.org/v2/top-headlines?country=us&apiKey=5920e87b04a5419b8129823e2e5a9564"
      )
      .then((response) => setData(response.data.articles));
  };
  useEffect(() => {
    fetchdata();
  }, [cat]);

  return (
    <div className="container my-4 shado">
      <div className="display-3 text-warning fw-bold">HEADLINES</div>
      <div className="my-2 container d-flex justify-content-center align-items-center flex-column my-3">
        {Data
          ? Data.map((items, index) => (
              <>
                <div className="container mt-5 shadow p-3">
                  <h5>{items.title}</h5>
                  <img className="w-75" src={items.urlToImage} alt="Removed" />
                  <p className="text-secondary">{items.description}</p>
                  <p>{items.content}</p>
                  <a href={items.url} target="blank">
                    View more
                  </a>
                </div>
              </>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default Fetchdata;
