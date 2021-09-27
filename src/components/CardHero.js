import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/Images";

const CardHero = ({ info, action, icon }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
      <div className="card">
        <img src={info.image?.url} alt={info.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{info.name}</h5>
        </div>

        <div className="btn-group " role="group">
          <button onClick={() => action(info)} className="btn btn-secondary">
            <img src={icon} alt="button" />
          </button>
          <Link to={info.id} className="btn btn-primary">
            <img src={Images.info} alt="button" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardHero;
