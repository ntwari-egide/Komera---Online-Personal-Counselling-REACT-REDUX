import { render, screen } from '@testing-library/react';
import ListingTestimonials from '../ListingTestimonials';
import {Provider} from "react-redux";
import testimonialsStore from "../../store/testimonialStore";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom"

describe('ListingTestimonials', ()=>{

  test('should display at least one testmony', async () => {
    render(<Provider store={testimonialsStore}  > 
       <Router>
              <ListingTestimonials testimonials={[
    {
        id: 1,
        OwnerFullName: "ntwari egide",
        OwnerId: 1,
        testimonialType: "illiness",
        testimonialTitle: "23 Years On Bed",
        testimonialBody: "Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility.",
        views: 1,
        likes: 0,
        dislikes: 0
    },
    {
        id: 2,
        OwnerFullName: "mugisha jules",
        OwnerId: 1,
        testimonialType: "illiness",
        testimonialTitle: "23 Years On Bed",
        testimonialBody: "Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility.",
        views: 1,
        likes: 0,
        dislikes: 0
    }
]} />
              </Router>
            </Provider>);
    const testmonyElements = screen.getAllByTestId("testmony-container");  
    expect(testmonyElements.length).toBeGreaterThan(1);
  })
})