import { useForm } from "react-hook-form"
import { useState } from "react"
const Contactus = () =>{
   const {register, handleSubmit, formState:{errors  }} = useForm()

   const [inputvalue,setinputvalue] = useState( "" )

   const handleinputchng = ()=>{
    setinputvalue(Event.target.value)
   }
    const onSubmit = (data) =>{
        console.log(data)
        if(inputvalue.trim()===""){
            window.alert("Form has been submited")
        }
    }
    { /* onSubmit function holds and stores the input fiels data
           */  }
    return(
        <div className="mt-10"  >
            <div className="bg-white pt-20 pb-20
             flex justify-center items-center  max-sm:flex-col  max-xsm:items-center " >
                    <div className="max-vsm:relative max-vsm:left-4"   >
                        <h1 style={{fontFamily:"lato"}} className="font-bold text-3xl"  >Get in touch</h1>
                        <h3 style={{fontFamily:"lato"}} className="font-semibold text-lg"  >We will love to hear from you</h3>
                        <p  className="w-96 max-vsm:w-80  " >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia
                             quasi non pariatur placeat dicta porro voluptatem consectetur, 
                            odio minima recusandae ut suscipit ipsa nemo quam nesciunt a unde doloribus!
                        </p>
                    </div>
                    <div className="ml-32 max-xsm:ml-0   "  >

                            <form onSubmit={handleSubmit(onSubmit)   } className="max-xsm:flex max-xsm:items-center max-xsm:flex-col max-xsm:justify-center " >
                                <input  className = {`bg-gray-200 px-4 py-2 ${errors.name ? '  border-2 border-red-500  ' :   'border-gray-500'  } `}   placeholder="FirstName" type="text" {...register('name', {required:true}  )} />
                                 { /* we first
                                registerd  our input field for validation\\reqiured:true,means that if input field left empty wont trigger validation error */   }

                                {errors.name && <p className="text-red-500"   >  Name is reqiured </p>    }
                                <input onChange={handleinputchng} onSubmit={handleinputchng} className= {`bg-gray-200 px-4 py-2 ml-4  max-xsm:mt-2 max-xsm:ml-0 ${ errors.name ? 'border-red-500  border-2  ':'border-gray-500'  }  `}  placeholder="LastName" type="text" {...register('lastname',{required:true})} />
                                { errors.lastname &&<p  className="text-red-500"   > Last name is required    </p>   }
                            <div className="flex justify-center items-center"  >
                            <div className="flex justify-center items-center flex-col  "  >
                            <input onChange={handleinputchng}  onSubmit={handleinputchng}   className= "py-2 px-20 bg-gray-200 mt-6"  placeholder="Eamil address" type="text" {...register('email', {required: true, pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/} )}/>
                            {errors.email &&<p  className="text-red-500"  >Valid email is required</p>   }

                            </div>
                               
                          
                               
                            </div>
                            <div className="flex justify-center items-center mt-6 max-xsm:flex-col  "  >
                            <input onChange={handleinputchng}  onSubmit={handleinputchng}  className="bg-gray-200 px-4 py-2" placeholder="Companyname" type="text" />
                            <input className="bg-gray-200 px-4 py-2 ml-4  max-xsm:ml-0 max-xsm:mt-2 "  placeholder="Position" type="text" />
                            </div>
                            <div className="flex justify-center mt-6 items-center"  >
                                <input onSubmit={handleinputchng} className="py-10 bg-gray-200 px-32"  placeholder="enter your message here......" type="text" />
                            </div>
                            <div className="flex justify-center items-center mt-6"  >
                                <input onChange={handleinputchng}  onSubmit={handleinputchng} value={'send'} className="bg-blue-500 py-1 px-10 rounded-lg text-white cursor-pointer" type="submit" />
                            </div>
                            </form>
                    </div>
            </div>
        </div>
    )
}
export default Contactus