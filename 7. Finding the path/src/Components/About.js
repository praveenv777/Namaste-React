import Profile from "./Profile";
import ProfileClass from './ProfileClass';
const About = ()=>{
  return(
    <div className="about-container">
    <div className="about-left">
      <h1>
        Welcome to <br /> The world of <br />{" "}
        <span>Tasty & Fresh Food</span>
      </h1>
      <h4>
        "Better you will feel if you eat a Food<span>Fire</span> healthy
        meal"
      </h4>
    </div>
    <div className="about-right">
      
    </div>
    <div>
      <ProfileClass name= {"Praveen V  Class"}/>
      <Profile name= {"Praveen V"}/>
    </div>
  </div>
  );  
};

export default About;