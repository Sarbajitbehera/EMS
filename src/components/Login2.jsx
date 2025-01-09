import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
        return (
                <>
                        <div className="flex justify-center flex-col">
                                <div className="flex justify-center mt-9 text-2xl">Login</div>


                                <div className="flex justify-center mt-8"><img src="https://kylas.io/wp-content/uploads/2024/07/Best-Lead-Management-Software-and-Tools-1.png" alt="" className="w-[230px]" /></div>
                                {/* username */}
                                <div className="flex justify-center ml-[150px] mt-5 w-[220px] border-[1px] border-black rounded-lg items-center h-9 shadow-md shadow-orange-300"><CgProfile className="mr-2" /><input type="text" placeholder="username" /></div>


                                {/* password */}
                                <div className="flex justify-center ml-[150px] mt-2 w-[220px] border-[1px] border-black rounded-lg items-center h-9 shadow-md shadow-orange-300"><RiLockPasswordFill className="mr-2" /><input type="text" placeholder="password" /></div>

                                {/* singup btn */}
                                <button className="flex justify-center ml-[210px] mt-3 border-black border-[2px] rounded-lg py-1 px-5 shadow-blue-500 shadow-md cursor-pointer hover:scale-110 transition-all">Sing In</button>
                        </div>
                </>


        )
}

export default Login