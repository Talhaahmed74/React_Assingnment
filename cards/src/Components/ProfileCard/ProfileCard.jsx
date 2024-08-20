import React ,{useState}from 'react'
import './ProfileCard.css'
import Profile_img from '../Header/boy.png';

const ProfileCard = (props) => {

  const[action,setaction] = useState("show");  
    console.log(props);
  return (
    <div class="main-Content">
        <div class="profile-Content">
            <div class="Profile">
             <img src={Profile_img}></img>
             <li>Name: {props.name }</li>
             <li>Age: {props.age }</li>
             <li>Gender: {props.gender}</li>
             <li> Job Description: {props.jobDescription}</li>
             {action==="show" ? (<div class="contact">
                  <li>Contact: {props.contact}</li>
                  <li>Email: {props.email}</li>
                </div> ): null }
             <button className={action==="show" ? "submit gray" : "submit"} onClick={() =>{setaction("show")}}>show Contact Details</button>
             <button className={action=== "hide"? "submit gray" : "submit"} onClick={() =>{setaction("hide")}}>Hide Contact Details</button>
            </div>
        </div>
    </div>
  )
}

ProfileCard.defaultProps = {
  name: 'Talha',
  age: '18',
  gender: 'Male',
  jobDescription: 'Intern',
  contact: 'N/A',
  email: 'N/A'
};

export default ProfileCard
