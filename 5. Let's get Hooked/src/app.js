import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

// Header.js with name can also be imported this also works
// Header.jsx with name can also be imported this also works


// params are used to destructing the props
const RestuarantCard = ({name, 
  cuisines,
  cloudinaryImageId,
  lastMileTravelString}) =>{

  return (
      <div className='restuarant-card'>
        <img src={IMG_CDN_URL+cloudinaryImageId} alt='Card-image'/>
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h6>{lastMileTravelString}</h6>
      </div>

  )
}

const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);