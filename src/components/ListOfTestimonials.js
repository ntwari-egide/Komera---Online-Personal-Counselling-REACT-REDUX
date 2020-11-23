import React,{Component,useContext,useReducer,useEffect,useRef} from "react"
import testimonialsStore from "../store/testimonialStore";
import testimonialReducer from "../reducers/testimonialReducer";
import * as actions from "../actions/actionTypes"
import * as testimonialActions from "../actions/testimonialActions"
import {Redirect} from "react-router";
import EditTestimonial from "./EditTestimonial";


const Context = React.createContext();

let testimonialBody = {
    OwnerFullName: "ntwari egide",
    OwnerId: 1,
    testimonialType: "illiness",
    testimonialTitle: "23 Years On Bed",
    testimonialBody: "Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility."
}




function ListOfTestimonials () {

    const [state,dispatch] = useReducer(testimonialReducer,testimonialsStore.getState())

    const didRun = useRef(false)

    useEffect(()=> {
        if(!didRun.current){
            const dataFromLocalStorage = localStorage.getItem("data")
            dispatch({
                type: actions.RESET_TESTIMONIAL_STORAGE,
                payload: JSON.parse(dataFromLocalStorage)
            })
            dispatch({
                type: actions.TESTIMONIAL_VIEWS
            })

            didRun.current = true
        }
    })

    useEffect( () => {
        localStorage.setItem("data", JSON.stringify(state))
    },[state])

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
                <button type="button" className="btn btn-primary" onClick={ () =>
                        dispatch(testimonialActions.addTestimonial(testimonialBody))
                }>Add testimonial</button>
                <div className="container-fluid testimonies">
                    <h2>Testimonies</h2>
                    <h4>List of new testimonials</h4>
                    <br/>
                    <div className="row">
                    <ListingTestimonials testimonials={state} />
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
}

function ListingTestimonials({testimonials}) {

    return testimonials.map( testimonial =>
            <Testimonial key={testimonial.id} {...testimonial}/>
        )
}

function GoEditComponent(){
    console.log('clicked edit')
    // return <Redirect push to="/edit-testimony" />
}

function Testimonial({...testimonial}){
    // console.log(testimonial)
    const dispatch =  useContext(Context)
    return (
        <div className="col-sm-3">
            <span className="glyphicon glyphicon-off"></span>
            <h4>{testimonial.testimonialTitle}</h4>
            <p className="testimony-body">{testimonial.testimonialBody}</p>
            <p className="testimony-title">Type: {testimonial.testimonialType}</p>
            <p className="testimony-by text-info">By : {testimonial.OwnerFullName}</p>
            <p className="text-success font-weight-bold">{testimonial.views} views</p>
            <p><span className="text-success align-left">{testimonial.likes} likes </span> <span className="text-danger align-right">{testimonial.dislikes} dislikes</span></p>
            <button type="button" className="btn btn-outline-primary" onClick={()=> dispatch({type: actions.LIKE_TESTIMONIAL,payload: {id: testimonial.id,OwnerId: testimonial.OwnerId}})}>like</button>
            <button type="button" className="btn btn-outline-primary" onClick={()=> dispatch({type: actions.DISLIKE_TESTIMONIAL,payload: {id: testimonial.id,OwnerId: testimonial.OwnerId}})}>dislike</button>
            <br/><br/><br/>
            <button type="button" className="btn btn-primary" onClick={GoEditComponent}>Edit</button>
            <button type="button" className="btn btn-danger" onClick={() => dispatch({type: actions.DELETE_TESTIMONIAL,payload: {id: testimonial.id}})}>Delete</button>
        </div>
    )
}



export default ListOfTestimonials