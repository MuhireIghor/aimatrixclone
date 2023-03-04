import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPlayFill, BsArrowRight, BsTwitter, BsInstagram, BsDiscord } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdIosShare } from 'react-icons/md';
import goBack from '../assets/goback.webp';
import discord from '../assets/discord.webp'
import { aboutLinks, steps } from '../data/utils';
import Partners from './Partners';
import Mission from './Mission';
import Aboutus from './Aboutus';
import Screensize from './Screensize';

const Maincomponent = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState("Step 1");
    let [count, setCount] = useState(0);
    const handleRemove = () => {
        if (count >= 0) {
            setCount(count--);
            console.log("remove at work");
        }
    }
    const handleAdd = () => {
        setCount(count++);
        console.log("add at work")
    }

    const handleShowVideo = () => {
        setShowVideo(true);
        console.log(showVideo);
    }
    const toggleQuestion = (name) => {
        setActiveQuestion(name);
    }

    return (
        <div className='space-y-24'>
            {/* movement begun */}
            <div className='w-full flex justify-start'>
                <p className='text-linkColor text-5xl font-black pl-20'>The movement Has Begun...</p>
            </div>
            {/* video view box */}
            <div className="w-full px-4 ">
                {
                    showVideo ? (
                        <div className='w-full flex flex-col justify-center relative items-center bg-primarycolor'>
                            <video width="560" height="315" controls>
                                <source src="https://www.youtube.com/embed/Vv2In8nJuBs" type="video/mp4" />


                            </video>

                        </div>
                    ) : (
                        <div className='w-full flex flex-col justify-center relative items-center'>
                            <img src={goBack} className='w-5/6 ' />
                            <div className='w-20 h-20 rounded-full flex items-center justify-center bg-primarycolor absolute z-10 '>
                                <button onClick={() => handleShowVideo()}><BsFillPlayFill className='text-4xl text-linkColor' /></button>
                            </div>
                        </div>
                    )
                }
            </div>
            {/* red pill */}
            <div className='w-full justify-start space-y-6'>
                <p className='text-linkColor text-5xl font-black pl-20'>The Red Pill</p>
                <div className='flex px-20 flex-row-reverse '>
                    {/* sample product */}
                    <div className='basis-1/2 space-y-4'>
                        <p className='text-linkColor text-xl'>Matrix AI Movement</p>
                        <p className='text-linkColor text-2xl font-bold tracking-widest'>The Ultimate Bundle:1TB of paid Courses  Worth $200K+</p>
                        <div className='flex justify-center'>
                            <p>ratings</p>
                        </div>
                        <div className='flex justify-start gap-8'>
                            <p className='text-linkColor line-through'>271,633.15RF</p>
                            <p className='text-linkColor font-semibold'>54,315.76RF</p>
                            <button className='flex items-center justify-center text-linkColor text-sm bg-greencolor p-2 px-4 rounded-xl'>Sale</button>
                        </div>
                        <div className='justify-start space-y-4'>
                            <p className='text-linkColor'>Quantity</p>
                            <div className='flex border-2 border-linkColor w-1/6 items-center justify-between px-2  py-2'>
                                <button className='text-xl text-linkColor' onClick={handleRemove}>-</button>
                                <p className='text-xl text-linkColor'>{count}</p>
                                <button className='text-xl text-linkColor' onClick={handleAdd}>+</button>

                            </div>
                        </div>
                        <div className='space-y-4'>
                            <div className='border border-redcolor text-redcolor rounded-xl w-1/2 p-2 flex items-center justify-center shadow-md shadow-linkColor'>
                                <button>Add to cart</button>
                            </div>
                            <div className='border border-greencolor text-linkColor bg-greencolor rounded-xl w-1/2 p-2 flex items-center justify-center shadow-md shadow-linkColor'>
                                <button>Buy it now</button>
                            </div>

                        </div>
                        <div className='flex justify-between'>
                            <div className='flex text-redcolor items-baseline gap-4'>
                                <MdIosShare />
                                <p className='hover:underline decoration'>Share</p>
                            </div>
                            <div className='flex text-redcolor items-baseline gap-4'>
                                <p className='hover:underline decoration'>View full details</p>
                                <BsArrowRight />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/* discord */}
            <div className='w-full flex justify-center'>
                <div className='w-3/4 flex'>
                    <div className='basis-1/2'>
                        <img src={discord} className='w-full h-full' />
                    </div>
                    <div className='basis-1/2 space-y-8'>
                        <p className='text-linkColor font-bold text-3xl tracking-widest'>Join Our Movement and Unlock  Your Potential Today!</p>
                        <p className='tracking-widest text-linkColor text-md'>Join our free agency and get access to exclusive training and job opportunities. Our agency offers free modules and information, as well as all the necessary tools to succeed in the industry. We provide our members with a supportive community and opportunities to earn money without any upfront costs. Don't miss out on this unique chance to build a successful career - join now!</p>
                        <div className='w-1/4 bg-greencolor border border-greencolor rounded rounded-md shadow-md shadow-linkColor text-linkColor flex items-center justify-center p-2'>
                            <button>JOIN NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* matrix escape */}

            <div className='flex flex-col w-full flex flex-col justify-center items-center space-y-4'>
                <p className='text-linkColor text-sm font-medium '>THE WAY TO</p>
                <p className='font-bold text-5xl text-linkColor flex justify-center '>ESCAPE THE MATRIX</p>
                <div className='flex flex-col gap-4 items-center '>
                    {
                        steps.map((step, index) => {
                            return (
                                <div key={index} className='bg-greencolor w-1/2 p-4 h-auto space-y-4' onClick={() => toggleQuestion(step.name)}>
                                    {/* step header */}
                                    <div className={`flex justify-between ${activeQuestion === step.name && 'flex items-baseline'}`}>
                                        <p className='text-textColor text-2xl font-semibold'>{step.name}</p>
                                        {activeQuestion === step.name ? (<FaChevronUp className='text-textColor' />) : (<FaChevronDown className='text-textColor' />)}
                                    </div>
                                    {activeQuestion === step.name && (
                                        <div className='flex items-baseline'>

                                            <p className='text-xl font-bold text-textColor'>.</p>
                                            <p className='text-linkColor pl-4'>{step.description}</p>

                                        </div>
                                    )}

                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div >
    )
}

export default Maincomponent;