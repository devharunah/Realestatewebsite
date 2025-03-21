import Aboutimg from "./images/aboutimg.jpg"
import agent1 from "./images/agent-1.jpg"
import agent2 from "./images/agent-2.jpg"
import agent3 from "./images/agent-3.jpeg"
import { motion } from "framer-motion"

function  About()  {
    function Agentslink (){
        return (
            <div className="flex justify-center items-center mt-10 max-sm:flex-col max-sm:items-center  " >
               <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={agent2}
            alt="John Doe"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold">DeAndre Boston</h2>
          <p className="text-gray-600">
            Full Stack Developer & Tech Support Engineer
          </p>
          <div className="mt-4">
            <a
              href={"https://github.com/dboston528"}
              target="_blank"
              className="text-blue-600 hover:underline"
              >GitHub</a
            >
            |
            <a
              href="https://linkedin.com/in/deandreboston"
              target="_blank"
              className="text-blue-600 hover:underline"
              >LinkedIn</a
            >
          </div>
        </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={agent2}
            alt="John Doe"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold">DeAndre Boston</h2>
          <p className="text-gray-600">
            Full Stack Developer & Tech Support Engineer
          </p>
          <div className="mt-4">
            <a
              href={"https://github.com/dboston528"}
              target="_blank"
              className="text-blue-600 hover:underline"
              >GitHub</a
            >
            |
            <a
              href="https://linkedin.com/in/deandreboston"
              target="_blank"
              className="text-blue-600 hover:underline"
              >LinkedIn</a
            >
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={agent2}
            alt="John Doe"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold">DeAndre Boston</h2>
          <p className="text-gray-600">
            Full Stack Developer & Tech Support Engineer
          </p>
          <div className="mt-4">
            <a
              href={"https://github.com/dboston528"}
              target="_blank"
              className="text-blue-600 hover:underline"
              >GitHub</a
            >
            |
            <a
              href="https://linkedin.com/in/deandreboston"
              target="_blank"
              className="text-blue-600 hover:underline"
              >LinkedIn</a
            >
          </div>
        </div>
            </div>
        )
    }
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
            <div className="mt-10  agentsdiv " >
            <h1 style={{fontFamily:"lato"}} className="font-bold text-2xl max-xsm:w-80  " >Meet our Agents behind our success</h1>
        </div>
          <Agentslink/>
       
        </div>
    )
}
export default About