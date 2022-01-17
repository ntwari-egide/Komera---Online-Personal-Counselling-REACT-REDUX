import React,{Component,useContext,useReducer,useEffect,useRef,useState} from "react"
import testimonialsStore from "../store/testimonialStore";
import * as actions from "../actions/actionTypes"
import * as testimonialActions from "../actions/testimonialActions"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ListingTestimonials from "./ListingTestimonials";


const Context = React.createContext();

let testimonialBody = {
    OwnerFullName: "ntwari egide",
    OwnerId: 1,
    testimonialType: "illiness",
    testimonialTitle: "23 Years On Bed",
    testimonialBody: "Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility."
}




export function ListOfTestimonials () {
    const testimonialState = () =>{
        return testimonialsStore.getState();
    }

    // console.log(typeof test)

    const myState = useSelector(testimonialState);
    // const myState = (testimonialsStore.getState())
    const dispatch = useDispatch()

    return(
        <Context.Provider value={dispatch}>
            <div className="jumbotron text-center">
                <h1>Testimonies</h1>
                <p>Type below to find the testimony, You can use the filter  below to filter the testimonies given</p>
                <form className="form-inline">
                    <div className="input-group">
                        <input type="text" className="form-control" size="50" placeholder="Testimony type" required />
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-success">filter</button>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <div className="row">
                    <button type="button" className="btn btn-primary" style={{
                        marginLeft: '6vw'
                    }} onClick={ () =>
                            dispatch(testimonialActions.addTestimonial(testimonialBody))
                    }>Add Defined testimonial</button>
                    
                    <Link to="/addtestimony" className="btn btn-info" style={{
                        marginLeft: '5vw'
                    }}>Add testimony</Link>
                </div>
                <div className="container-fluid testimonies mt-6">
                    <h2>Testimonies</h2>
                    <h4>List of new testimonials</h4>
                    <br/>
                    <div className="row">
                    <ListingTestimonials testimonials={myState} />
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
}

export default ListOfTestimonials