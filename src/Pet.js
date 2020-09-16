import React from "react";
import { Link } from "@reach/router";
import {useFeatureData} from "./feature/FeatureContext";
import {toggleThemeClassWithFeatures } from './feature/ThemeFeature';

const Pet = props => {
  const { name, animal, breed, media, location, id } = props;
  const [features,] = useFeatureData();
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className={toggleThemeClassWithFeatures((features),"pet-hw","pet")}>
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className={toggleThemeClassWithFeatures((features),"info-hw","info")}>
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
