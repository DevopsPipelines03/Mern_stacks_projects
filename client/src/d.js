import React from 'react';
import axios from 'axios';
//import {button} from 'react-boostrap';


axios.defaults.baseURL='http://localhost:54541/api'
class Routings extends React.Component {
    constructor(props) {
     
    super(props);
this.state = {
record :[],
ProjectID:'',
ProjectName:'',
ShortName:'',
 ExecuteID:"" ,
ModifyName:"" ,
TempStr: "",
Str: "PLATFORM",
 

     PlatformName:"",
     JamaProjectID:"",
     PlatformShortName:""





}
  //this.editEmployee = this.editEmployee.bind(this);
    }

   getdatas = () => {
   axios.post('/Config/GetPlatform')
   .then(result => {
     console.log(result.data)
     this.setState({record:result.data})
   })
        
        .catch(err => {
            console.log(err);
        })
        

    } 
  
 componentDidMount(){

    this.getdatas();
   // this.handleDelete()
   
 }



    
     handleChange= event => {

        this.setState({[event.target.name]:event.target.value});
        
       //alert('Hi');
    }
    handlesubmit= event => {
        event.preventDefault();
       
  
 
   axios.post('/Config/AddProject',this.state)
 
   .then(result => {
     console.log(result)
     this.setState({state:result
    
    })
   })
        
        .catch(err => {
            console.log(err);
        })
    }
   handleDelete = (PlatformId) => {

    if(window.confirm('Are you sure you want to delete')){
          //const dataEdit={

       // ExecuteID:PlatformId,
       // Str:"PLATFORM"

    // }
    const deletedata =this.state.record.filter(ExecuteID=>ExecuteID.PlatformId !== PlatformId)
   axios.post('/Config/DelPlatform/',{ExecuteID:PlatformId, "Str": "PLATFORM"})
 
   .then(result => {
     console.log(result.data)
      this.getdatas();
     this.setState({state:result.data,
        record:deletedata

       
    })
   })
        
        .catch(err => {
            console.log(err);
        })


    }
    
   
        
    }


    handleUpdate = () => {
        debugger;
        var Jsondata = {
            ExecuteID: this.state.JamaProjectID,
            ModifyName: this.state.PlatformName,
            TempStr: this.state.PlatformShortName,
            Str: 'PLATFORM'
        }

   axios.post('/Config/UpdatePlatform',Jsondata)
 
   .then(result => {
     console.log(result.data)
     this.setState({state:result.data})
   })
        
        .catch(err => {
            console.log(err);
        })
    }
     
handleChange(event) {
  
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }



    EditPlatforms =  (JamaProjectID) => {

 debugger;
        //const Editdata={EditPlatformId : JamaProjectID,
         //EditPlatform :PlatformName,
        // EditShortName: PlatformShortName}
        
console.log(this.state.record);
         let editValue=this.state.record.filter(el=> 
             el.JamaProjectID===JamaProjectID

     )[0];
          this.setState({ JamaProjectID:JamaProjectID,PlatformName :editValue.PlatformName,PlatformShortName:editValue.PlatformShortName})

        //console.log(Editdata)
        
}
  
  render(){

    const {ProjectID,ProjectName,ShortName} = this.state;
    return(

<div>
               

         
         
        

  <h1>REACT HTTP METHODS CRUD OPERTION </h1>

                  <b> Add the data:</b> <p> Enter the ProjectID:<input name="ProjectID" value={ProjectID} onChange={this.handleChange} type="text"></input> </p>
                      <p> Enter the ProjectName:<input name="ProjectName" value={ProjectName} onChange={this.handleChange} type="text"></input> </p>
                        <p> Enter the ShortName:<input name="ShortName" value={ShortName}  onChange={this.handleChange} type="text"></input>
                         <button onClick={this.handlesubmit}>Post</button>
                         </p>
                         
                     
                      
                    



                   handleChange
                  
                
          <p> <b>get the data</b> <button onClick={this.getdatas}>get</button></p>
                
         
           
                <div>


          <b>update data:</b>  
      <input type="hidden"  value={this.state.JamaProjectID} />
                <input type="text"  name="PlatformName"  value={this.state.PlatformName} onChange={this.handleChange} placeholder="Enter the platshort"  ></input>
                <input type="text" name="PlatformShortName" value={this.state.PlatformShortName} onChange={this.handleChange} placeholder="Enter the platshort"  ></input>
                  <button type="button" onClick={() => this.handleUpdate()} class="btn btn-outline red btn-sm" variant="danger">UPDATE</button> 

                

              </div>

              <div class="col-md-12 col-sm-12">

                                        <div class="portlet-body " >
                                            <div class="table-responsive ">
                                                <table class="table table-striped table-bordered table-advance table-hover">
                                                    <thead class="caption-subject bold  font-white">
                                                        <tr >

                                                            <th > # </th>
                                                            <th > Jama ProjectID </th>
                                                            <th > Project Name</th>
                                                            <th > Short Name</th>
                                                            <th  >Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                         {this.state.record.map(columns => (


 <tr>

                                                               <td>{columns.PId}</td>
              <td>{columns.JamaProjectID}</td>
              <td>{columns.PlatformName}</td>
              <td>{columns.PlatformShortName}</td>
                                                            <td >

                                                                <div class="btn-group btn-group-circle">
                                                                   
                                                                   <button variant="info" onClick={() => this.EditPlatforms(columns.JamaProjectID)}>Edit</button>
                                                                    <button type="button" onClick={() => this.handleDelete(columns.JamaProjectID)} class="btn btn-outline red btn-sm" variant="danger">Delete</button> 
                                                                    
                                                                </div>
                                                            </td>
                                                        </tr>
                                                         ))}
                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                      

                                    </div>
            </div>
           
            
            
          
    )
  }
}
 
export default Routings

