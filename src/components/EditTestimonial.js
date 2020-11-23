import React,{Component} from "react"
import {connect} from "react-redux";
import * as actions from "../actions/testimonialActions"

class EditTestimonial extends Component{
    constructor(props) {
        super(props);

        this.state = props.location.state
        this.changeStateValue = this.changeStateValue.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    changeStateValue(e){
        this.setState({
            [e.target.name ]: e.target.value
        })
    }

    submitForm(e){
        this.props.updateTestimony(this.state);
        e.preventDefault()
    }
    render() {
        return (
            <div className="card">
                <h2 className="align-center  font-weight-bold">Edit Testimony</h2><br/><br/>
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

                <input type="submit" value="Update Testimony" onClick={this.submitForm} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        ...state
    }
}


const mapDispatch = dispatch => {
    return {
        updateTestimony : (updatedTestimonyBody) => dispatch({type: actions.updateTestimonial(updatedTestimonyBody) })
    }
}

export default connect(mapStateToProps,mapDispatch) (EditTestimonial)