import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { restrolist } from "./constant";
import Shimmer from "./Shimmer"
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}
// On every change of state variable the UI is updated ex: "Hotel Empire"
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [allrestaurants , setallrestaurants]= useState() // Copy of all restauranat
  const [searchText, setSearchText] = useState("");
  const [filteredrestaurants, setfilteredRestaurants] = useState([]);
 // console.log(restaurants)
 //empty dependency array => once after render
 // dependency array[SearchText]= once after every re-render + everytime my searchText Changes.
 useEffect(()=>{
  getRestaurant();
 }, []);

 async function getRestaurant(){
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
  console.log(json); 
  // Optional Chaining
  setallrestaurants(json?.data?.cards[2]?.data?.data?.cards)
  setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
}

  return (
    <>
      <div className="Search-container">
        <input
          type="text"
          className="search-text"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}></input>
        <button
          className="search-button"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allrestaurants);
            // update the state of restaurants list
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Restuarant-list">
        {filteredrestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

// Monolith Architecture and Micro Service Architecture.

// Monolith:- It was used before the micro service were introduced.
// -- it has all code work inside one project which led:
//         --Difficult to maintain, Not easy to understand , No Easy Readability
// example: notification , SMS , API all project inside one Application


// Micro Service:- Inside this Small project or Modular programming
// Seperation of Concern or Single Responsiblity
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING
// use Effect.
