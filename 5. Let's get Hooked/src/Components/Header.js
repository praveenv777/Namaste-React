
const Title = () => (
    <a href='/'>
   <img className="head-logo" 
   src='https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg' 
   alt='logo'/>
   </a>
)

const Header= () =>{

    return( <div className='Header'>
            <Title/>
            <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
        
    );
}

export default Header;

// Two types of export: Named and Default export
// Named export: export const Header = () => {}
// Default export: export default Header;
// Named export: import { Header } from './Header';
// Default export: import Header from './Header';
// import Header , { Title } from './components/Header';
// import NewHeader:-this name can be changed from './components/Header';
