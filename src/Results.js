import React from "react";
import Pet from "./Pet";

import { useFeatureData } from "./feature/FeatureContext";
import { petTextBuilder } from "./feature/PetTextFeature";
import { toggleThemeClassWithFeatures } from "./feature/ThemeFeature";

const Results = ({ pets }) => {
  const [features] = useFeatureData();

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div
      className={toggleThemeClassWithFeatures(features, "search-hw", "search")}
    >
      {!pets.length
        ? petTextBuilder(features)
        : pets.map(pet => {
            return (
              <Pet
                animal={pet.type}
                key={pet.id}
                name={pet.name}
                breed={pet.breeds.primary}
                media={pet.photos}
                location={`${pet.contact.address.city}, ${
                  pet.contact.address.state
                }`}
                id={pet.id}
              />
            );
          })}
    </div>
  );
};

export default Results;
