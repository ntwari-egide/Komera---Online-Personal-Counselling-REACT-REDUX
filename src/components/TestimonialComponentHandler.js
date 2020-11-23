import React from "react"
import NavbarComponent from "./Navbar";
import ListOfTestimonials from "./ListOfTestimonials";
import AddTestimony from "./AddTestimony";
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"
import EditTestimonial from "./EditTestimonial";

function TestimonialComponentHandler() {
    return (
        <Router>
            <div className="App">
                <NavbarComponent />
                <Route exact path="/" component={ListOfTestimonials} />
                <Route path="/addtestimony" component={AddTestimony}/>
                <Route path="/edit-testimony" component={EditTestimonial}/>
            </div>
        </Router>
    )
}

export default TestimonialComponentHandler