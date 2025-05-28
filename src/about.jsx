import React from "react"
import Aboutimg from "./images/aboutimg.jpg"
import agent1 from "./images/agent-1.jpg"
import agent2 from "./images/harunah_dp.png"
import agent3 from "./images/agent-3.jpeg"
import { motion } from "framer-motion"

function  About() {
    function Agentslink (){
        return (
            <div className=" flex w-full items-center justify-between mt-10 max-sm:flex-col    max-sm:items-center  " >
               <div className="bg-white p-6 rounded-lg shadow-md ml-6  px-20  max-sm:px-26 text-center">
          <img
            src={agent2}
            alt="John Doe"
            className="w-24 h-24 rounded-full  mx-auto  mb-4"
          />
          <h2 className="text-2xl font-semibold">Kakooza Harunah</h2>
          <p className="text-gray-600">
          Sales Agent & Tech Support Engineer
          </p>
          <div className="mt-4">
            <a 
              href={"https://www.instagram.com/dev_harunah/"}
              target="_blank"
              className="text-blue-600 hover:underline"
              >Instagram</a
            >
            |
            <a
              href="https://www.linkedin.com/in/kakooza-harunah-701882350/?originalSubdomain=ug"
              target="_blank"
              className="text-blue-600 hover:underline"
              >LinkedIn</a
            >
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md  px-30  text-center  max-sm:px-36 max-sm:mt-6 " >
          <img
            src={agent1}
            alt="John Doe"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold">Mark Anderson</h2>
          <p className="text-gray-600">
          Real Estate Agent
          </p>
          <div className="mt-4">
            <a 
              href={"https://github.com/dboston528"}
              target="_blank"
              className="text-blue-600 hover:underline"
              >Whatsapp</a
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
        <div className="bg-white p-6 rounded-lg shadow-md  px-30 mr-6  max-sm:px-36 max-sm:mt-10  text-center">
          <img
            src={agent3}
            alt="John Doe"
            className="w-24 h-24 rounded-full mx-auto mb-4  "
          />
          <h2 className="text-2xl font-semibold">Micehlle Parker </h2>
          <p className="text-gray-600">
          Real Estate Agent
          </p>
          <div className="mt-4">
            <a 
              href={"https://github.com/dboston528"}
              target="_blank"
              className="text-blue-600 hover:underline"
              >Whatsapp</a
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

    return (
        <div  className="flex justify-center  mt-2 items-center flex-col" > 
           <div className=" grid md:grid-cols-2 grid-cols-0 bg-white py-10 px-10 rounded-xl  mt-10 justify-center  items-center" >
           <div className="relative max-w-2xl " >
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
                    
                    <h1 className="text-3xl p-5 font-semibold"  >Passionate about finding  your dream home</h1>
                    <p className="p-5" >
                     We don’t just search—we obsess (in a healthy, non-creepy way) over every
                      detail to make sure your next home isn’t just a house, but the house. The one where your mornings start with sunlight pouring 
                     through the perfect window, and your evenings end with the peace of knowing you chose right.
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