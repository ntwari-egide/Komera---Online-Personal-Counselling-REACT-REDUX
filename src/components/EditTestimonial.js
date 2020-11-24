import React,{useState} from "react"
import * as testimonialActions from "../actions/testimonialActions"
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

function EditTestimonial(props){

    let history  = useHistory();

    const dispatch = useDispatch()

    const [testimonialState,setTestimonialState] = useState({
        id: props.location.state.id,
        OwnerFullName: props.location.state.OwnerFullName,
        testimonialType: props.location.state.testimonialType,
        testimonialTitle: props.location.state.testimonialTitle,
        testimonialBody: props.location.state.testimonialBody
    })

    const changeStateValue = (e) =>{
        setTestimonialState({
            ...testimonialState,
            [e.target.name ]: e.target.value
        })
    }

    const resetForm= () => {
        setTestimonialState({
            id: props.location.state.id,
            OwnerFullName: props.location.state.OwnerFullName,
            testimonialType: props.location.state.testimonialType,
            testimonialTitle: props.location.state.testimonialTitle,
            testimonialBody: props.location.state.testimonialBody
        })
    }

    const submitForm = (e) => {
        dispatch(testimonialActions.updateTestimonial(testimonialState))
        alert("You have updated the testimony : ",testimonialState.id)
        history.push("/")
        e.preventDefault()
    }

    return (
        <div className="card">
            <h2 className="align-center  font-weight-bold">Edit Testimony</h2><br/><br/>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Full names</label>
                    <input type="text" name="OwnerFullName" onChange={changeStateValue} value={testimonialState.OwnerFullName} className="form-control" id="exampleFormControlInput1"
                           placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Testimony title</label>
                    <input type="text" name="testimonialTitle" onChange={changeStateValue} value={testimonialState.testimonialTitle} className="form-control" id="exampleFormControlInput1"
                           placeholder="Enter title" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Testimony</label>
                    <textarea type="text" name="testimonialBody" onChange={changeStateValue} value={testimonialState.testimonialBody} className="form-control" id="exampleFormControlInput1"
                              placeholder="Enter testimony body" rows="8" ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select value={testimonialState.testimonialType} name="testimonialType" onChange={changeStateValue} className="form-control" id="exampleFormControlSelect1">
                        <option value="">choose type</option>
                        <option value="illness">illness</option>
                        <option value="admissions">admissions</option>
                        <option value="gender harassment">gender harassment</option>
                        <option value="home conflicts">home conflicts</option>
                        <option value="others">others</option>
                    </select>
                </div>
            </form>

            <input type="reset" value="reset form" onClick={resetForm}/>
            <input type="submit" value="Update Testimony" onClick={submitForm} />
        </div>
    )
}

export default EditTestimonial