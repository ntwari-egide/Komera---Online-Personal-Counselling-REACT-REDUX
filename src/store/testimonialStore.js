import {createStore} from "redux";
import testimonialReducer from "../reducers/testimonialReducer";

const testimonialsStore = createStore(testimonialReducer)

export default testimonialsStore