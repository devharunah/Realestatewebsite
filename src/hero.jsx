import React from "react"
import heroimage from "./images/heroimage.png"
// heroimage.png
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Hammenue from "./hambugermnu"
    function Explrbtn(){
        return(
            <button className=" border-2 border-blue-500 py-1 px-3 rounded-md cursor-pointer "  >
            Explore more
        </button>
        )
    }
    function Searchbtn(){
        return(
            <button className="bg-blue-500 py-1 px-3 text-white rounded-sm ml-2  "   >Search Now</button>
        )
    }
    
   
function Hero(){
    
 const naviagte = useNavigate()
 const gotosignpage = () =>{
    naviagte('/signup')
 }
 const gothouses = () =>{
    naviagte('/houses')
 }
 const gotabout = () =>{
    naviagte('/About')
 }
 const goagents = () =>{
    naviagte('/About')
 }
 const gotestimonial = () =>{
    naviagte('/testimonial')
 }
    return(
       <div className="w-full h-2xl bg-blue-100 overflow-hidden    " >
        {/* <div style={{background:"rgba(0,0,0,0.8)"}} className="fixed resp_bar  z-30 w-screen h-screen " >
        </div> */}
            <div className="naviagtion w-full h-auto mt-2 flex  px-6 justify-between"  >
                      <div className="ml-4 max-xsm:ml-2  " >
                        <h1 style={{fontFamily:'lato'}} className="text-2xl  max-xsm:text-lg " >EliteStates.</h1>
                      </div>
                      <div className="max-sm:hidden w-200 ml-4"   >
                        <ul  className="flex items-center  justify-between" >
                        <li  className="mr-10" > <a href="#">  Home</a></li>
                        <li  onClick={gotabout} className="  cursor-pointer " > <a>About  </a></li>
                        <li  onClick={goagents}  className="  cursor-pointer " > <a>Agents </a></li>
                        <li  onClick={gotestimonial} className=" cursor-pointer "  > <a>Testimonals  </a></li>
                        <li   onClick={gothouses} className="  cursor-pointer  " > <a>Houses</a></li>
                        </ul>
                      </div>
                      <div>
            </div>
                      <div  className="mr-6" >
            <motion.button animate={{
           rotate: 360,
            translate:{  duration:2 }
            }} onClick={gotosignpage} className="bg-blue-500 text-white rounded-sm py-1 px-4 cursor-pointer max-xsm:px-2 max-sm:hidden " >Sign Up</motion.button>
                      </div>
                      <Hammenue/>
                      
            </div>
            <div className="flex justify-between mt-10   items-center  max-sm:flex-col max-sm:items-center" >
                <motion.div animate={{
                    position:"relative",
                    right:0,
                    transition:{duration:1}
                }}  className="relative right-128 "  >
                    <div className="p-6" >
                    <h1 className=" sm:text-5xl text-3xl text-center sm:text-left mb-4 font-bold"  >Elevate Stress-Free Home Buying</h1>
                    </div>
                    <div className="text-center p-6 sm:text-left " >   
                     <p>
                     Say goodbye to overwhelm and hello to ease. We simplify every step—from search to 
                    keys—so you can focus on the excitement, not the stress.Home, made simple.
                    </p>
                    <div className="mt-4"  >
                                <Explrbtn/>
                            </div>
                    </div>
                            
                            <div className="sm:flex hidden justify-between    px-10 mt-6"  >
                                    <div className="flex flex-col justify-center  items-center" >
                                        <h1 className="font-bold"  >+2000</h1>
                                        <p >Listed preoperties</p>
                                    </div>
                                      <div className="flex flex-col justify-center items-center"   >
                                        <h1 className="font-bold"   >+5000</h1>
                                        <p>Happy clients</p>
                                    </div>
                                      <div  className="flex flex-col justify-center items-center max-xsm:relative max-xsm:right-2  max-vsm:right-4
                                       "    >
                                        <h1 className="font-bold"  >+150</h1>
                                        <p>Awards</p>
                                    </div>
                            </div>
                </motion.div>
            <motion.div animate={{
                opacity:1,
                transition:{duration:2}
            }} className="opacity-0">
             <img className="w-7xl  " src={heroimage}alt="" />
            </motion.div>

            </div>
                <div className="bg-white w-6xl h-auto relative  bottom-3 rounded-lg left-32 py-6 px-4  shadow-black flex justify-center items-center shadow-lg max-sm:flex-col max-sm:hidden "  >
                    <div>
                    <h1 className="font-bold"  >Search for available properties</h1>
                        <div className="flex" >
                        <input  style={{fontFamily:"lato",fontWeight:"bold"}} className=" bg-gray-100 py-1 text-black  border-gray-300  px-3" type="text" placeholder="Location"/>
                        <input  style={{fontFamily:"lato",fontWeight:"bold"}} className=" bg-gray-100 py-1 text-black  ml-6 border-0  px-3" type="text" placeholder="Property type"/>
                        <input  style={{fontFamily:"lato",fontWeight:"bold"}} className=" bg-gray-100 py-1 text-black  ml-6 border-0  px-3" type="text" placeholder="Budget"/>
                        <div>
                            <Searchbtn/>
                        </div>
                        </div>
                    </div>
                </div>
       </div>
    )
}
export default Hero