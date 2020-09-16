import React, { useEffect, useState } from "react";
import { toggleLocal } from "./feature/FeatureApi";
import { useFeatureData } from "./feature/FeatureContext";
import { petTextKey, isPetTextEnabled } from "./feature/PetTextFeature";
import Modal from "./Modal";
import Feedback from "./Feedback";

function ResultTextToggle() {
  const [features, refreshFeatures] = useFeatureData();
  const [isEnabled, setIsEnabled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = e => {
    toggleLocal(petTextKey());
    refreshFeatures();

    if (e.target.checked === false) {
      setShowModal(true);
    }
  };

  useEffect(() => {
    if (features) {
      let isEnabled = isPetTextEnabled(features);
      setIsEnabled(isEnabled);
    }
  }, [features]);

  return (
    <div className="search-toggle">
      {showModal ? (
        <Modal>
          <Feedback
            featureId={petTextKey()}
            closeModal={() => setShowModal(false)}
          />
          <div className="buttons">
            <button
              className="close-modal-button"
              onClick={() => setShowModal(false)}
            >
              close
            </button>
          </div>
        </Modal>
      ) : null}
      <label htmlFor="toggleResultText">
        <input
          id="toggleResultText"
          type="checkbox"
          checked={isEnabled}
          onChange={e => handleChange(e)}
        />
        Use New Result Text?
      </label>
    </div>
  );
}

export default ResultTextToggle;
