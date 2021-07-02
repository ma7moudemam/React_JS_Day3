import React, { Component } from 'react';
class StudentAdd extends Component {
    state = 
    { id: 1, Name: 'mostafa', Age: 20,courseone:"js",coursetwo:"js",coursethree:"js",trackname:"front end",dataofbirth:"20/10/1997",address:"mansoura" }
    CustomAddingHanlder = () => {
        
        let _courses=[this.state.courseone,this.state.coursetwo,this.state.coursethree]
        let _New = { id: this.state.id, Name:this.state.Name, Age:this.state.Age,courses:_courses,trackname:this.state.trackname,dataofbirth:this.state.dataofbirth,address:this.state.address};
        console.log(_New);
        this.props.AddingRef(_New);
        
    }
    render() { 
        return(
            <div style={{width:'40%' ,marginLeft:'30%',marginTop: '2%'}}>
               <div className="container" style={{marginTop:'10%', backgroundColor: 'rgba(186, 223, 153, 0.301)'}}>
               <div className="row justify-content-center ">
               <div>
                    <form className="form-container col-12 col-sm-12 col-xl-12 mt-4">
                    <div className="row justify-content-center">
                    <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                    <label className="h5" ><b>Id</b></label>
                    <input type="text" id="id" className="form-control"  placeholder="Id"
                    onChange={(e) => this.setState({ id: e.target.value })}
                    ></input>            
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                            <label className="h5" ><b>Name</b></label>
                            <input type="text" id="name" className="form-control"  placeholder="Name"
                            onChange={(e) => this.setState({ Name: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                            <label className="h5" ><b>Age</b></label>
                            <input type="text" id="age" className="form-control"  placeholder="Age"
                            onChange={(e) => this.setState({Age: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3 pe-3">
                    <div className="col-3 pe-3">
                        <div className="form-group ">
                            <label className="h5"><b>Course One</b></label>
                            <input type="text" id="courseone" className="form-control"  placeholder="Course One"
                            onChange={(e) => this.setState({ courseone: e.target.value })}
                            ></input>
                    </div>
                    </div><div className="col-3">
                        <div className="form-group ">
                            <label className="h5" ><b>Course Two</b></label>
                            <input type="text" id="coursetwo" className="form-control"  placeholder="Course Two"
                            onChange={(e) => this.setState({ coursetow: e.target.value })}
                            ></input>
                    </div>
                    </div><div className="col-3">
                        <div className="form-group ">
                            <label className="h5" ><b>Course Three</b></label>
                            <input type="text" id="coursethree" className="form-control"  placeholder="Course Three"
                            onChange={(e) => this.setState({ coursethree: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                            <label className="h5" ><b>Track Name</b></label>
                            <input type="text" id="track" className="form-control"  placeholder="Track Name"
                            onChange={(e) => this.setState({ trackname: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                            <label className="h5"><b>Data Of Birth</b></label>
                            <input type="date" id="date" className="form-control"  placeholder="Data Of Birth"
                            onChange={(e) => this.setState({ dataofbirth: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="form-group col-10 col-sm-10 col-md-10 col-xl-10">
                            <label className="h5"  ><b>Addrees</b></label>
                            <input type="text" id="address" className="form-control"  placeholder="Address"
                            onChange={(e) => this.setState({ address: e.target.value })}
                            ></input>
                    </div>
                    </div>
                    <div className="row justify-content-center ">
                        <button type="button" className="btn btn-success col-3 mt-4 mb-4" onClick={this.CustomAddingHanlder} >Add</button>
                        
                    </div>
                    </form>
               </div>
               </div>
               </div>
               
            </div>
         )
    }
}
export default StudentAdd; 
 
