const initialStore = {
  data: "only for testing the redux with the react",
  appointmentButton: "block",
  loggedInUser: {},
  isLoggedIn: false,
};

const rootReducer = (store = initialStore, action) => {
  if ((action.type = "appointment-btn-status")) {
    return { ...store, appointmentButton: action.payload || "block" };
  } else if ((action.type = "loggedin")) {
    return { ...store, loggedInUser: action.payload, isLoggedIn: true };
  } else {
    return { ...store };
  }
};

export default rootReducer;
