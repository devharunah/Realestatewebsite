import house1 from "./images/fancy_houses.jpg"
// fancy_houses.jpg"
import house2 from "./images/Luxury_hm.jpg"
// Luxury_hm.jpg"
import house3 from "./images/modern_country.jpg"
import location from "./images/location-pin_10024930.png"
import meterruler from "./images/ruler_17269295.png"


import { useNavigate } from "react-router-dom"

const Houses = () => { 
    
   const navigate = useNavigate()
   const gotomorehouses = () =>{
    navigate('/morehouses')
   }

   return(
    <div className="mt-10 bg-gray-50 shadow-sm pt-20 pb-32" >
        <div  className="w-auto flex justify-center   items-center max-md:flex-col max-md:justify-center "  >

        <div  className="w-96 h-96 relative shadow-md  max-xsm:w-80 max-xsm:h-80 ">
                <img  className="w-full h-full  rounded-lg object-cover" src={house1} alt="" />
                <div className="bg-blue-600 text-white absolute w-50 flex flex-col items-center justify-center top-0 left-0 h-28 rounded-lg"  >
                <h1 className="font-bold text-2xl" >Starting Price</h1>
                <p>$3000,000</p>
            </div>
                <div className="flex mt-3"  >
                    <div className="flex justify-center items-center"  >
                    <p className="font-semibold text-96 " > Chicago,illines</p>
                    <img className="w-8 max-xsm:w-7 max-xsm:relative max-xsm:right-1 max-xsm:hidden   " src={location} alt="" />
                    </div>
                    <div className="flex justify-center  ml-3 items-center"  >
                        <p className="font-semibold text-96"   >200m</p>
                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                    </div>

                    <div className="flex justify-center ml-4 items-center"  >
                        <p className="font-semibold text-96"   >4bed</p>
                        <img  className="w-6 ml-1 max-xsm:hidden  " src={meterruler}  alt="" />
                    </div>
                    <div className="flex justify-center ml-4 items-center"  >
                        <p className="font-semibold text-96"   >3Bathrooms</p>
                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                    </div>
                    
                </div>
            </div>

            <div  className="w-96 h-96 ml-20 relative shadow-md max-md:ml-0 max-md:mt-15 max-xsm:w-80 max-xsm:h-80  ">
                <img  className="w-full h-full  rounded-lg object-cover" src={house2} alt="" />
                <div className="bg-blue-600 text-white absolute w-50 flex flex-col items-center justify-center top-0 left-0 h-28 rounded-lg"  >
                <h1 className="font-bold text-2xl" >Starting Price</h1>
                <p>$3000,000</p>
            </div>
                <div className="flex mt-3"  >
                    <div className="flex justify-center items-center"  >
                    <p className="font-semibold text-96" > Chicago,illines</p>
                    <img className="w-8  max-xsm:hidden  " src={location} alt="" />
                    </div>
                    <div className="flex justify-center  ml-3 items-center"  >
                        <p className="font-semibold text-96"   >200m</p>
                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                    </div>

                    <div className="flex justify-center ml-4 items-center"  >
                        <p className="font-semibold text-96"   >4bed</p>
                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                    </div>
                    <div className="flex justify-center ml-4 items-center"  >
                        <p className="font-semibold text-96"   >3Bathrooms</p>
                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                    </div>
                    
                </div>
            </div>
            <div  className="w-96 h-96 ml-10 relative shadow-md  max-md:ml-0 max-md:mt-15 max-xsm:w-80 max-xsm:h-80 ">
                <img  className="w-full h-full  rounded-lg object-cover" src={house3} alt="" />
                <div className="bg-blue-600 text-white absolute w-50 flex flex-col items-center justify-center top-0 left-0 h-28 rounded-lg"  >
                <h1 className="font-bold text-2xl" >Starting Price</h1>
                <p>$950,000 </p> 
            </div>
                <div className="flex mt-3"  >
                    <div className="flex justify-center items-center"  >
                    <p className="font-semibold text-96" > Olkahoma,Texas</p>
                    <img className="w-8 max-xsm:hidden  " src={location} alt="" />
                    </div>
                    <div className="flex justify-center  ml-3 items-center"  >
                        <p className="font-semibold text-96"   >200m</p>
                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                    </div>

                    <div className="flex justify-center ml-4 items-center"  >
                        <p className="font-semibold text-96"   >4bed</p>
                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                    </div>
                    <div className="flex justify-center ml-4 items-center"  >
                        <p className="font-semibold text-96"   >3Bathrooms</p>
                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
        <div  className="flex justify-center items-center relative top-20">
            <button onClick={gotomorehouses}  className="bg-blue-500 py-1 px-4 cursor-pointer border-0 text-white outline-0"  >
                Explore more
            </button>
           </div>   
    </div>
    
)
  
}

export default Houses