import Aboutimg from "./images/aboutimg.jpg"
import agent1 from "./images/agent-1.jpg"
import agent2 from "./images/agent-2.jpg"
import agent3 from "./images/agent-3.jpeg"
import { motion } from "framer-motion"
function  About(){
    return(
        <div  className="flex justify-center  mt-2 items-center flex-col" > 

           <div className="flex bg-white shadow-lg py-10 px-10 rounded-xl  mt-10 justify-center  items-center  max-md:flex-col max-md:items-center" >
           <div className="relative w-lg ml-2 max-md:ml-0 max-xsm:w-96 max-vsm:w-80 " >
                    <img className="w-full h-full  rounded-xl   " src={Aboutimg} alt="" />
                    <div className="bg-black opacity-50 w-full h-full absolute top-0 bottom-0 right-0 rounded-xl  " >
                    </div>
                </div>
                <motion.div 
                initial={{opacity:0,}}
                whileInView={{

                   right:0,
                   opacity:1,
                }}  className="relative right-0">
                    
                    <h1 style={{fontFamily:"lato"}} className="text-3xl font-semibold ml-4 max-xsm:w-80 max-xsm:ml-24  "  >Passionate about finding  your dream home</h1>
                    <p style={{fontFamily:"roboto"}} className="w-lg mt-2 ml-4 max-xsm:w-96 max-vsm:w-80 max-vsm:ml-10 " >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate 
                        iste ducimus vero cupiditate. Doloribus, animi natus adipisci a 
                        similique quidem accusamus 
                        soluta reiciendis hic possimus officia totam deserunt voluptates perspiciatis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est beatae modi ipsam 
                        recusandae qui, velit nemo. Quasi harum possimus hic suscipit 
                        quia fugit. Labore placeat accusantium vitae deleniti velit a.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est beatae modi ipsam 
                        recusandae qui, velit nemo. Quasi harum possimus hic suscipit 
                        quia fugit. Labore placeat accusantium vitae deleniti velit a.
                        
                    </p>
                </ motion.div>
               
           </div>
            <div className="mt-10 " >
            <h1 style={{fontFamily:"lato"}} className="font-bold text-2xl max-xsm:w-80  " >Meet our Agents behind our success</h1>
        </div>

          <div className="flex justify-center items-center mt-10 max-sm:flex-col max-sm:items-center  " >
          <motion.div 
          initial={{opacity:0}}
            whileInView={{
                opacity:1,
                transition:{duration:2},
                scale:1,

            }}
            
           className="w-96 h-auto bg-white  mr-8 pb-2  shadow-xl rounded-lg  max-sm:mr-0  max-xsm:w-80 " >
                        <div className="w-full  h-64"   >
                            <img className="object-cover rounded-lg w-full h-full" src={agent1} alt="" />
                        </div>
                        <div  className="flex justify-center flex-col items-center" >
                            <h1 className="font-bold text-xl"  >ELIOT ENDERSON</h1>
                            <h3 className="font-semibold text-gray-500"  >Agent</h3>
                        </div>
                        <div className="px-10"  >
                            <p>Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Illum cum impedit nisi delectus 
                                 fugit placeat deleniti in aspernatur. Veniam blanditiis facere veritatis illo 
                                temporibus ducimus pariatur ipsa asperiores error sapiente.</p>
                        </div>
                        <div className="flex justify-center items-center mt-4  " >
                        <button className="border-0 bg-white text-blue-600 font-bold underline cursor-pointer"  >Get in touch</button>
                        </div>
                </motion.div>

                <motion.div
                 initial={{opacity:0,}} 
                 whileInView={
                     {opacity:1,
                         transition:{duration:2},
                         scale:1,
                 }}  
                className="w-96 h-auto ml-6  bg-white shadow-xl pb-2  rounded-lg max-sm:mt-10 max-sm:ml-0 max-xsm:w-80 " >
                        <div className="w-full  h-64"   >
                            <img className="object-cover rounded-lg w-full h-full" src={agent2} alt="" />
                        </div>
                        <div  className="flex justify-center flex-col items-center" >
                            <h1 className="font-bold text-xl"  >  ABUBAKA JHON </h1>
                            <h3 className="font-semibold text-gray-500"  >Bloker</h3>
                        </div>
                        <div className="px-10"  >
                            <p>Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Illum cum impedit nisi delectus 
                                 fugit placeat deleniti in aspernatur. Veniam blanditiis facere veritatis illo 
                                temporibus ducimus pariatur ipsa asperiores error sapiente.</p>
                        </div>
                        <div className="flex justify-center items-center mt-4  " >
                        <button className="border-0 bg-white text-blue-600 font-bold underline cursor-pointer"  >Get in touch</button>
                        </div>
                </motion.div>
                <motion.div  
                 initial={{opacity:0,}} 
                 whileInView={
                     {opacity:1,
                         transition:{duration:2},
                         scale:1,
                 }}     
                className="w-96 h-auto ml-10  bg-white shadow-xl   pb-2  rounded-lg max-sm:mt-10 max-xsm:w-80 max-xsm:ml-0  " >
                        <div className="w-full  h-64"   >
                            <img className="object-cover rounded-lg w-full h-full" src={agent3} alt="" />
                        </div>
                        <div  className="flex justify-center flex-col items-center" >
                            <h1 className="font-bold text-xl"  >SARAH MILES</h1>
                            <h3 className="font-semibold text-gray-500"  >Bloker</h3>
                        </div>
                        <div className="px-10"  >
                            <p>Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Illum cum impedit nisi delectus 
                                 fugit placeat deleniti in aspernatur. Veniam blanditiis facere veritatis illo 
                                temporibus ducimus pariatur ipsa asperiores error sapiente.</p>
                        </div>
                        <div className="flex justify-center items-center mt-4  " >
                        <button className="border-0 bg-white text-blue-600 font-bold underline cursor-pointer"  >Get in touch</button>
                        </div>
                </motion.div>
          </div>
        </div>
    )
}
export default About