import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import loginReducer from "./loginSlice";
import preEnquiryReducer from "./preEnquirySlice";
import sideMenuReducer from "./sideMenuSlice";
import homeReducer from "./homeSlice";
import mytaskReducer from "./mytaskSlice";
import notificationReducer from "./notificationSlice";
import complaintsReducer from "./complaintsSlice";
import routeReducer from "./routeSlice";
import digitalPaymentReducer from "./digitalPaymentSlice";
import addDigitalPaymentReducer from "../scenes/mainScenes/EMS/addDigitalPayment";

const reducer = combineReducers({
  routeReducer,
  loginReducer: loginReducer,
  preEnquiryReducer: preEnquiryReducer,
  sideMenuReducer,
  homeReducer,
  mytaskReducer,
  notificationReducer,
  complaintsReducer,
  digitalPaymentReducer,
  addDigitalPaymentReducer,
});

const store = configureStore({
  reducer,
});

export default store;
