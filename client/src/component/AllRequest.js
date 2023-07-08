import React, { Component } from 'react'
import axios from 'axios'
//import { MDBCol, MDBIcon } from "mdbreact";
//import SearchIcon from '@mui/icons-material/Search';

export default class AllRequest extends Component {
  constructor(props){
    super(props);

    this.state= {
      posts:[]
    }; 
}

componentDidMount(){
  this.retrivePosts();
}

onDelete = (id) =>{

    {axios.delete(`http://localhost:8000/delete/${id}`).then((res) =>{
        alert("Deleted Successfully");
        this.retrievePosts();
    })
}}



  



retrivePosts(){
  axios.get("http://localhost:8000/getall").then (res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }
  });
}


//search

filterData(posts,searchKey){

  const result = posts.filter((posts) =>
  posts.devisionID.toLowerCase().includes(searchKey) ||
  posts.title.toLowerCase().includes(searchKey) 
  
  )
  
  this.setState({posts:result})
  }
  
  handleSearchArea = (e) =>{
  
      const searchKey= e.currentTarget.value;
  
      axios.get("http://localhost:8000/getall").then (res =>{
    if(res.data.success){

      this.filterData(res.data.existingPosts,searchKey)
    }
  });
}




  render() {

    const mystyle ={
      textAlign: "center", 
      padding:"130px 0px 15px 0px", 
      color:"MidnightBlue",
      fontFamily: "Fantasy",
      fontSize: "30px"

    };

    return (
      <div className='container'>
        <p style={mystyle}>ALL &nbsp; REQUESTS</p>
        <div style={{border:"4px solid Azure",padding: "40px",margin: "20px"}}>


      { /*<MDBCol md="6">}
      <div className="input-group md-form form-sm form-1 pl-0" style={{margin:"-32px 0px 20px 80px", padding:"5px 15px 0px 10px"}}>
   { /*    <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-black" icon="search" />
          </span>
        </div>
        <input
          className="form-control my-0 py-1"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={this.handleSearchArea}
        />
      </div>
    </MDBCol>*/}

<div className="col-lg-3 mt-2 mb-2" style={{margin:"40px 0px 0px 880px",padding:'5px,0px,0px,0px'}} >
                <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                onChange={this.handleSearchArea}>

                </input>
            </div>
 

      <button className='btn btn-info'>
        <a  href='/add' style={{textDecoration:'none', color:'black', margin:"0px 0px 0px 20px", padding:"0px 15px 0px 10px"}}>
                    <i className='fa fa-plus-circle'></i> &nbsp;Make New Request 
                  </a> 
         </button>     

        <table className=" table table-light table-hover table-striped-columns table-sm" style={{margin:"60px 0px 0px 0px"}}> 
        
          <thead className="table table-dark "> 
            <tr>
            <th scope='col'> # </th>
              <th scope='col'> Division ID </th>
              <th scope='col'> Request Title </th>
              <th scope='col'> Action </th>
            </tr>
          </thead>

          <tbody className="table-success">
            {this.state.posts.map((posts, index)=>(
              <tr key={index}>

                <th scope='row'> {index+1} </th>

                <td> {posts.devisionID} </td>
                <td> {posts.title} </td>
                <td>

                    <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                    <i> view more</i> &nbsp; 
                  </a>

                  &nbsp;&nbsp;&nbsp;

                  <a className='btn btn-warning' href={`/update/${posts._id}`}>
                    <i className='fas fa-edit'></i> &nbsp; 
                  </a> 
                  &nbsp;
                  <a className='btn btn-danger' href='/' onClick={() => this.onDelete(posts._id)}>
                    <i className='fas fa-trash-alt'></i> &nbsp;
                  </a>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
        </div>

      </div>
    )
  }
}
