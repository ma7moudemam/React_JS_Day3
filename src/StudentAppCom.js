import React, { Component } from 'react';
import Studentlist from './Components/Components-Students/StudentList' ;
import StudentEdite from './Components/Components-Students/StudentEdite';
import StudentAdd from './Components/Components-Students/StudentAdd';
import Login from './Components/Components-Students/login';
import Register from './Components/Components-Students/Register'
import Cookies from 'universal-cookie';
class App  extends Component {
    state = { 
         StudentsData :[
            { id: 1, Name: 'mostafa', Age: 20,courses:["js","css","sass"],trackname:"front end",dataofbirth:"20/10/1997",address:"mansoura" },
            { id: 2, Name: 'Ahmed', Age: 25,courses:["html","java","node"],trackname:"back end",dataofbirth:"11/9/1992",address:"tanta" },
            { id: 3, Name: 'mai', Age: 27,courses:["js","react","sass"],trackname:"front end",dataofbirth:"10/3/1996",address:"cairo" },
            { id: 4, Name: 'rafaat', Age: 23,courses:["js","css",   "flutter"],trackname:"mobile application",dataofbirth:"5/2/1994",address:"mansoura" },
          ],
          newdata:"",
        Register: false,
        Login:false,
        ShowList:false,
        Addlist:false,
        Editelist:false
     }
     Addinghanlder = (newObject) => {
        //this.setState
        let newStudentsData = [...this.state.StudentsData, newObject];
        this.setState({
            StudentsData: newStudentsData,
            ShowList:false
        });
    }
    Editeinghanlder = (newdata) => {
        console.log("this.state.StudentsData")
        //this.setState
      let Index = this.state.StudentsData.find((data => data.id == newdata.id));
    //   let newStudentData=[...this.state.StudentsData]
      Index.id=newdata.id;
      Index.Name=newdata.Name;
      Index.Age=newdata.Age;
      Index.courses=newdata.courses;
      Index.trackname=newdata.trackname;
      Index.dataofbirth=newdata.dataofbirth;
      Index.address=newdata.address;
        this.setState({
            StudentsData :this.state.StudentsData,
            ShowList:false,
            Addlist:false
        });
        console.log(this.state.StudentsData)
    }
    refowrdData=(data)=>
    {   
        this.setState({
            newdata:data
        });
    }
    showEditeform=()=>
    {
        this.setState({
            Addlist:true,
            ShowList:true
        });
    }
    Deletinghanlder = (index) => {
        this.state.StudentsData.splice(index, 1);
        if(window.confirm(`Are U suer To Delete This Item`))
        {
            this.setState({
                StudentsData: this.state.StudentsData
            });
        }
        
    }
    componentWillMount() {
        let RegisterObject = JSON.parse(window.sessionStorage.getItem("RegesterObject"));
        if (RegisterObject!=null) {
            this.setState({
                Register: true
            })
        }
        const getcooke= new Cookies();
        let LoginCooke=getcooke.get("Loginopject");
        if(LoginCooke!=null)
        {
            this.setState({
                Login: true
            })   
        }
    }
    RegisterHandelar = (RegisterObject) => {
        this.setState({
            Register: true
        });
        window.sessionStorage.setItem("RegesterObject", JSON.stringify(RegisterObject));

    }
    LoginHandelar = (LoginObject) => {
        this.setState({
            Login: true
        });
        const cookies = new Cookies();
        cookies.set("Loginopject",LoginObject);
    }
    ShowAddListHand=()=>
    {
        this.setState({
            ShowList: true
        });
    }

    render() { 
        if (this.state.Register!=false)
        {
            if (this.state.Login!=false)
            {
                if(this.state.ShowList!=false)
                {
                    if(this.state.Addlist!=false && this.state.Editelist==false)
                    {
                        return (
                            <div className="App">
                                <StudentEdite EditingRef={this.Editeinghanlder} newdatacoming={this.state.newdata}/>
                            </div>
                        );
                    }
                    else
                    {
                        return(
                            <StudentAdd AddingRef={this.Addinghanlder}/>);
                    }
                }
                else
                {
                   return(
                    <div>
                    <Studentlist Data={this.state.StudentsData }DeletingRef={this.Deletinghanlder} showEditeform={this.showEditeform}refowrdData={this.refowrdData}/>
                    <button type="button" className="btn btn-primary btn-lg col-3 mt-4 mb-4" onClick={this.ShowAddListHand} >AddNewItem</button>
                    </div>
                   );
                }
                
            }
            else
            {
               return(<Login LoginHandelar={this.LoginHandelar}/>);
            }
            
        }
        else
        {
            return (
                <Register RegesterHandler={this.RegisterHandelar}/>
            );
        }
        
    }
}
 
export default App;

