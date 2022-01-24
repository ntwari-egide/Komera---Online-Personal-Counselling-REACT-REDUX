import React,{Component} from "react"
import testimonialsStore from "../store/testimonialStore";
import * as testimonialAction from "../actions/testimonialActions"
import {connect} from "react-redux";

const Context = React.createContext()

class AddTestimony extends Component{
    constructor(props) {
        super(props);
        this.state = {
            OwnerFullName: "",
            OwnerId: 0,
            testimonialType: "",
            testimonialTitle: "",
            testimonialBody: ""
        }

        this.changeStateValue = this.changeStateValue.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    changeStateValue(e){
        this.setState({
            [e.target.name ]: e.target.value
        })
    }

    submitForm(e){
        // testimonialsStore.dispatch(testimonialAction.addTestimonial(this.state))
        console.log("added",this.state)
        this.props.addTestimony(this.state);
        console.log(this.props)
        e.preventDefault()
    }


    render() {
        return (
            <Context.Provider>
                <div className="card">
                    <h2 className="align-center  font-weight-bold">Add Testimony</h2><br/><br/>
                    <form onSubmit={this.submitForm}>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Full names</label>
                            <input type="text" name="OwnerFullName" onChange={this.changeStateValue} value={this.state.OwnerFullName} className="form-control" id="exampleFormControlInput1"
                                   placeholder="Enter your full name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Testimony title</label>
                            <input type="text" name="testimonialTitle" onChange={this.changeStateValue} value={this.state.testimonialTitle} className="form-control" id="exampleFormControlInput1"
                                   placeholder="Enter title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Testimony</label>
                            <textarea type="text" name="testimonialBody" onChange={this.changeStateValue} value={this.state.testimonialBody} className="form-control" id="exampleFormControlInput1"
                                      placeholder="Enter testimony body" rows="8" ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Example select</label>
                            <select value={this.state.testimonialType} name="testimonialType" onChange={this.changeStateValue} className="form-control" id="exampleFormControlSelect1">
                                <option value="">choose type</option>
                                <option value="illness">illness</option>
                                <option value="admissions">admissions</option>
                                <option value="gender harassment">gender harassment</option>
                                <option value="home conflicts">home conflicts</option>
                                <option value="others">others</option>
                            </select>
                        </div>
                    </form>

                    <input type="submit" value="Post Testimony" onClick={this.submitForm} />
                </div>
            </Context.Provider>
        )
    }
}

//mapStateToProps is used for selecting the part of the data from the store that the connected component needs
//It is called every time the store state changes.
//It receives the entire store state, and should return an object of data this component needs.
const mapStateToProps = state => {
    return {
        ...state
    }
}

//mapDispatchToProps allows you to specify which actions your component might need to dispatch
// It lets you provide action dispatching functions as props
const mapDispatch = (dispatch) => {
    return {
        addTestimony : (testimonialBody) => dispatch(testimonialAction.addTestimonial(testimonialBody))
    }
}


//The connect() function connects a React component to a Redux store
//It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

export default connect(
    mapStateToProps
    ,mapDispatch
) (AddTestimony)