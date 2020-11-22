import React from "react"
import NavbarComponent from "./Navbar";
import ListOfTestimonials from "./ListOfTestimonials";
import AddTestimony from "./AddTestimony";
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"

function TestimonialComponentHandler() {
    return (
        <Router>
            <div>
                <NavbarComponent />
                <Route exact path="/" component={ListOfTestimonials} />
                <Route path="/addtestimony" component={AddTestimony}/>
            </div>
        </Router>
    )
}

export default TestimonialComponentHandler