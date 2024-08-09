
import {CDN_URL} from "../utils/constants";

function stringTruncate(cuisines, num) {
    const cuisineString = cuisines.join(', ');
    if (cuisineString.length <= num) {
        return cuisineString;
    }
    return cuisineString.slice(0, num) + '...';

}

function OfferText(props) {
    return <>
        {props.resData.info.aggregatedDiscountInfoV3 ? props.resData.info.aggregatedDiscountInfoV3.header + " "+props.resData.info.aggregatedDiscountInfoV3.subHeader : ''}
    </>
}

const RestaurantCard = (props)=>{
    const {resData} = props;
    const {name,cloudinaryImageId,cuisines,locality,avgRating}  = resData?.info;
    return (
        <div className=" res-card transition-all ease-in-out duration-200 transform hover:scale-95  relative ">

            <div className="card-img shadow-xl rounded-2xl ">
                <img className="" src={ CDN_URL+cloudinaryImageId } ></img>
                <h1 className="absolute text-[#eeeeee] font-extrabold text-2xl bottom-1 left-2 z-10">
                        {OfferText(props)}
                </h1>
                
                <div className="absolute w-full  h-[50%] bottom-0 bg-gradient-to-t from-black"></div>

            </div>

            <div className="p-3 text-[16px] text-nowrap">
                <h1 className='name text-[18px]'>
                    <b>
                        {(name.length <= 30) ?
                            name : (name.slice(0, 30) + '...')}
                    </b>
                </h1>
                <p className="flex items-center gap-1 font-bold">
                    <img className="h-5 w-5 " src="https://th.bing.com/th/id/OIP.uTsZmCfnAIEyNG3OP5VB6wAAAA?rs=1&pid=ImgDetMain" alt="" />
                    {avgRating} • {props.resData?.info?.sla.slaString}
                </p>

                <div className="font-semibold opacity-65">
                    <p className='desc'>
                        {stringTruncate(cuisines, 30)}
                    </p>
                    <p className='city'>{locality}</p>
                </div>
            </div>

        </div>
    )
}

export default RestaurantCard; 
