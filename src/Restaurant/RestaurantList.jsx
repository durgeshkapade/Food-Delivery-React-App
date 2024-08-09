import RestaurantCard from '../components/RestaurantCard';
import { useEffect, useState } from 'react';
import ShimmerRestaurantList from './ShimmerRestaurantList';

// TOP Restaurant ----------------------------------

export default function RestaurantList() {

    const [restaurantList, setRestaurantList] = useState([]);

    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(() => {
        // setRestaurantList(rests)
        if (restaurantList.length == 0) {
            getRestaurantList();
            console.log('effect rendered');
        }
    }, [restaurantList]);




    async function getRestaurantList() {
        const uri = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const response = await fetch(uri);
        const json = await response.json();
        console.log(json);   

        setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        // console.log(restaurantList);
    }





    // console.log(restaurantList);

    return restaurantList < 1 ? (
        <>
            <h1 className='text-2xl mt-7 font-bold'>Top Restaurants</h1 >

            <ShimmerRestaurantList />
        </>
    ) : (
        <>
            <h1 className='text-2xl mt-7 font-bold'>Top Restaurants</h1 >


            <div className='restaurant-list flex my-[1%] overflow-x-scroll gap-[2.46%]' id='style-1'>

                {restaurantList.map((restaurant, index) => {
                    return <RestaurantCard resData={restaurant} key={index + 34} />;
                })}
            </div>
        </>
    );

}