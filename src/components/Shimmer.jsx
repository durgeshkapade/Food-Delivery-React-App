
const Shimmer = () => {
    const list = Array(20).fill(0);

    return (

        <>
                {/* Dummy   Search Button */}

                <h1 className='text-2xl mt-7 font-bold'>Restaurants with online food delivery in Shirpur</h1>


                <div className="filter flex  gap-5">

                    <div className="search w-30 my-10 flex items-center border border-gray-300 rounded-full overflow-hidden">
                        <input type="text" className="search-box px-4 py-2 w-full focus:outline-none"  placeholder="search..."
                        // onChange={(e)=>{
                        // setSearchText(e.target.value);

                        // if you need the search for every input (that time used this)
                        // let filterRestaurants = listOfRestaurants.filter(
                        //   (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        // )

                        // setFilteredRestaurants(filterRestaurants);

                                    
                        />

                        <button className="search-btn bg-orange-500 text-white px-4 py-2"
                        onClick={()=>{
                            // let filterRestaurants = listOfRestaurants.filter(
                            // (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            // )

                            // setFilteredRestaurants(filterRestaurants);
                            
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



                {/* ..real Shimmer UI */}

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">



                    {list.map((_, index) => (
                        <div key={index} className=" bg-white rounded-lg overflow-hidden shadow-md relative">
                            <div className="w-full h-40 bg-gray-100 shimmer-effect"></div>
                            <div className="p-4">
                                <div className="h-4 bg-gray-100 mb-2 shimmer-effect"></div>
                                <div className="h-4 bg-gray-100 mb-2 shimmer-effect"></div>
                                <div className="h-4 bg-gray-100 shimmer-effect"></div>
                            </div>
                            <div className=" h-6 w-1/3 bg-gray-100 shimmer-effect mx-4 mt-2 mb-4 rounded-md"></div>
                        </div>
                    ))}
                </div>


        </>



        // <div className="shimmer-container">

        //     {
        //         list.map((_, index) => ( 
        //             <div className="shimmer-card ">
        //                 <div className="shimmer-img"></div>
        //                 <div className="shimmer-des">
        //                     <div className="lines"></div>
        //                     <div className="lines"></div>
        //                     <div className="lines"></div>
        //                 </div>
        //                 <div className="shimmer"></div>
        //             </div>
        //         ))
        //     }

        // </div>
    )
}



export default Shimmer;