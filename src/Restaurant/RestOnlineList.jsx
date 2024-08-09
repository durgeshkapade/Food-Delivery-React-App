import React from 'react';
import RestaurantCard  from "../components/RestaurantCard";
import {useState ,useEffect } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";

function RestOnlineList() {

    // normal js variable 
  // const listOfRestaurants = [];

  // Local state variable --- super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText , setSearchText] = useState("");

  
  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();
    console.log(json);
    
    setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }
  
  useEffect(()=>{
    fetchData();
  },[])

  // Shammer UI   (conditional rendering)
    if(listOfRestaurants.length == 0){
      return <Shimmer/>;
    } 

    // const onlineStatus = useOnlineStatus();

    // if(onlineStatus == false ) 
    //   return(
    //     <h1>
    //       Looks like you are Offline !!! Check Your Internet Connection .....
    //     </h1>
    //   )




  return (
        <div className="body mb-7">
            <h1 className='text-2xl mt-7 font-bold'>Restaurants with online food delivery in Shirpur</h1>


              <div className="filter flex  gap-5">

                <div className="search w-30 my-10 flex items-center border border-gray-300 rounded-full overflow-hidden">
                  <input type="text" className="search-box px-4 py-2 w-full focus:outline-none" value={searchText}  placeholder="search..."
                  onChange={(e)=>{
                    setSearchText(e.target.value);

                    // if you need the search for every input (that time used this)
                    // let filterRestaurants = listOfRestaurants.filter(
                    //   (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    // )

                    // setFilteredRestaurants(filterRestaurants);

                  }               
                  }   />

                  <button className="search-btn bg-orange-500 text-white px-4 py-2"
                    onClick={()=>{
                      let filterRestaurants = listOfRestaurants.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                      )
    
                      setFilteredRestaurants(filterRestaurants);
                      
                    }}
                  >search</button>
                </div>


                
                <button
                  className="filter-btn bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full w-20 my-10  shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
                  onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                      (res) => res.info.avgRating > 4.3
                    );

                    setFilteredRestaurants(filteredList);
                  }}
                >
                  Top Rated Restaurants
                </button>

              
              </div>


              <div className='res-container flex flex-wrap gap-7  '>

                  {/* some other step to write data */}
                  {/* <RestaurantCard resname="Meghana Food" />
                  <RestaurantCard resname="UBQ by Barbeque Nation" /> */}

                  {/* <RestaurantCard resData={resList[0]}/> */}

                  {
                      filteredRestaurants.map(restaurant => 
                        <Link key={restaurant.info.id} to={'/restaurants/'+restaurant.info.id} className="resCard-link">
                          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                        </Link>
                      )
                  }
              </div>


        </div>
  )




}

export default RestOnlineList