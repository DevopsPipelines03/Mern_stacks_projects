
import React from 'react';
import axios from 'axios';
import "./user.css";
import "./index.css";
import { useEffect } from 'react';


class Api extends React.Component{
    constructor()
    
    {
        super();

        this.state={record :[],
            Name:"",
            Age:"",
            City:"",
            user:"",
            ModifyName:"" ,
            TempStr: "",
            Tmp:"",
            Str: "PLATFORM",
           
       editDatas:[]}
      // this.deleteHandler = this.deleteHandler.bind(this);
    }

       
   
       getAll() {
        debugger;
        //axios.get("http://localhost:5000/info").then(res => { 
      axios.get("https://node3apis.azurewebsites.net/info").then(res => { 
    
            console.log(res.data);
           this.setState({record:res.data});
        })
       }
       componentDidMount(){
        this.getAll();
        
    }

   
    // deleteUser = (id)=>{
    //     this.setState(record.filter((item)=>item.id!==id))
       
    // }
   

     deleteHandler =(_id) =>{
        if(window.confirm('Are you sure you want to delete')){
           
      debugger;  axios.delete(`https://node3apis.azurewebsites.net/info/del/${_id}`)
          // .delete(`http://localhost:5000/info/del/${id}`)
           .then(res => {
            console.log('deleted',res)
            this.setState(res.data)
            this.setState(res.filter((item)=>item._id!==_id))
            this.windows.location.reload(false);

           })
           .catch(error =>{
            console.log(error)
           })
        }
        }


    // handleDelete = (_id) => {

    //     debugger;  if(window.confirm('Are you sure you want to delete')){
            
    //         debugger; const deletedata =this.state.record.filter(ExecuteID=>ExecuteID._id !== _id)
    //    axios.delete('https://node3apis.azurewebsites.net/info/del/',{ExecuteID:_id})
      
    //    .then(result => {
    //      console.log(result.data)
    //       this.getAll();
    //      this.setState({state:result.data,
    //         record:deletedata
      
           
    //     })
    //    })
            
    //         .catch(err => {
    //             console.log(err);
    //         })
      
      
    //     }
        
       
            
    //     }

  

    

    handlesubmit= event => {
 
        //debugger;axios.post('http://localhost:5000/info',this.state)
       debugger;axios.post('https://node3apis.azurewebsites.net/info',this.state)
     
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
    
     refreshPage = ()=>{
        window.location.reload();
     }
    
 render(){
        return (
            <div class="container-fluid">
               <div class='dashboard'>
    <div class="dashboard-nav">
        <header><a href="#!" class="menu-toggle"><i class="fas fa-bars"></i></a><a href="#"
                                                                                   class="brand-logo"><i
                class="fas fa-anchor"></i> <span>Augmento</span></a></header>
        <nav class="dashboard-nav-list"><a href="#" class="dashboard-nav-item"><i class="fas fa-home"></i>
            Home </a><a
                href="#" class="dashboard-nav-item active"><i class="fas fa-tachometer-alt"></i> dashboard
        </a><a
                href="#" class="dashboard-nav-item"><i class="fas fa-file-upload"></i> My Task </a>
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
                        <h5 class="alert alert-success"><b>Welcome Greetings  Augmento Labs Pvt Ltd!!!!!</b><br></br>First of all, thank you so much for giving me an opportunity and shortlisting me for this interview.  I am interested in this position .Now, I am looking for the best opportunity to implement my technical knowledge. I will try to grow financially for myself and for the growth of the company. If you give me an opportunity to work in your company, I can do my best as well as  I am ready to learn any new technology. If I don't know work-related tasks, I can learn to be productive and manage and complete my task myself.

</h5>
                        <h5 class="alert-success"><b>About Augmento:</b>
 
                        We are a new age digital, data and IT solutions provider enabling business outcomes for leading technology-driven brands. We specialize in digital product development and leveraging cutting-edge and emerging technologies to provide scalable solutions across industry domains. We deliver success consistently through strong processes, our humanized approach to problem solving and nurturing the best of talent.".
                         </h5>
                         <h5  class="fa fa-link"><b>website :</b><a href='http://www.augmentolabs.com' aria-hidden="true">Augmento Labs Pvt Ltd</a></h5>
                    </div>
                    <div class='card-body'>
                    <div class="table-wrapper">
		
        <div class="table-title">
            <div class="row">
                <div class="col-sm-6">
                    <h6 class="text-center"><b>Azure Devops PipeLine using  Terraform Ingeration (IaC)</b>
                    
                    <iframe className='video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
</iframe>
                    </h6>
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
    <th>EmployeeNO</th>
    <th>City</th>
    <th>Actions</th>
                    
                </tr>
            </thead>
            <tbody>
         
            {this.state.record.map((item) => (
                    <tr>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.City}</td>
                        <td>
                        <div class="btn-group btn-group-circle">
                        <a href="#editEmployeeModal" onClick={() => this.setdatas(item._id)} class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit" >&#xE254;</i></a>
                         
                       
                        <a href="#deleteEmployeeModal"onClick={  () => this.deleteHandler(item._id) } class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                           
                                                             
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
							<label>EmployeeNO</label>
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