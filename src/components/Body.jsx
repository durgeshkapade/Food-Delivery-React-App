import RestOnlineList from '../Restaurant/RestOnlineList';
import Explore from './Explore';
import Items from '../Restaurant/Items';
import RestaurantList from '../Restaurant/RestaurantList';
// import useOnlineStatus from "../utils/useOnlineStatus";
// import mockData from '../utils/mockData';



const Body = ()=>{
  
  


    return (
        <div div className="pt-[0px] w-[80%] flex flex-col justify-center mx-auto">

          <Items/>

          <hr />

          <RestaurantList/>

          <hr />

          <RestOnlineList/>

          <hr />

          <Explore/>
          
          <hr />

        </div>
        
    ) 

    
};

export default Body;