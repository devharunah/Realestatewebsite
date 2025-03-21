import Testimonimg from "./images/Noprofile.jpeg"
import profile1 from "./images/agent-2.jpg"
import { motion } from "framer-motion"
const Testimonial = () =>{
    return(
        <div className="bg-gray-50" >
            <div className="flex justify-center items-center mt-10  px-6 pt-20 pb-20 rounded-lg " >
            <h1 style={{fontFamily:"lato"}} className="font-bold text-2xl" >Our Testimonials </h1>
            </div>
            <div className="flex justify-center items-center " >
            <div className="grid grid-cols-2  gap-x-20 gap-y-10 max-sm:flex max-sm:flex-col max-sm:items-center"  >

            <motion.div
              initial={{opacity:0,}} 
              whileInView={
                  {opacity:1,
                      transition:{duration:2},
                      scale:1,
              }}  
            className="w-lg h-96 bg-white  relative shadow-2xl rounded-lg max-xsm:w-96 max-xsm:h-auto max-vsm:w-80 " >
                    <div className="mt-4 ml-10  " >
                        <img style={{clipPath:"circle()"}} className="w-12"  src={Testimonimg} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <p className="w-96 max-xsm:w-80 max-vsm:w-64 " >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Incidunt, culpa ab soluta nesciunt veniam, iusto maxime odio
                              corporis ex quaerat dolor
                             consequuntur odit a ad reiciendis consectetur rem, eveniet sed?
                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolores accusamus, debitis omnis necessitatibus eius impedit numquam quod expedita quae fugit voluptates magnam
                              hic ut quia aut quasi nam temporibus!
                        </p>
                    </div>
                    <div>
                        <div className="flex w-full  shadow-md rounded-xl py-2 bottom-0 absolute max-xsm:relative max-xsm:top-2 "  >
                        <div style={{clipPath:"circle()"}} className="w-12 " >
                            <img  style={{clipPath:"circle()"}} className="w-full" src={profile1} alt="" />
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
            className="w-lg h-96 bg-white  relative shadow-2xl rounded-lg max-xsm:w-96 max-xsm:h-auto max-vsm:w-80  " >
                    <div className="mt-4 ml-10  " >
                        <img style={{clipPath:"circle()"}} className="w-12"  src={Testimonimg} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <p className="w-96 max-xsm:w-80  max-vsm:w-64 " >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Incidunt, culpa ab soluta nesciunt veniam, iusto maxime odio
                              corporis ex quaerat dolor
                             consequuntur odit a ad reiciendis consectetur rem, eveniet sed?
                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolores accusamus, debitis omnis necessitatibus eius impedit numquam quod expedita quae fugit voluptates magnam
                              hic ut quia aut quasi nam temporibus!
                        </p>
                    </div>
                    <div>
                        <div className="flex w-full  shadow-md rounded-xl py-2 bottom-0 absolute max-xsm:relative max-xsm:top-2 "  >
                        <div style={{clipPath:"circle()"}} className="w-12 " >
                            <img  style={{clipPath:"circle()"}} className="w-full" src={profile1} alt="" />
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
            className="w-lg h-96 bg-white  relative shadow-2xl rounded-lg max-xsm:w-96 max-xsm:h-auto max-vsm:w-80  " >
                    <div className="mt-4 ml-10  " >
                        <img style={{clipPath:"circle()"}} className="w-12"  src={Testimonimg} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <p className="w-96 max-xsm:w-80   max-vsm:w-64 " >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Incidunt, culpa ab soluta nesciunt veniam, iusto maxime odio
                              corporis ex quaerat dolor
                             consequuntur odit a ad reiciendis consectetur rem, eveniet sed?
                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolores accusamus, debitis omnis necessitatibus eius impedit numquam quod expedita quae fugit voluptates magnam
                              hic ut quia aut quasi nam temporibus!
                        </p>
                    </div>
                    <div>
                        <div className="flex w-full  shadow-md rounded-xl py-2 bottom-0 absolute max-xsm:relative max-xsm:top-2 "  >
                        <div style={{clipPath:"circle()"}} className="w-12 " >
                            <img  style={{clipPath:"circle()"}} className="w-full" src={profile1} alt="" />
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
                        <img style={{clipPath:"circle()"}} className="w-12"  src={Testimonimg} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <p className="w-96 max-xsm:w-80  max-vsm:w-64 " >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Incidunt, culpa ab soluta nesciunt veniam, iusto maxime odio
                              corporis ex quaerat dolor
                             consequuntur odit a ad reiciendis consectetur rem, eveniet sed?
                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolores accusamus, debitis omnis necessitatibus eius impedit numquam quod expedita quae fugit voluptates magnam
                              hic ut quia aut quasi nam temporibus!
                        </p>
                    </div>
                    <div>
                        <div className="flex w-full  shadow-md rounded-xl py-2 bottom-0 absolute max-xsm:relative max-xsm:top-2 "  >
                        <div style={{clipPath:"circle()"}} className="w-12 " >
                            <img  style={{clipPath:"circle()"}} className="w-full" src={profile1} alt="" />
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