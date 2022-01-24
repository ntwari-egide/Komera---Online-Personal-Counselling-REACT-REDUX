import React,{Component,useContext,useReducer,useEffect,useRef,useState} from "react"
import * as actions from "../actions/actionTypes"
import {Link} from "react-router-dom";
export default function Testimonial({...testimonial}){
    // console.log(testimonial)
    
const Context = React.createContext();
    const dispatch =  useContext(Context)
    return (
        <div className="col-sm-3" data-testid="testmony-container" id="testimonials">
            <span className="glyphicon glyphicon-off"></span>
            <h4>{testimonial.testimonialTitle}</h4>
            <p className="testimony-body">{testimonial.testimonialBody}</p>
            <p className="testimony-title">Type: {testimonial.testimonialType}</p>
            <p className="testimony-by text-info">By : {testimonial.OwnerFullName}</p>
            <p className="text-success font-weight-bold">{testimonial.views} views</p>
            <p><span className="text-success align-left">{testimonial.likes} likes </span> <span className="text-danger align-right">{testimonial.dislikes} dislikes</span></p>
            <button type="button" className="btn btn-outline-primary" onClick={()=> dispatch({type: actions.LIKE_TESTIMONIAL,payload: {id: testimonial.id,OwnerId: testimonial.OwnerId}})}>like</button>
            <button style={{marginLeft: '2vw'}} type="button" className="btn btn-outline-primary" onClick={()=> dispatch({type: actions.DISLIKE_TESTIMONIAL,payload: {id: testimonial.id,OwnerId: testimonial.OwnerId}})}>dislike</button>
            <br/><br/><br/>
            <Link className="btn btn-info" to={{pathname: "/edit-testimony",state: testimonial}} >Edit</Link>
            <button style={{marginLeft: '2vw'}} type="button" id="delete" className="btn btn-danger" onClick={() => dispatch({type: actions.DELETE_TESTIMONIAL,payload: {id: testimonial.id}})}>Delete</button>
        </div>
    )
}