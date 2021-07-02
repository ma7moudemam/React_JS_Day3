import React, { Component } from 'react';
class StudentEdite extends Component {
    state = 
    { id: this.props.newdatacoming.id, Name:this.props.newdatacoming.Name, Age:this.props.newdatacoming.Age,courseone:this.props.newdatacoming.courses[0],coursetwo:this.props.newdatacoming.courses[1],coursethree:this.props.newdatacoming.courses[2],trackname:this.props.newdatacoming.trackname,dataofbirth:this.props.newdatacoming.dataofbirth,address:this.props.newdatacoming.address }
    CustomEditeHanlder = () => {
        let _courses=[this.state.courseone,this.state.coursetwo,this.state.coursethree]
        let _New = { id: this.state.id, Name:this.state.Name, Age:this.state.Age,courses:_courses,trackname:this.state.trackname,dataofbirth:this.state.dataofbirth,address:this.state.address};
         this.props.EditingRef(_New);
         
    }
    render() { 
        console.log(this.props);
        return(
            <div style={{width:'40%' ,marginLeft:'30%',marginTop: '2%'}}>
               <div className="container" style={{marginTop:'10%', backgroundColor: 'rgba(286, 223, 153, 0.301)'}}>
               <div className="row justify-content-center">
               <div>
                    <form className="form-container col-12 col-sm-12 col-xl-12 mt-4">
                    <div className="row justify-content-center">
                    <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                    <label className="h5" ><b>Id</b></label>
                    <input type="text" id="id2" className="form-control"  placeholder="Id" value={this.state.id}
                    onChange={(e) => this.setState({ id: e.target.value })}
                    ></input>            
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                            <label className="h5" ><b>Name</b></label>
                            <input type="text" id="name2" className="form-control"  placeholder="Name" value={this.state.Name}
                            onChange={(e) => this.setState({ Name: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                            <label className="h5" ><b>Age</b></label>
                            <input type="text" id="age2" className="form-control"  placeholder="Age" value={this.state.Age}
                            onChange={(e) => this.setState({Age: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3 pe-3">
                    <div className="col-3 pe-3">
                        <div className="form-group ">
                            <label className="h5"><b>Course One</b></label>
                            <input type="text" id="courseone2" className="form-control"  placeholder="Course One" value={this.state.courseone}
                            onChange={(e) => this.setState({ courseone: e.target.value })}
                            ></input>
                    </div>
                    </div><div className="col-3">
                        <div className="form-group ">
                            <label className="h5" ><b>Course Two</b></label>
                            <input type="text" id="coursetwo2" className="form-control"  placeholder="Course Two" value={this.state.coursetwo}
                            onChange={(e) => this.setState({ coursetow: e.target.value })}
                            ></input>
                    </div>
                    </div><div className="col-3">
                        <div className="form-group ">
                            <label className="h5" ><b>Course Three</b></label>
                            <input type="text" id="coursethree2" className="form-control"  placeholder="Course Three" value={this.state.coursethree}
                            onChange={(e) => this.setState({ coursethree: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                            <label className="h5" ><b>Track Name</b></label>
                            <input type="text" id="track2" className="form-control"  placeholder="Track Name" value={this.state.trackname}
                            onChange={(e) => this.setState({ trackname: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                            <label className="h5"><b>Data Of Birth</b></label>
                            <input type="date" id="date2" className="form-control"  placeholder="Data Of Birth" value={this.state.dataofbirth}
                            onChange={(e) => this.setState({ dataofbirth: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                            <label className="h5"  ><b>Addrees</b></label>
                            <input type="text" id="address2" className="form-control"  placeholder="Address" value={this.state.address}
                            onChange={(e) => this.setState({ address: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    <div className="row justify-content-center ">
                        <button type="button" className="btn btn-success col-3 mt-4 mb-4" onClick={this.CustomEditeHanlder} >Edite</button>
                        
                    </div>
                    </form>
               </div>
               </div>
               </div>
               
            </div>
         )
    }
}
 
export default StudentEdite;
