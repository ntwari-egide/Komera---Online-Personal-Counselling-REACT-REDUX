import { fireEvent, render, screen } from '@testing-library/react';
import ListOfTestimonials from '../ListOfTestimonials';
import {Provider} from "react-redux";
import testimonialsStore from "../../store/testimonialStore";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom"


describe('ListOfTestimonials', () => {
    test('should render input testmony', () => {
        render(<Provider store={testimonialsStore}  > 
           <Router>
                  <ListOfTestimonials />
                  </Router>
                </Provider>);
        const buttonElement = screen.getByRole('button', {name:/Add Defined testimonial/i}); 
        fireEvent.click(buttonElement);

        const divElement = screen.getAllByText(/23 Years On Bed/i)
        expect(buttonElement).toBeInTheDocument();
        expect(divElement.length).toBeGreaterThan(2);
      });
      
});
