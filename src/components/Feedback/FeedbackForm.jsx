import React from "react";
import GoToTop from "../others/MoveToTop";
import "./FeedbackForm.css";
export const FeedbackForm = () => {
  function submitForm(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h2>Share your Feedback</h2>
      <h3 className="feedback-heading">
        We love to hear about our doctors, facilities and your treatment at Yogm
        hospital. Provide genuine feedback so that we can improve ourself.
      </h3>
      <form onSubmit={submitForm} className="feedback-form">
        <label>
          <h2>Your valuable feedback</h2>
          <textarea placeholder="Feedback text..." />
        </label>
        <label>
          Give us Rating
          <input type="number" placeholder="Rating 1 to 5" min={1} max="5" />
        </label>
        <label>
          Date of Visit:
          <input type="Date" min="2022-03-01" />
        </label>
        <label>
          Patient Id:
          <input type="text" placeholder="Patient Id" />
        </label>
        <div className="feedback-hr"></div>
        <h3>Provide details if you want feedback from us.</h3>
        <label>
          Name of Patient:
          <input type="text" name="name" placeholder="Name of patient" />
        </label>
        <label>
          Mobile Number:
          <input typemode="numeric" placeholder="Mobile Number" />
        </label>
        <label>
          Email Id:
          <input type="email" placeholder="Email " />
        </label>
        <input type="submit" value="Submit Feedback" />
      </form>
      <GoToTop />
    </div>
  );
};
