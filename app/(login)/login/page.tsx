'use client'
import { Sprout } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleLogin = async () => {
    //1. Chuyển url đến địa chỉ redirect từ api
    router.push('http://localhost:8000/api/v1/auth/google/login')
  }

  return (
    <div className="flex bg-[url('@/components/image/image.png')] bg-cover bg-center bg-no-repeat h-screen w-full relative">
      <div className="flex flex-grow items-center flex-col p-16 gap-6 bg-white bg-opacity-70 backdrop-blur-md absolute z-10 bottom-0 right-0 h-screen
        w-full lg:w-[640px]">
        <div className="flex flex-row gap-2 justify-center items-center font-semibold text-[48px] text-black">
          <Sprout className="w-[48px] h-[48px]"></Sprout>SmartFarm
        </div>
        <div className="font-semibold text-2xl text-black">Get started</div>
        <section id="Login choices" className="flex flex-col justify-center items-center gap-2">
          <button onClick={handleLogin} className="flex flex-row justify-center gap-4 items-center px-4 py-2 rounded-xl 
            shadow-md hover:underline">
            <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <div className="text-[20px] text-black">Login with Google</div>
          </button>
        </section>
      </div>
    </div>
  )
}