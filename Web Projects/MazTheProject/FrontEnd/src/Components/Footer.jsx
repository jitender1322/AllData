import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='flex justify-between mt-[100px] mb-16 px-10 py-[100px]  h-[400px] bg-white text-textColor text-sm font-inter' >
                <ul className='space-y-4' >
                    <li><a href=""><img src="./Logo.png" alt="" /></a></li>
                    <li><a href=""><i className="fa-brands fa-facebook text-black" ></i> Facebook</a></li>
                    <li><a href=""><i className="fa-brands fa-twitter text-black"></i> Twitter</a></li>
                    <li><a href=""> <i className="fa-brands fa-instagram text-black"></i> Instagram</a></li>
                    <li><a href=""><i className="fa-brands fa-youtube text-black"></i> Youtube</a></li>
                </ul>
                <ul className='space-y-4' >
                    <li><a href="" className='font-semibold text-black' >Use Cases</a></li>
                    <li><a href="">Abstergo Ltd.</a></li>
                    <li><a href="">Nursing Assistant</a></li>
                    <li><a href="">Medical Assistant</a></li>
                    <li><a href="">Marketing Coordinator</a></li>
                    <li><a href="">Dog Trainer</a></li>
                    <li><a href="">Web Designer</a></li>
                    <li><a href="">President of Sales</a></li>
                    <li><a href="">Medical Assistant</a></li>
                </ul>
                <ul className='space-y-4'>
                    <li><a href="" className='font-semibold text-black'>Categories</a></li>
                    <li><a href="">Algeria</a></li>
                    <li><a href="">South Africa</a></li>
                    <li><a href="">Central African Republic</a></li>
                    <li><a href="">Afghanistan</a></li>
                    <li><a href="">Viet Nam</a></li>
                    <li><a href="">Iran (Islamic Republic of)</a></li>
                    <li><a href=""></a>Pakistan</li>
                    <li><a href="">Serbia</a></li>
                </ul>
                <ul className='space-y-4'>
                    <li><a href="" className='font-semibold text-black'>Documentations</a></li>
                    <li><a href="">Dog Trainer</a></li>
                    <li><a href="">Nursing Assistant</a></li>
                    <li><a href="">Marketing Coordinator</a></li>
                    <li><a href="">President of Sales</a></li>
                    <li><a href="">Web Designer</a></li>
                    <li><a href="">Medical Assistant</a></li>
                    <li><a href="">Dog Trainer</a></li>
                    <li><a href="">President of Sales</a></li>
                </ul>
                <ul className='space-y-4'>
                    <li><a href="" className='font-semibold text-black'>Our Condition</a></li>
                    <li><a href="">Ethical Hacker</a></li>
                    <li><a href="">UI/UX Designer</a></li>
                    <li><a href="">Software Tester</a></li>
                    <li><a href="">Scrum Master</a></li>
                    <li><a href="">Project Manager</a></li>
                    <li><a href="">Team Leader</a></li>
                    <li><a href="">Software Development </a></li>
                    <li><a href="">Software Developer</a></li>
                </ul>
            </div>
        </>
    )
}
