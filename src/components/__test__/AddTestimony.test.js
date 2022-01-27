import { fireEvent, render, screen } from '@testing-library/react';
import AddTestimony from '../AddTestimony';
import {Provider} from "react-redux";
import testimonialsStore from "../../store/testimonialStore";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom"

describe('AddTestimony', ()=>{

  test('should render input testmony', () => {
    render(<Provider store={testimonialsStore}  > 
       <Router>
              <AddTestimony />
              </Router>
            </Provider>);
    const headingElement = screen.getByRole('heading', {name:/Add testimony/i}); 
    const placeholderElement = screen.getByPlaceholderText(/Enter your full name/i);
    expect(headingElement).toBeInTheDocument();
    expect(placeholderElement).toBeInTheDocument();
  })


  test('should be able to type in input', () => {
    render(<Provider store={testimonialsStore}  > 
       <Router>
              <AddTestimony />
              </Router>
            </Provider>);
    const inputElements = screen.getByPlaceholderText(/Enter your full name/i);
    fireEvent.change(inputElements, { target:{value:"Gahamanyi yvette"} })
        expect(inputElements.value).toBe("Gahamanyi yvette");
  })

  test('should add new testimony when "post testumony" clicked', () => {
    render(<Provider store={testimonialsStore}  > 
       <Router>
              <AddTestimony />
              </Router>
            </Provider>);
    const fullNameElement = screen.getByPlaceholderText(/Enter your full name/i);
    fireEvent.change(fullNameElement, { target:{value:"Gahamanyi yvette"} })
    const titleElement = screen.getByPlaceholderText(/Enter your full name/i);
    fireEvent.change(titleElement, { target:{value:"disoder"} })
    const testmonyElement = screen.getByPlaceholderText(/Enter your full name/i);
    fireEvent.change(testmonyElement, { target:{value:"disoder must be avoided this is my testmony"} })
    const postButtonElement = screen.getByRole("button",{name:/Post Testimony/i})
    fireEvent.click(postButtonElement);
    //to be continued
  })
})
