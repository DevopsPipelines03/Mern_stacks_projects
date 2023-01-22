import React from 'react';
import axios from 'axios';
import "./index.css";


class Crud extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
        record :[],
        Name:"",
        Age:"",
        City:"",
        ExecuteID:"",
        ModifyName:"" ,
        TempStr: "",
        Tmp:"",
        Str: "PLATFORM",
   editDatas:[]
        
        }
  }




 

 
  getAll() {
    axios.get("http://localhost:5000/info").then(res => { 

        console.log(res.data);
       this.setState({record:res.data});
    })
   }

 
   handlesubmit= event => {
 
   debugger;axios.post('http://localhost:5000/info',this.state)

         .then(result => {
            console.log(result)
             this.setState({state:result})})
    .catch(err => {
        console.log(err);
    })
}



handleChange= event => {

  this.setState({[event.target.name]:event.target.value});
  
 //alert('Hi');
}


   
//============================



changeTitle(e) {  
this.setState({  
    
  });  
} 

//===========================
setdatas = (data) =>{
 console.log(data);
 this.setState({ Name: this.state.Name,
  Age: this.state.Age,
  City:this.state.City})
 
}


handleUpdate = () => {

  var Jsondata = {
      ExecuteID: this.state._id,
      ModifyName: this.state.Name,
      TempStr: this.state.Age,
      Tmp:this.state.City,
      Str: 'PLATFORM',
      
  }

axios.post('http://localhost:5000/info',Jsondata)

.then(result => {
console.log(result.data)
this.setState({state:result.data})
})
  
  .catch(err => {
      console.log(err);
  })
}


//===============================

setdatas =  (_id) => {

  
         //const Editdata={EditPlatformId : JamaProjectID,
          //EditPlatform :PlatformName,
         // EditShortName: PlatformShortName}
         
 console.log(this.state.record);
          let editValue=this.state.record.filter(el=> 
              el._id===_id
 
      )[0];
           this.setState({ _id:_id,Name :editValue.Name,Age:editValue.Age,City:editValue.City})
 
         //console.log(Editdata)
         
 }
//==============

handleDelete = (PlatformId) => {

  if(window.confirm('Are you sure you want to delete')){
      
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




handleDelete = (_id) => {

  if(window.confirm('Are you sure you want to delete')){

  const deletedata =this.state.record.filter(ExecuteID=>ExecuteID._id !== _id)
 axios.post('http://localhost:5000/info',{ExecuteID:_id, "Str": "PLATFORM"})

 .then(result => {
   console.log(result.data)
    this.getAll();
   this.setState({state:result.data,
      record:deletedata

     
  })
 })
      
      .catch(err => {
          console.log(err);
      })


  }
      
  }


componentDidMount(){
    this.getAll();
}
  render() {
    return (

        
<div className='container-fluid'>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
 
  <a class="navbar-brand" href="#">MERN Stack Azure Devops Ingeration Apps</a>

  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class=" nav justify-content-end">
      <li class="nav-item ">
        <a class="nav-link navbar-brand" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar-brand glyphicon glyphicon-log-in" href="#"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar-brand glyphicon glyphicon-user" href="#"></a>
      </li>
    </ul>
  </div>
</nav>

        
        
        <div class="container">
        <div class="table-wrapper">
		
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
						<h4>Azure <b>Devops CI/CD PipeLine Ingeration Tools</b></h4>
					</div>
					<div class="col-sm-6">
						<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
												
					</div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
					
						<th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                  {this.state.record.map((item, i) => (
                    <tr key={i}>
                     
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.City}</td>
                        <td>
                        <div class="btn-group btn-group-circle">
                        <a href="#editEmployeeModal" onClick={() => this.setdatas(item._id)} class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit" >&#xE254;</i></a>
                      
                        <a href="#deleteEmployeeModal"  class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            <a >Edit</a>
                                                                    
                      </div>
                           

                        </td>
                      
                    </tr>
                ))}
				
                   				
					
                </tbody>
            </table>
			
        </div>
		<div id="addEmployeeModal" class="modal fade" aria-autocomplete=''>
		<div class="modal-dialog">
			<div class="modal-content">
				<form>
					<div class="modal-header">						
						<h4 class="modal-title">Add Employee</h4>


						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>Name</label>
              
							 <input type="text" className="form-control mb-2 mr-sm-2" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter email" id="email"/>
						</div>
						<div class="form-group">
							<label>Age</label>
							<input type="text" className="form-control mb-2 mr-sm-2" name="Age" onChange={this.handleChange} value={this.state.Age} placeholder="Enter password" id="pwd"/>
						</div>
						
						<div class="form-group">
							<label>City</label>
							
							<input type="text" className="form-control mb-2 mr-sm-2" name="City" onChange={this.handleChange} value={this.state.City} placeholder="Enter password" id="pwd"/>
						</div>					
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
						 <button type="button"  onClick={() => this.handlesubmit()} className="btn btn btn-success mb-2">Add</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	
	<div id="editEmployeeModal" class="modal fade">
		<div class="modal-dialog">
    <div class="modal-content">
				<form>
					<div class="modal-header">						
						<h4 class="modal-title">Edit Employee</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>Name</label>
              <input type="text" className="form-control mb-2 mr-sm-2" name="Name" value={this.state.Name} onChange={this.handleChange}   placeholder="Enter email" id="email"/>
						
						</div>
						<div class="form-group">
							<label>Email</label>
							
							<input type="text"  class="form-control" name="Age"  value={this.state.Age} onChange={this.handleChange} placeholder="Enter the platshort"  ></input>
						</div>
						
						<div class="form-group">
							<label>Phone</label>
						
							 <input type="text" class="form-control" name="City" value={this.state.City} onChange={this.handleChange} placeholder="Enter the platshort"  ></input>
						</div>					
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
						<input type="button"  onClick={this.handleUpdate} class="btn btn-success" value="Save"/>
					</div>
				</form>
			</div>
		</div>
	</div>
	

    </div>
	 
    </div>
    )
  }
}
 
export default Crud;

