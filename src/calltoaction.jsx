import callbg from "./images/callbg.jpg"
const Calltoaction = () =>{

    const Emailbtn =  ()  => {
        return(
            <button className="border-2 cursor-pointer border-blue-500 py-1 px-4 text-white rounded-xl"  >Email Us</button>
        )

    }
    const  Contactbtn = ()  =>{
        return(
            <button className="bg-blue-500 text-white border-0 cursor-pointer outline-0 py-1 ml-4 px-4 rounded-lg"  > Contact us  </button>
        )
    }
    
    return(
        <div className="mt-10" >   
            <div className="w-full h-96 overflow-hidden relative" >
                <img className="w-full h-full  object-cover" src={callbg} alt="" />
                <div style={{background:"rgba('0,0,0,0.1)"}}  className=" w-full h-full absolute top-0 bottom  pt-20 pb-20 "  >
                    <div  className="flex justify-center z-10 items-center flex-col" >
                        <h1 style={{fontFamily:"lato"}} className="font-bold text-white text-2xl" >Find Your Home</h1>
                        <p  className="text-white w-96 max-vsm:w-80 " >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Vel non veniam cumque earum corrupti hic tempore? Voluptates, laboriosam, enim, sint illum labore maxime repellendus
                        </p>
                        <div  className="flex mt-4" >
                                    <Emailbtn/>
                                    <Contactbtn/>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
export default Calltoaction