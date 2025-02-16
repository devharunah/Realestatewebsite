const Login = () =>{
    return(
        <div className="mt-20" >
            <div className="flex justify-center items-center "  >
                    <h1 style={{fontFamily:"lato"}} className="text-xl font-bold" >Login</h1>
            </div>  
            <div  className="flex justify-center  items-center" >
                <div className="shadow-lg px-10 py-20" >
                    <form action="POST">
                    <div className="flex flex-col mt-6 "  >
                        <input className=" py-2 border-b-2  border-b-blue-500 px-10" type="text" placeholder="Email..." />
                        </div>
                        <div className="flex flex-col mt-10 "  >
                        <input className=" py-2 border-b-2  border-b-blue-500 px-10" type="text" placeholder="Password..." />
                        </div>
                        <div className="flex flex-col mt-10 "  >
                        <input value={"Send"} className="bg-blue-500 cursor-pointer py-1 px-6 text-white border-0 outline-0" type="submit" />
                        </div>
                        
                    </form>
                </div>
            </div>
    </div>
    )
}
export default Login