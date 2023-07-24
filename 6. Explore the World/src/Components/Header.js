import { useState } from "react";
const Title = () => (
    <a href='/'>
   <img className="head-logo" 
   src='https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg' 
   alt='logo'/>
   </a>
)
const Header= () =>{
    const [isLoggedin, setIsLoggedin] = useState(true);
    return( <div className='Header'>
            <Title/>
            <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <li>
        {
        
        // javascript expression works over here
        // jsx curly braces - refer website document : www.react.org
        
        isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
            </li>
            </ul>
         </div>
        </div>
        
    );
}

export default Header;

