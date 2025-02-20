import clearbg_edited from  "./images/clearbg_edited.png"
import house1 from "./images/fancy_houses.jpg"
import house2 from "./images/Luxury_hm.jpg"
import house3 from "./images/modern_country.jpg"
import location from "./images/location-pin_10024930.png"
import meterruler from "./images/ruler_17269295.png"
import house4 from "./images/house_4.jpeg"
import { useNavigate } from "react-router-dom"
import manshions from "./images/manshions.jpeg"
import superfancy from "./images/superfancy.jpeg"
import fancy_houses from "./images/fancy_houses.jpg"
import stuning_house from "./images/stuning_house.jpeg"
import greens_house from "./images/greens_house.jpeg"
import night_home from "./images/night_home.jpeg"


const Morehouses = ()  =>{
    const naviagate = useNavigate()
    const gobackhome = () =>{
        naviagate('/')
    }
    return(
        <div>
            <div  className="w-full relative h-96" style={{
                backgroundImage:`url(${clearbg_edited})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                backgroundPosition:"center"
            }}>
          
                <div style={{background:'rgba(0,0,0,0.5)'}} className= " w-full h-full top-0 bottom-0 flex justify-center  items-center absolute "  >
                    <div className="relative right-52 max-sm:right-0"  >
                        <h1 className="font-bold text-2xl text-white" >Explore our finest Homes</h1>
                        <p className="w-lg text-white  max-xsm:w-96 max-vsm:w-80 "  >Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Itaque fugiat et quas blanditiis facilis consectetur sapiente adipisci. Id earum amet, illum blanditiis 
                            laborum officia sunt neque unde est totam quos.</p>
                            <div className="flex justify-between items-center  mt-3">
                            <button className="bg-blue-500 py-1 px-4 text-white border-0 rounded-md cursor-pointer outline-0"  >
                                Continue Exploring
                            </button>
                            <button onClick={gobackhome} className="text-white border-2 border-blue-500 py-1 mr-20  rounded-md px-10 cursor-pointer max-xsm:mr-10 max-vsm:ml-2 "  >
                                Go back
                            </button>
                            </div>

                    </div>
                </div>
            </div>
            <div className="more "  >
                  <div  className="w-auto grid  pb-20 mt-10  grid-cols-3 gap-x-10  gap-y-32  grid-rows-3 max-sm:flex max-sm:flex-col max-sm:items-center  "  >
                  <div  className="w-96 h-96 ml-6 relative shadow-md max-xsm:w-80 max-xsm:h-80 ">
                                <img  className="w-full h-full  rounded-lg object-cover" src={house4} alt="" />
                                <div className="bg-blue-600 text-white absolute w-50 flex flex-col items-center justify-center top-0 left-0 h-28 rounded-lg"  >
                                <h1 className="font-bold text-2xl" >Starting Price</h1>
                                <p>$3000,000</p>
                            </div>
                                <div className="flex mt-3"  >
                                    <div className="flex justify-center items-center"  >
                                    <p className="font-semibold text-96" > Chicago,illines</p>
                                    <img className="w-8  max-xsm:hidden " src={location} alt="" />
                                    </div>
                                    <div className="flex justify-center  ml-3 items-center"  >
                                        <p className="font-semibold text-96"   >200m</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                                    </div>
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >4bed</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden" src={meterruler}  alt="" />
                                    </div>
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >3Bathrooms</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                                    </div>
                                </div>
                                
                                <div  className="flex justify-center items-center" >
                                        <button className="bg-blue-500 border-0 py-1 text-white px-4 rounded-md"  >
                                            Reserve Now
                                        </button>
                                    </div>
                            </div>
                
                            <div  className="w-96 h-96  relative shadow-md  max-xsm:w-80 max-xsm:h-80 ">
                                <img  className="w-full h-full  rounded-lg object-cover" src={house2} alt="" />
                                <div className="bg-blue-600 text-white absolute w-50 flex flex-col items-center justify-center top-0 left-0 h-28 rounded-lg"  >
                                <h1 className="font-bold text-2xl" >Starting Price</h1>
                                <p>$3000,000</p>
                            </div>
                                <div className="flex mt-3"  >
                                    <div className="flex justify-center items-center"  >
                                    <p className="font-semibold text-96" > Chicago,illines</p>
                                    <img className="w-8 max-xsm:hidden " src={location} alt="" />
                                    </div>
                                    <div className="flex justify-center  ml-3 items-center"  >
                                        <p className="font-semibold text-96"   >200m</p>
                                        <img  className="w-6 ml-1max-xsm:hidden " src={meterruler}  alt="" />
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
                                <div  className="flex justify-center items-center" >
                                        <button className="bg-blue-500 border-0 py-1 text-white px-4 rounded-md"  >
                                            Reserve Now
                                        </button>
                                    </div>
                            </div>
                            <div  className="w-96 h-96  relative shadow-md max-xsm:w-80 max-xsm:h-80  ">
                                <img  className="w-full h-full  rounded-lg object-cover" src={stuning_house} alt="" />
                                <div className="bg-blue-600 text-white absolute w-50 flex flex-col items-center justify-center top-0 left-0 h-28 rounded-lg"  >
                                <h1 className="font-bold text-2xl" >Starting Price</h1>
                                <p>$950,000 </p> 
                            </div>
                                <div className="flex mt-3"  >
                                    <div className="flex justify-center items-center"  >
                                    <p className="font-semibold text-96" > Olkahoma,Texas</p>
                                    <img className="w-8 max-xsm:hidden" src={location} alt="" />
                                    </div>
                                    <div className="flex justify-center  ml-3 items-center"  >
                                        <p className="font-semibold text-96"   >200m</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                                    </div>
                
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >4bed</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden   " src={meterruler}  alt="" />
                                    </div>
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >3Bathrooms</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden" src={meterruler}  alt="" />
                                    </div>
                                    
                                </div>
                                 
                                <div  className="flex justify-center items-center" >
                                        <button className="bg-blue-500 border-0 py-1 text-white px-4 rounded-md"  >
                                            Reserve Now
                                        </button>
                                    </div>
                            </div>
                            <div  className="w-96 h-96  ml-6 relative shadow-md max-xsm:w-80 max-xsm:h-80 ">
                                <img  className="w-full h-full  rounded-lg object-cover" src={greens_house} alt="" />
                                <div className="bg-blue-600 text-white absolute w-50 flex flex-col items-center justify-center top-0 left-0 h-28 rounded-lg"  >
                                <h1 className="font-bold text-2xl" >Starting Price</h1>
                                <p>$950,000 </p> 
                            </div>
                                <div className="flex mt-3"  >
                                    <div className="flex justify-center items-center"  >
                                    <p className="font-semibold text-96" > Olkahoma,Texas</p>
                                    <img className="w-8 max-xsm:hidden " src={location} alt="" />
                                    </div>
                                    <div className="flex justify-center  ml-3 items-center"  >
                                        <p className="font-semibold text-96"   >200m</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden " src={meterruler}  alt="" />
                                    </div>
                
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >4bed</p>
                                        <img  className="w-6 ml-1max-xsm:hidden " src={meterruler}  alt="" />
                                    </div>
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >3Bathrooms</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden" src={meterruler}  alt="" />
                                    </div>
                                    
                                </div>
                                 
                                <div  className="flex justify-center items-center" >
                                        <button className="bg-blue-500 border-0 py-1 text-white px-4 rounded-md"  >
                                            Reserve Now
                                        </button>
                                    </div>
                            </div>
                            <div  className="w-96 h-96  relative shadow-md max-xsm:w-80 max-xsm:h-80  ">
                                <img  className="w-full h-full  rounded-lg object-cover" src={house3} alt="" />
                                <div className="bg-blue-600 text-white absolute w-50 flex flex-col items-center justify-center top-0 left-0 h-28 rounded-lg"  >
                                <h1 className="font-bold text-2xl" >Starting Price</h1>
                                <p>$950,000 </p> 
                            </div>
                                <div className="flex mt-3"  >
                                    <div className="flex justify-center items-center"  >
                                    <p className="font-semibold text-96" > Olkahoma,Texas</p>
                                    <img className="w-8  max-xsm:hidden " src={location} alt="" />
                                    </div>
                                    <div className="flex justify-center  ml-3 items-center"  >
                                        <p className="font-semibold text-96"   >200m</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden" src={meterruler}  alt="" />
                                    </div>
                
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >4bed</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden" src={meterruler}  alt="" />
                                    </div>
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >3Bathrooms</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden" src={meterruler}  alt="" />
                                    </div>
                                    
                                </div>
                                 
                                <div  className="flex justify-center items-center" >
                                        <button className="bg-blue-500 border-0 py-1 text-white px-4 rounded-md"  >
                                            Reserve Now
                                        </button>
                                    </div>
                            </div>
                            <div  className="w-96 h-96  relative shadow-md max-xsm:w-80 max-xsm:h-80 ">
                                <img  className="w-full h-full  rounded-lg object-cover" src={fancy_houses} alt="" />
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
                                        <img  className="w-6 ml-1 max-xsm:hidden" src={meterruler}  alt="" />
                                    </div>
                                    
                                </div>
                                 
                                <div  className="flex justify-center items-center" >
                                        <button className="bg-blue-500 border-0 py-1 text-white px-4 rounded-md"  >
                                            Reserve Now
                                        </button>
                                    </div>
                            </div>
                            <div  className="w-96 h-96  ml-6 relative shadow-md  max-xsm:w-80 max-xsm:h-80 ">
                                <img  className="w-full h-full  rounded-lg object-cover" src={superfancy} alt="" />
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
                                        <img  className="w-6 ml-1 max-xsm:hidden  " src={meterruler}  alt="" />
                                    </div>
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >3Bathrooms</p>
                                        <img  className="w-6 ml-1max-xsm:hidden  " src={meterruler}  alt="" />
                                    </div>
                                    
                                </div>
                                 
                                <div  className="flex justify-center items-center" >
                                        <button className="bg-blue-500 border-0 py-1 text-white px-4 rounded-md"  >
                                            Reserve Now
                                        </button>
                                    </div>
                            </div>
                            <div  className="w-96 h-96  relative shadow-md  max-xsm:w-80 max-xsm:h-80 ">
                                <img  className="w-full h-full  rounded-lg object-cover" src={night_home} alt="" />
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
                                        <img  className="w-6 ml-1max-xsm:hidden  " src={meterruler}  alt="" />
                                    </div>
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >3Bathrooms</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden" src={meterruler}  alt="" />
                                    </div>
                                    
                                </div>
                                 
                                <div  className="flex justify-center items-center" >
                                        <button className="bg-blue-500 border-0 py-1 text-white px-4 rounded-md"  >
                                            Reserve Now
                                        </button>
                                    </div>
                            </div>
                            <div  className="w-96 h-96  relative shadow-md max-xsm:w-80 max-xsm:h-80  ">
                                <img  className="w-full h-full  rounded-lg object-cover" src={manshions} alt="" />
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
                                        <img  className="w-6 ml-1 max-xsm:hidden  " src={meterruler}  alt="" />
                                    </div>
                
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >4bed</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden  " src={meterruler}  alt="" />
                                    </div>
                                    <div className="flex justify-center ml-4 items-center"  >
                                        <p className="font-semibold text-96"   >3Bathrooms</p>
                                        <img  className="w-6 ml-1 max-xsm:hidden   " src={meterruler}  alt="" />
                                    </div>
                                    
                                </div>
                                 
                                <div  className="flex justify-center items-center" >
                                        <button className="bg-blue-500 border-0 py-1 text-white px-4 rounded-md"  >
                                            Reserve Now
                                        </button>
                                    </div>
                            </div>

                            
                        </div>
                       
            </div>
            <div  className="flex justify-center mt-10 pb-2  items-center" >
                            <button className="bg-blue-500 py-2 cursor-pointer px-10 border-0 outline-0 text-white"  >Contact for more</button>
                        </div>
        </div>
    
    )
}
export default Morehouses