import { restrolist } from "./constant"
import RestuarantCard from "./RestaurantCard"
import { useState } from "react";

function filterdata(searchText, restaurants){
  const filteredData = restaurants.filter((restaurant)=>
  restaurant?.data?.name.includes(searchText)
  )
  return filteredData;
}
const Body = () => {
  //const searchText = "KFC" this hardcoded value will be replaced by the value from the search box
  const [searchText, setSearchInput] = useState()
  const [restaurants, setRestaurants] = useState(restrolist);
   //searchText is the state variable and setSearchText is the function to update the state variable
  // useState is a hook that is used to create a state variable
  // useState has array of [variable and function to update a variable]
    return(
        <>
        <div className='Search-container'>
        <input className='search-text' type='text' placeholder='Search for Restaurants' value={searchText} onChange={(e) => setSearchInput(e.target.value)}/>
        <button className='search-button' type='submit'onClick={()=>{
          const Data = filterdata(restaurants, searchText)
          setRestaurants(Data)
        }}>Search</button>
        </div>
      <div className='Restuarant-list'>
        {restaurants.map((restaurant) => {
          return <RestuarantCard {...restaurant?.data} key={restaurant?.data?.id}/>})
        }
        
      </div>
      </>
    )
}

export default Body;