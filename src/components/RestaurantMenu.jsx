import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = ()=>{


    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    
    if(resInfo == null )  return <Shimmer/>;

    const {name ,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

    return (
        <div>
            <h1>{name}</h1>
            <h1>{costForTwoMessage}</h1>
            <h2>Menu</h2>


            <ul>
            {
                itemCards.map((item) =>(
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))
            }
            </ul>
            
        </div>
    )
}

export default RestaurantMenu;