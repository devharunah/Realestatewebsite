import heroimage from "./images/heroimage.png"
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
    return(
       <div className="w-full h-2xl bg-blue-100 overflow-hidden    " >
        {/* <div style={{background:"rgba(0,0,0,0.8)"}} className="fixed resp_bar  z-30 w-screen h-screen " >
        </div> */}
            <div className="naviagtion w-full h-auto mt-2 flex   justify-between"  >
                      <div className="ml-4 max-xsm:ml-2  " >
                        <h1 style={{fontFamily:'lato'}} className="text-2xl  max-xsm:text-lg " >.RealSalutions</h1>
                      </div>
                      <div className="max-sm:hidden ml-20"   >
                        <ul  className="flex justify-between" >
                        <li  className="mr-10" > <a href="#">  Home</a></li>
                        <li  className="mr-10" > <a href="/src/About.jsx">About  </a></li>
                        <li   className="mr-10" > <a href="#">Agents </a></li>
                        <li  className="mr-10"  > <a href="#">Testimonals  </a></li>
                        <li   className="mr-10" > <a href="#"> FAQs</a></li>
                        </ul>
                      </div>
                      <div>
              <input className="py-1 px-4 shadow-lg rounded-xl  max-xsm:px-2 max-xsm:ml-2  hidden max-sm:block max-vsm:px-1
             " type="text" placeholder="Search....." />
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
                }}  className="ml-4  relative right-128 "  >
                    <h1 className="text-2xl font-bold"  >Elevate Stress-Free Home Buying</h1>
                    <p className="w-xl  max-xsm:w-96  " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum praesentium minus
                         recusandae quaerat eius, facere corporis! Magnam eius iusto, alias temporibus sapiente
                         optio architecto a non aliquid vel, amet earum?</p>
                            <div className="mt-4"  >
                                <Explrbtn/>
                            </div>
                            <div className="flex justify-between mt-6"  >
                                    <div className="flex flex-col justify-center items-center" >
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