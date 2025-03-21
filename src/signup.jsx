import aboutus from "./images/aboutus.jpg"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useState } from "react"

const Signup = () =>{
    const {register,handleSubmit,formState:{errors  }} = useForm()

    const onSubmit  = (data) =>  {
        console.log(data)
        window.alert("Form has been submited succefully thank you")
    }

        const navigate = useNavigate()
        const gotologinpage = () =>{
            navigate('/login')
        }
            const [showpassword,setshowpassword] = useState(false);
        
    return(
        <div className="flex justify-center items-center"  >
            <div  className="flex justify-between mt-10" >
                <div     className=" h-screen  w-2xl"    >
                    <img className=" w--full w-full rounded-md object-cover   max-xsm:hidden " src={aboutus}  alt="" />
                </div>
                <div className="ml-6   px-10 bg-blue-50 pb-10 shadow-lg "  >
                <div className="flex justify-center mt-1 items-center" >
                    <h1 style={{fontFamily:"lato"}} className="text-xl font-bold"  >Sign up</h1>
                </div>
                    <form  onSubmit={handleSubmit(onSubmit)}  action="POST">
                    <div className="flex flex-col mt-6 "  >
                        <input className= {`py-2 border-b-2  border-b-blue-500 px-10 ${errors.firstname  ? 'border-red-500':'border-blue-500'    }   `}   type="text" placeholder="Firstname..." {...register('firstname',{required:true})} />
                        {errors.firstname  &&<p   className="text-red-500" >First name is needed please</p>   }
                        </div>
                        <div className="flex flex-col mt-6 "  >
                        <input className= { `py-2 border-b-2  border-b-blue-500 px-10 ${errors.lastname  ? 'border-red-500':'border-blue-500'   } `} type="text" placeholder="LastName..." {...register('lastname',{required:true})}   />
                        {errors.firstname && <p  className="text-red-500"   >Last name is needed please </p>    }
                        </div>
                        <div className="flex flex-col mt-6 "  >
                        <input className= {`py-2 border-b-2  border-b-blue-500 px-10 ${errors.email  ? 'border-red-500': 'border-blue-500' }   `} type="text" placeholder="Email..."  {...register('email',{required:true})}   />
                        { errors.email && <p  className="text-red-500" >   Email is needed please  </p>}
                        </div>
                        <div className="flex flex-col mt-6 "  >
                        < input className=" py-2 border-b-2  border-b-blue-500 px-10"      placeholder="Password..." {...register('password',{required:true, minLength:{value:8, message:'value must be 8 charcters'},
                         validate:{
                            hasUppercase: value =>/[A-Z]/.test(value) || "password must have atleast 8 charcters long",
                            hasLowercase: value => /[a-z]/.test(value) || "password must have atleaste 8 charcters",
                            hasNumber: value => /[0-9]/.test(value) || "password must have atleast one number in it",
                            hasSpecialChar: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must have at least one special character',
                         }  })} />
                         {errors.password &&  <p> </p>   }
                        </div>
                        <p  
                           onClick={()=>{   setshowpassword( !showpassword  )        }} 
                           className="text-blue-500 underline font-semibold text-center" > 
                           {showpassword}
                           Show password</p>

                        <div className="flex flex-col mt-6 "  >
                        <input value={"Send"} className="bg-blue-500 py-1 px-6 text-white cursor-pointer border-0 outline-0" type="submit" />
                      
                        </div>
                       <div className="mt-6"  >
                        <span>Already have an account   <strong  onClick={gotologinpage} className="text-blue-500 cursor-pointer" >Login in</strong> </span>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup
