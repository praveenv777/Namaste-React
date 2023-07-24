import { IMG_CDN_URL } from './constant';
const RestuarantCard = ({name, 
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwoString,
    lastMileTravelString}) =>{
  
    return (
        <div className='restuarant-card'>
          <img src={IMG_CDN_URL+cloudinaryImageId} alt='Card-image'/>
          <h3>{name}</h3>
          <h5>{cuisines.join(", ")}</h5>
          <span>
          <h4>{avgRating}</h4>
          <h4>.</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>.</h4>
          <h4>{costForTwoString}</h4>
          </span>
          
        </div>
  
    )
  }

 export default RestuarantCard; 