import React, { Component } from 'react';
class Studentlist extends Component {
    state = { 
        //  studentdata:this.props.data
     }
    handleClickEdite = (data) => {
        this.props.showEditeform();
        this.props.refowrdData(data)
    }
    render() { 
        return(
    <table class="table table-bordered table-striped  table-hover text-center table-responsive  ">
                    <thead>
                      <tr>
                        <th class="h3 text-warning">ID</th>
                        <th  class="h3 text-warning">Name</th>
                        <th  class="h3 text-warning">Age</th>
                        <th  class="h3 text-warning">Course One</th>
                        <th  class="h3 text-warning">Courses Tow</th>
                        <th  class="h3 text-warning">Courses Three</th>
                        <th  class="h3 text-warning">Track Name</th>
                        <th  class="h3 text-warning">Data Of Birth</th>
                        <th  class="h3 text-warning">Address</th>
                        <th  class="h3 text-warning">Delet</th>
                        <th  class="h3 text-warning">Edite</th>
                      </tr>
                      </thead>
                      <tbody >
                         {
            this.props.Data.map((item,index)=>{
                return(
                    <tr>
                         <th>{item.id}</th>
                         <th>{item.Name}</th>
                         <th> {item.Age}</th>
                        {item.courses.map(cr=>{
                             return(
                                <th>{cr}</th>
                             );
                         })}
                         <th> {item.trackname}</th>
                         <th> {item.dataofbirth}</th>
                         <th> {item.address}</th>
                         <th><button type="button" className="btn btn-danger  mt-4 mb-4" onClick={((e) => this.props.DeletingRef(index))}>Delete</button> </th>
                         <th><button type="button" className="btn btn-secondary  mt-4 mb-4" onClick={((e) => this.handleClickEdite(item))}>Edite</button> </th>
                    </tr>
                )
            })
        }
                </tbody>
                </table>
    );
    }
}
 
export default Studentlist;
