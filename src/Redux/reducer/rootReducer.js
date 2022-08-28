const initialStore = {
  data: "only for testing the redux with the react",
  appointmentButton: "amit",
};

const rootReducer = (store = initialStore, action) => {
  if ((action.type = "appointment-btn-status")) {
    return { ...store, appointmentButton: action.payload || "block" };
  } else {
    return { ...store };
  }
};

export default rootReducer;
