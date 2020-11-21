import React,{Component} from "react"

class ListOfTestimonials extends Component{
    render() {
        return(
            <div>
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
                    <ListingTestimonials />
                </div>
            </div>
        )
    }
}
// OwnerFullName: "ntwari egide",
//     OwnerId: 1,
//     testimonialType: "illiness",
//     testimonialTitle: "23 Years On Bed",
//     testimonialBody: "Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members

function ListingTestimonials (){
    return (
        <div className="container-fluid testimonies">
            <h2>Testimonies</h2>
            <h4>List of new testimonials</h4>
            <br/>
                <div className="row">
                    <div className="col-sm-3">
                        <span className="glyphicon glyphicon-off"></span>
                        <h4>23 Years On Bed</h4>
                        <p className="testimony-body">Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members</p>
                        <p className="testimony-title">Type: Illness</p>
                        <p className="testimony-by">By : Peter Park</p>
                    </div>
                    <div className="col-sm-3">
                        <span className="glyphicon glyphicon-off"></span>
                        <h4>23 Years On Bed</h4>
                        <p className="testimony-body">Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members</p>
                        <p className="testimony-title">Type: Illness</p>
                        <p className="testimony-by">By : Peter Park</p>
                    </div>
                    <div className="col-sm-3">
                        <span className="glyphicon glyphicon-off"></span>
                        <h4>23 Years On Bed</h4>
                        <p className="testimony-body">Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members</p>
                        <p className="testimony-title">Type: Illness</p>
                        <p className="testimony-by">By : Peter Park</p>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-sm-3">
                        <span className="glyphicon glyphicon-off"></span>
                        <h4>23 Years On Bed</h4>
                        <p className="testimony-body">Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members</p>
                        <p className="testimony-title">Type: Illness</p>
                        <p className="testimony-by">By : Peter Park</p>
                    </div>
                    <div className="col-sm-3">
                        <span className="glyphicon glyphicon-off"></span>
                        <h4>23 Years On Bed</h4>
                        <p className="testimony-body">Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members</p>
                        <p className="testimony-title">Type: Illness</p>
                        <p className="testimony-by">By : Peter Park</p>
                    </div>
                    <div className="col-sm-3">
                        <span className="glyphicon glyphicon-off"></span>
                        <h4>23 Years On Bed</h4>
                        <p className="testimony-body">Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members</p>
                        <p className="testimony-title">Type: Illness</p>
                        <p className="testimony-by">By : Peter Park</p>
                    </div>
                </div>
            <br /><br />
            <div className="row">
                <div className="col-sm-3">
                    <span className="glyphicon glyphicon-off"></span>
                    <h4>23 Years On Bed</h4>
                    <p className="testimony-body">Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members</p>
                    <p className="testimony-title">Type: Illness</p>
                    <p className="testimony-by">By : Peter Park</p>
                </div>
                <div className="col-sm-3">
                    <span className="glyphicon glyphicon-off"></span>
                    <h4>23 Years On Bed</h4>
                    <p className="testimony-body">Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members</p>
                    <p className="testimony-title">Type: Illness</p>
                    <p className="testimony-by">By : Peter Park</p>
                </div>
                <div className="col-sm-3">
                    <span className="glyphicon glyphicon-off"></span>
                    <h4>23 Years On Bed</h4>
                    <p className="testimony-body">Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members Jamaica Hospital Medical Center regularly receives letters of thanks from former patients or their family members</p>
                    <p className="testimony-title">Type: Illness</p>
                    <p className="testimony-by">By : Peter Park</p>
                </div>
            </div>
            <br /><br />
        </div>
    )
}


export default ListOfTestimonials