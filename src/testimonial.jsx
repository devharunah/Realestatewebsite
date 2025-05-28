import React from "react"
import profile1 from "./images/Noprofile.jpeg"
// Noprofile.jpeg"
import { motion } from "framer-motion"
const Testimonial = () =>{
    return(
        <div className="bg-gray-50 " >
            <div className="flex justify-center items-center mt-10 rounded-lg " >
            <h1 style={{fontFamily:"lato"}} className="font-bold text-2xl" >Our Testimonials </h1>
            </div>
            <div className="flex justify-center items-center " >
            <div className="grid sm:grid-cols-2 grid-cols-0 gap-20 py-4 px-4 "  >

            <motion.div
              initial={{opacity:0,}} 
              whileInView={
                  {opacity:1,
                      transition:{duration:2},
                      scale:1,
              }}  
            className="w-lg h-96 bg-white  relative shadow rounded-lg max-xsm:w-96 max-xsm:h-auto max-vsm:w-80 " >
                    <div className="mt-4 ml-10  " >
                        <img style={{clipPath:"circle()"}} className="w-12"  src={profile1} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <p className="w-96 max-xsm:w-80 max-vsm:w-64 " >
                           From day one, they were responsive, friendly, and just... on it. I felt seen and understood,
                            which is rare in real estate. I had concerns—budget, timing, and a lot of “what ifs”—but they
                             handled each one with clarity and care. Even when things got tricky, they stayed calm and solutions-focused.
                              I’d recommend them to anyone who wants less stress and more joy in the journey.
                            Dream home secured. Sanity intact. Total win all around.
                        </p>
                    </div>
                    <div>
                        <div className="flex w-full  shadow-md rounded-xl py-2 bottom-0 absolute max-xsm:relative max-xsm:top-2 "  >
                        <div style={{clipPath:"circle()"}} className="w-12 " >
                        </div>
                        <div>
                            <h1 className="font-bold text-lg"  >Wellyn Smith</h1>
                            <p className="text-gray-500"  >12/06/2024</p>
                        </div>
                        </div>
                    </div>
            </motion.div>

            <motion.div
              initial={{opacity:0,}} 
              whileInView={
                  {opacity:1,
                      transition:{duration:2},
                      scale:1,
              }}  
            className="w-lg h-96 bg-white  relative shadow-2xl rounded-lg max-xsm:w-96 max-xsm:h-auto max-vsm:w-80  " >
                    <div className="mt-4 ml-10  " >
                        <img style={{clipPath:"circle()"}} className="w-12"  src={profile1} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <p className="w-96 max-xsm:w-80  max-vsm:w-64 " >
                           Buying a house always seemed like a stressful mystery I wasn’t ready to solve.
                            But this crew? Total pros. They simplified everything, answered all my weird late-night
                             questions, and helped me feel confident through each step. What impressed me most was their 
                             patience and transparency. I never felt rushed, just supported. And now? I’m writing this from the couch 
                           in my dream home. If you want peace of mind and results—go with them.
                        </p>
                    </div>
                    <div>
                        <div className="flex w-full  shadow-md rounded-xl py-2 bottom-0 absolute max-xsm:relative max-xsm:top-2 "  >
                        <div style={{clipPath:"circle()"}} className="w-12 " >
                        </div>
                        <div>
                            <h1 className="font-bold text-lg"  >Oluompa Peter</h1>
                            <p className="text-gray-500"  >12/04/2023</p>
                        </div>
                        </div>
                    </div>
            </motion.div>


            <motion.div
              initial={{opacity:0,}} 
              whileInView={
                  {opacity:1,
                      transition:{duration:2},
                      scale:1,
              }}  
            className="w-lg h-96 bg-white  relative shadow-2xl rounded-lg max-xsm:w-96 max-xsm:h-auto max-vsm:w-80  " >
                    <div className="mt-4 ml-10  " >
                        <img style={{clipPath:"circle()"}} className="w-12"  src={profile1} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <p className="w-96 max-xsm:w-80   max-vsm:w-64 " >
                          I was honestly overwhelmed at first, but working with this team completely changed that. 
                          They took time to listen, explained everything, and made the entire home-buying process smooth. Every step felt personal. No pressure, no confusion—just clear guidance and real support. I never thought I'd enjoy house hunting, but here we are. I’m now living in a home I
                           love, thanks to people who clearly care about getting it right. Highly recommended.
                        </p>
                    </div>
                    <div>
                        <div className="flex w-full  shadow-md rounded-xl py-2 bottom-0 absolute max-xsm:relative max-xsm:top-2 "  >
                        <div style={{clipPath:"circle()"}} className="w-12 " >
                        </div>
                        <div>
                            <h1 className="font-bold text-lg"  >Elly Anderson</h1>
                            <p className="text-gray-500"  >12/06/2024</p>
                        </div>
                        </div>
                    </div>
            </motion.div>

            <motion.div
              initial={{opacity:0,}} 
              whileInView={
                  {opacity:1,
                      transition:{duration:2},
                      scale:1,
              }}  
            className="w-lg h-96 bg-white  relative shadow-2xl rounded-lg max-xsm:w-96 max-xsm:h-auto max-vsm:w-80 " >
                    <div className="mt-4 ml-10  " >
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <p className="w-96 max-xsm:w-80  max-vsm:w-64 " >
                           Buying a house always seemed like a stressful mystery I wasn’t ready to solve. But this crew? Total pros. 
                           They simplified everything,
                            answered all my weird late-night questions, and helped me feel confident through each step.
                             What impressed me most was their patience and transparency. I never felt rushed, just supported. And now? I’m writing this from the couch in my dream home. If you want peace of mind and results—go with them.
                        </p>
                    </div>
                    <div>
                        <div className="flex w-full  shadow-md rounded-xl py-2 bottom-0 absolute max-xsm:relative max-xsm:top-2 "  >
                        <div style={{clipPath:"circle()"}} className="w-12 " >
                        </div>
                        <div>
                            <h1 className="font-bold text-lg"  >Elly Anderson</h1>
                            <p className="text-gray-500"  >12/06/2024</p>
                        </div>
                        </div>
                    </div>
            </motion.div>

            </div>
            </div>
          
    </div>
    )
}

export default Testimonial