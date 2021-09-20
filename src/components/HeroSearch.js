import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getApi from "../services/getApi";

const HeroSearch = () => {
  const [search, setSearch] = useState();
  const { id } = useParams();

  useEffect(() => {
    getApi(`id/${id}.json`).then((data) => {
      setSearch(data);
      console.log(data);
    });
  }, [id]);

  return (
    <div>
      hola
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <img
                src={hero.images.lg}
                alt={hero.images.sm}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <p className="card-text ">
                  Intelligence:
                  <span className="badge bg-secondary">
                    {hero.powerstats.intelligence}
                  </span>
                  <br></br>
                  Strength:
                  <span className="badge bg-secondary">
                    {hero.powerstats.strength}
                  </span>
                  <br></br>
                  Speed:
                  <span className="badge bg-secondary">
                    {hero.powerstats.speed}
                  </span>
                  <br></br>
                  Durability:
                  <span className="badge bg-secondary">
                    {hero.powerstats.durability}
                  </span>
                  <br></br>
                  Power:
                  <span className="badge bg-secondary">
                    {hero.powerstats.power}
                  </span>
                  <br></br>
                  Combat:
                  <span className="badge bg-secondary">
                    {hero.powerstats.combat}
                  </span>
                </p>
                <p className="text-center mb-0"></p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSearch;
