import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
const Hammenue = () =>{
    const [isopen,setisopen] = useState(false)
    const closenavbar = () =>{
        setisopen(false)
    }
    return(
        <div>
              <div className="mr-6 w-auto  h-auto static hidden max-sm:block "  >
                      <div onClick={ ()=>{setisopen(!isopen)}} style={{borderRadius:"9999999999999px"}} className="w-6 h-1  bg-black  cursor-pointer  z-50" > </div>
                      <div onClick={ ()=>{setisopen(!isopen)}} style={{borderRadius:"9999999999999px"}} className="w-6 h-1 bg-black mb-1 mt-1 cursor-pointer bg-balck" ></div>
                      <div onClick={ ()=>{setisopen(!isopen)}} style={{borderRadius:"9999999999999px"}} className="w-6 h-1  bg-black  cursor-pointer" ></div>
                      </div>

                      <motion.div
                       initial={{opacity:0,}} 
                       whileInView={{
                        opacity:1,
                        scale:1.1,
                      
         }}
                      className={ ` ${isopen ? 'block': 'hidden'}  bg-black h-screen w-128 z-50 fixed right-0 top-0` }  >
                            <ul className="flex justify-center items-center flex-col" >
                            <li className="text-white text-xl mt-10"  > <a href="/"> Home  </a>   </li>
                            <li className="text-white text-xl  mt-10 "  > <a href="/about"> About  </a>   </li>
                            <li className="text-white text-xl mt-10  "   > <a href="/houses"> Houses  </a>   </li>
                            <li className="text-white text-xl mt-10  "   > <a href="/signup"> SignUp  </a>   </li>
                         
                            
                            </ul>
                            <div className="flex justify-center items-center relative top-20"  >
                            <button onClick={closenavbar} style={{clipPath:"circle()"}} className="text-xl border-2 p-4 border-white text-white"  > X  </button>
                            </div>
                     </motion.div>

        </div>
    )
}
export default Hammenue