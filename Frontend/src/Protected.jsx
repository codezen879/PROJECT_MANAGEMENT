import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import SideBar from './components/sidebar/SideBar';
const Protected = (props) => {
  const {Component}=props;
  const navigate=useNavigate();
  useEffect(()=>{
    let login=localStorage.getItem('login');
    if(!login)navigate('/login')
  }) 
  return (
    <div>
      <SideBar Item={Component}></SideBar>
      </div>
  )
}

export default Protected