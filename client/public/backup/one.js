
import React from 'react';
import axios from 'axios';
import "./user.css";
import "./index.css";


class Api extends React.Component{
    constructor()
    
    {
        super();

        this.state={record :[],
            Name:"",
            Age:"",
            City:"",
            ExecuteID:"",
            ModifyName:"" ,
            TempStr: "",
            Tmp:"",
            Str: "PLATFORM",
       editDatas:[]}}

       

       getAll() {
        debugger;
        axios.get("https://webappreactjs.azurewebsites.net/info").then(res => { 
    
            console.log(res.data);
           this.setState({record:res.data});
        })
       }
       componentDidMount(){
        this.getAll();
    }

    handlesubmit= event => {
 
        debugger;axios.post('https://webappreactjs.azurewebsites.net/info',this.state)
     
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
    
    
 render(){
        return (
            <div class="container-fluid">
               <div class='dashboard'>
    <div class="dashboard-nav">
        <header><a href="#!" class="menu-toggle"><i class="fas fa-bars"></i></a><a href="#"
                                                                                   class="brand-logo"><i
                class="fas fa-anchor"></i> <span>MERN STACK</span></a></header>
        <nav class="dashboard-nav-list"><a href="#" class="dashboard-nav-item"><i class="fas fa-home"></i>
            Home </a><a
                href="#" class="dashboard-nav-item active"><i class="fas fa-tachometer-alt"></i> dashboard
        </a><a
                href="#" class="dashboard-nav-item"><i class="fas fa-file-upload"></i> Upload </a>
            <div class='dashboard-nav-dropdown'><a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                    class="fas fa-photo-video"></i> Media </a>
                <div class='dashboard-nav-dropdown-menu'><a href="#"
                                                            class="dashboard-nav-dropdown-item">All</a><a
                        href="#" class="dashboard-nav-dropdown-item">Recent</a><a
                        href="#" class="dashboard-nav-dropdown-item">Images</a><a
                        href="#" class="dashboard-nav-dropdown-item">Video</a></div>
            </div>
            <div class='dashboard-nav-dropdown'><a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                    class="fas fa-users"></i> Users </a>
                <div class='dashboard-nav-dropdown-menu'><a href="#"
                                                            class="dashboard-nav-dropdown-item">All</a><a
                        href="#" class="dashboard-nav-dropdown-item">Subscribed</a><a
                        href="#"
                        class="dashboard-nav-dropdown-item">Non-subscribed</a><a
                        href="#" class="dashboard-nav-dropdown-item">Banned</a><a
                        href="#" class="dashboard-nav-dropdown-item">New</a></div>
            </div>
            <div class='dashboard-nav-dropdown'><a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                    class="fas fa-money-check-alt"></i> Payments </a>
                <div class='dashboard-nav-dropdown-menu'><a href="#"
                                                            class="dashboard-nav-dropdown-item">All</a><a
                        href="#" class="dashboard-nav-dropdown-item">Recent</a><a
                        href="#" class="dashboard-nav-dropdown-item"> Projections</a>
                </div>
            </div>
            <a href="#" class="dashboard-nav-item"><i class="fas fa-cogs"></i> Settings </a><a
                    href="#" class="dashboard-nav-item"><i class="fas fa-user"></i> Profile </a>
          <div class="nav-item-divider"></div>
          <a
                    href="#" class="dashboard-nav-item"><i class="fas fa-sign-out-alt"></i> Logout </a>
        </nav>
    </div>
    <div class='dashboard-app'>
        <header class='dashboard-toolbar'><a href="#!" class="menu-toggle"><i class="fas fa-bars"></i></a></header>
        <div class='dashboard-content'>
            <div class='container'>
                <div class='card'>
                    <div class='card-header'>
                        <h5 class="alert alert-success">WELCOME YOUR ARE SUCCESSFULLY LOGIN  INTO OUR MERN STACK PROJECT USER DATA!!!!</h5>
                    </div>
                    <div class='card-body'>
                    <div class="table-wrapper">
		
        <div class="table-title">
            <div class="row">
                <div class="col-sm-6">
                    <h5 class="text-center"><b>Azure Devops CI/CD PipeLine Ingeration Tools</b></h5>
                </div>
                <div class="col-sm-6">
                    <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                                            
                </div>
            </div>
        </div>
        <table class="table table-striped table-hover">
            <thead class="thead-dark">
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
                            
                                                                    
                      </div>
                           

                        </td>
                      
                    </tr>
                ))}
           
            
                               
                
            </tbody>
        </table>
        
    </div>


    <div id="addEmployeeModal" className="modal fade" aria-autocomplete=''>
		<div className="modal-dialog">
			<div className="modal-content">
				<form>
					<div className="modal-header">						
						<h4 className="modal-title">Add Employee</h4>


						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">					
						<div className="form-group">
							<label>Name</label>
              
							 <input type="text" className="form-control mb-2 mr-sm-2" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter email" id="email"/>
						</div>
						<div className="form-group">
							<label>Age</label>
							<input type="text" className="form-control mb-2 mr-sm-2" name="Age" onChange={this.handleChange} value={this.state.Age} placeholder="Enter password" id="pwd"/>
						</div>
						
						<div className="form-group">
							<label>City</label>
							
							<input type="text" className="form-control mb-2 mr-sm-2" name="City" onChange={this.handleChange} value={this.state.City} placeholder="Enter password" id="pwd"/>
						</div>					
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-danger" data-dismiss="modal" value="Cancel"/>
						 <button type="button"  onClick={() => this.handlesubmit()} className="btn btn-success">Add</button>
					</div>
				</form>
			</div>
		</div>
	</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 
            </div>
        )
    }
}
 
export default Api;



// class Api extends React.Component{
//     constructor(){
//         super();

//         this.state={Name:"", Age:"", City:""}}

//         handleChange = (event) => {
            
//             const name = event.target.name;
//             const value = event.target.value;
        
//             this.setState({[name]: value})
//             //console.log(this.state)
            
//           }
// //================================================================================================================================================

//                                                         //POST METHODS
//  //===============================================================================================================================================
   
//  handlesubmit= event => {
//    debugger; 
//     axios.post('http://localhost:5000/info',this.state)
//     .then(result => {
//      console.log(result)
//  this.setState({state:result})})
//     .catch(err => {
//         console.log(err);
//     })
// }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//  render(){
//         return (
//             <div>
//                <form>


              

//   <label type="text" className="mr-sm-2">Name</label>
//   <input type="text" className="form-control mb-2 mr-sm-2" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter email" id="email"/>
//   <label type="text" className="mr-sm-2">Age:</label>
//   <input type="text" className="form-control mb-2 mr-sm-2" name="Age" onChange={this.handleChange} value={this.state.Age} placeholder="Enter password" id="pwd"/>
//   <label type="text" className="mr-sm-2">CIty:</label>
//   <input type="text" className="form-control mb-2 mr-sm-2" name="City" onChange={this.handleChange} value={this.state.City} placeholder="Enter password" id="pwd"/>
 
//   <button type="button"  onClick={() => this.handlesubmit()} className="btn btn-primary mb-2">Submit</button>
// </form>
 
//             </div>
//         )
//     }
// }
 
// export default Api;