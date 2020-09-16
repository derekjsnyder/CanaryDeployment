import React, { useState, useEffect, useContext } from "react";
import { addFeedback } from "./feature/FeatureApi";
const Feedback = props => {
  const [feedback, setFeedback] = useState("");

  function submitFeedback(event) {
    event.preventDefault();
    addFeedback(feedback, props.featureId).then(() => {
      props.closeModal();
    });
  }

  return (
    <div>
      <form
        className="feedback-form"
        id="feedback"
        onSubmit={e => submitFeedback(e)}
      >
        <h1>We would love your feedback</h1>
        <label htmlFor="feedback">
          Please share your experience
          <textarea
            id="feedback"
            rows="4"
            cols="50"
            onChange={e => setFeedback(e.target.value)}
          />
        </label>
        <button type="submit" form="feedback" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
