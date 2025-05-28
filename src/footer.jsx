import React from "react"
const Footer = () =>{
    return(
        <div className="mt-10 relative " >
                <div  className="w-full h-96 bg-black px-10 py-2  justify-between flex " >
                        <div>
                            <h1 className="font-bold text-white text-lg " >Quick links</h1>
                            <ul className="text-white ">
                            <li className="mt-6"   > <a href="#">About</a> </li>
                            <li  className="mt-6" > <a href="#">Agents</a> </li>
                            <li  className="mt-6" > <a href="#">Testimonial</a> </li>
                            <li  className="mt-6" > <a href="#">Home</a> </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold text-lg text-white"  >Contacts</h1>
                            <ul className="text-white"  >
                                <li className="mt-6"  > 
                                    <p>
                                    realeste@gamil.com
                                    </p>
                                </li>
                                <li className="mt-6" >
                                <p>
                                        +256 789 5217
                                    </p>
                                </li>

                            </ul>
                        </div>
                </div>
               
        </div>
    )
}
export default Footer