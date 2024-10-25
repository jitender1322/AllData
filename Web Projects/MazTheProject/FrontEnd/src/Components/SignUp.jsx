import React from 'react'

export default function SignUp() {
    return (
        <>
            <div className='h-[500px]' >
                <div className='w-full h-[130px] bg-bgColor2' ></div>
                <div className='w-full bg-white h-full relative font-inter  flex justify-center'>
                    <div className='w-6/12 h-[550px] absolute -top-16 rounded-3xl bg-white shadow-xl' >
                        <h2 className='font-bold text-3xl text-center pt-7' >Sign Up</h2>
                        <p className='text-center text-sm py-3 text-textColor' >Welcome to our blog magazine Community</p>
                        <div className='flex flex-col w-6/12 m-auto gap-3 text-sm mt-12 '>
                            <button className='bg-Color py-2 px-5 rounded-xl relative' > <i className="fa-brands fa-facebook text-blue-700 absolute left-3 top-[5px] text-lg" ></i>  Continue with Facebook</button>
                            <button className='bg-Color py-2 px-5 rounded-xl relative' > <i className="fa-brands fa-google text-black absolute left-3 top-[5px] text-lg"></i> Continue with Google</button>
                            <button className='bg-Color py-2 px-5 rounded-xl relative' > <i className="fa-brands fa-twitter text-blue-500 absolute left-3 top-[5px] text-lg"></i> Continue with Twitter</button>
                            <p className='text-center text-textColor mt-5 text-sm font-medium' >OR</p>
                            <div className='flex flex-col' >
                                <label className='text-[12px]' >Email</label>
                                <input type="text" placeholder='you@example.com' className='outline-none border border-green-200 rounded-xl mt-1 p-1 pl-2' />
                                <label className='text-[12px]'>Password</label>
                                <input type="password" placeholder='****' className='outline-none border border-green-200 rounded-xl mt-1 p-1 pl-2' />
                            </div>
                            <button className='bg-bgColor text-white py-2 px-5 rounded-xl' > Continue</button>
                        </div>
                        <p className='text-center m-2 text-sm'><a href="">Existing user? <span className='text-bgColor'>Log In</span></a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
