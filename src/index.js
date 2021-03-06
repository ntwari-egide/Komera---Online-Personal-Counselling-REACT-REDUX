// import testimonialsStore from "./store/testimonialStore";
// import * as testimonialActions from "./actions/testimonialActions"
//
// testimonialsStore.subscribe(() => {
//     console.log("Testimonial store changed !",testimonialsStore.getState())
// })
//
// let addTestimonialPayload = {
//     OwnerFullName: "ntwari egide",
//     OwnerId: 1,
//     testimonialType: "illiness",
//     testimonialTitle: "23 Years On Bed",
//     testimonialBody: "Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility."
// }
//
// let getTestimonialPayload = {
//     id : 1
// }
//
// let updateTestimonialPayload = {
//     id: 1,
//     testimonialType: "updated type",
//     testimonialTitle: "25 years of sickness",
//     testimonialBody: "My new updated sickness description"
// }
//
// let deleteTestimonialPayload = {
//     id: 1
// }
//
// let likeTestimonialPayload = {
//     id: 1,
//     OwnerId: 1
// }
//
// let dislikeTestimonialPayload =  {
//     id: 1
// }
//
// testimonialsStore.dispatch(testimonialActions.addTestimonial(addTestimonialPayload))
// testimonialsStore.dispatch(testimonialActions.addTestimonial(addTestimonialPayload))
//
// testimonialsStore.dispatch(testimonialActions.getAllTestimonials())
//
// testimonialsStore.dispatch(testimonialActions.getTestimonial(getTestimonialPayload))
//
// testimonialsStore.dispatch(testimonialActions.updateTestimonial(updateTestimonialPayload))
//
// testimonialsStore.dispatch(testimonialActions.likeTestimonial(likeTestimonialPayload))
//
// testimonialsStore.dispatch(testimonialActions.dislikeTestimonial(dislikeTestimonialPayload))
//
// testimonialsStore.dispatch(testimonialActions.deleteTestimonial(deleteTestimonialPayload))

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


