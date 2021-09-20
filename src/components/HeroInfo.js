import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getApi from "../services/getApi";

const HeroInfo = () => {
  const [hero, setHero] = useState();
  const { id } = useParams();

  useEffect(() => {
    getApi(`${id}`).then((data) => {
      setHero(data);
      console.log(hero);
    });
  }, [id]);

  return (
    <div>
      <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
        <div className="card">
          {/* <img src={hero.image.url} alt={hero.name} className="card-img-top" /> */}
          <div className="card-body">
            {/* <h5 className="card-title">{hero.name}</h5> */}
            {/* <p className="card-title">{hero.id}</p> */}
            {/* <h5 className="card-title">{hero.work.occupation}</h5> */}
            <p className="text-center mb-0">
              <button
                //   onClick={() => addToTeam(hero)}
                className="btn btn-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-plus-lg"
                  viewBox="0 0 18 16"
                >
                  <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                </svg>
                &nbsp;Add hero
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
