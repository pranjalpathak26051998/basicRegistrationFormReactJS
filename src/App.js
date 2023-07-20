import React,{ useState } from 'react';


import './App.css'
// window.location.href = 'https://www.google.com'; // Redirect to google.com

function App(){
  const [data,setData]=useState("Pranjal");
  const [home,setHome]=useState(false);
  
  function ClickSearch(){
    alert("Fill the registration form")
  }

function UpdateHome(){
  setHome(true);
}
if(home){
  window.location.href = 'https://www.google.com'; // Redirect to google.com
}
function updateData(){
    setData("Vashitva Pathak")
}
function ResetData(){
  if(data==="Vashitva Pathak"){
    setData("Pranjal")
  }
}
  return(
        <>
       
       <nav className="navbar navbar-expand-lg navbar-light bg-dark"   >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"  >  Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" onClick={UpdateHome} href='#' >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" onClick={ClickSearch}>Search</button>
      </form>
    </div>
  </div>
</nav>

<div className="head-button" >
<h1 className="head">Hello {data} </h1>
        <button className="head-button" onClick={updateData}  >ClickMe</button>
        <button className="head-button" onClick={ResetData} type='reset' >ResetMe</button>
</div>
  <form className='custom-form'>
   <div className='div-form' >
    <h1 className='reg-form' >Registration Form</h1>
    <a name="FirstName= " >FirstName= </a><input className="form-fname" type="text" placeholder="FirstName" required /><br/>
    <a>MiddleName=</a><input className="form-mname" type="text" placeholder="MiddleName" /><br/>
    <a  name="LastName= " >LastName= </a><input className="form-lname" type="text" placeholder="LastName" required/><br/>
    <a>Email= </a><input className="form-email" type='text' placeholder='@email.com' required /><br/>
    <a>Password = </a><input className='form-password' type='password' placeholder='*****' required/><br/>
    <a>Id=</a><input className='form-Id' type='text' placeholder='govt.Id' required/><br/>
    <a required>Gender</a>
  <ul>
    <li className='gender-form' >Male <input className='form-gender-male' type='radio'/></li>
    <li className='gender-form' >female <input className='form-gender-female' type='radio'/></li>
    <li className='gender-form' >Others <input className='form-gender-others' type='radio'/></li>
  </ul>

  <button className='form-submit' type='submit' >Submit</button>
   </div>
  </form>
   </>
    )   
}
export default App;

// "eslintConfig": {
//   "extends": [
//     "react-app",
//     "react-app/jest"
//   ]
// },
