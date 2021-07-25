import React from 'react'
import homeGif from './images/home-gif.gif'
import './Home.css'
import Typewriter from 'typewriter-effect'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { useLocation } from 'react-router-dom'


export function ChangeTitle() {
    const location = useLocation()

    if (location.hash === "#about") {
        document.title = "Arpan Neupane - About"
    }

    else if (location.pathname === "/projects") {
        document.title = "Arpan Neupane - Projects"
    }

    else if (location.pathname === "/contact") {
        document.title = "Arpan Neupane - Contact"
    }

    else {
        document.title = "Arpan Neupane"
    }
}


function Home() {
    ChangeTitle()

    // Strings for typewriter effect
    const strings = ['software development.', 'web development.', 'content creation.', 'business.', 'creating things.'];

    return (
        <div className="font-sans antialiased relative bg-white">
            <section id="home">
                <div className="flex lg:flex-row flex-col justify-evenly items-center lg:px-32 px-8 pt-40">
                    <Bounce left cascade>
                        <div className="intro-header lg:text-left text-center">
                            <p className="lg:text-3xl md:text-2xl text-xl font-medium">Hi! I am</p>
                            <p className="lg:text-4xl md:text-3xl text-2xl font-bold tracking-wide">ARPAN NEUPANE.</p>
                            <p className="lg:text-xl md:text-lg text-base mt-2 font-light">I'm a programmer with a passion for <Typewriter options={{ strings: strings, autoStart: true, loop: true }} /></p>
                        </div>
                    </Bounce>
                    <div className="gif">
                        <img src={homeGif} alt='programmer-gif' width="500" />
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="flex md:flex-row flex-col justify-between lg:px-16 px-6 pt-36 md:pb-24 sm:pb-28 pb-36">
                    <Fade top cascade>
                        <div className='p-4 md:w-1/2 w-1/1 md:mx-4 md:mb-0 mb-4'>
                            <p className='about-header md:text-3xl text-2xl mb-2 font-medium'>About Me</p>
                            <p className='about-info md:text-lg text-base tracking-wider leading-relaxed'>Hello there! My name is Arpan Neupane and I am a 13 year old programmer. I enjoy creating apps and websites that can help people, make life easier, and make it fun. </p><br></br>
                            <p className='about-info md:text-lg text-base tracking-wider leading-relaxed'>In my free time, I also create content surrounding technology and programming. I make tutorials, best practices, and also give advice on how to use tools better. I'm also a contributor at <a href="https://themorningnews.com" target="__blank">TheMorningNews</a>.</p>
                        </div>
                    </Fade>
                    <Fade top cascade>
                        <div className='p-4 md:w-1/2 w-1/1 md:mx-4'>
                            <p className='about-header md:text-3xl text-2xl mb-2 font-medium'>Skills</p>
                            <div className='lang-and-fw flex flex-col'>

                                {/* LANGUAGES */}
                                <div className='languages mb-4'>
                                    <p className='md:text-2xl text-xl mb-2'>Languages</p>
                                    {/* PROFICIENT ROW */}
                                    <div className="proficient-row flex flex-wrap mb-1">
                                        <div className="p-1 proficient rounded-lg m-1">
                                            <p className='text-lg'>Python</p>
                                        </div>
                                        <div className="p-1 proficient rounded-lg m-1">
                                            <p className='text-lg'>JavaScript</p>
                                        </div>
                                        <div className="p-1 proficient rounded-lg m-1">
                                            <p className='text-lg'>HTML/CSS</p>
                                        </div>
                                    </div>

                                    {/* INTERMEDIATE ROW */}
                                    <div className="intermediate-row flex flex-wrap mb-1">
                                        <div className="p-1 intermediate rounded-lg m-1">
                                            <p className='text-lg'>SQL</p>
                                        </div>
                                    </div>
                                </div>

                                {/* FRAMEWORKS/LIBRARIES */}
                                <div className='frameworks'>
                                    <p className='md:text-2xl text-xl mb-2'>Frameworks/Libraries</p>
                                    {/* PROFICIENT ROW */}
                                    <div className="proficient-row flex flex-wrap mb-1">
                                        <div className="p-1 proficient rounded-lg m-1">
                                            <p className='text-lg'>Flask</p>
                                        </div>
                                        <div className="p-1 proficient rounded-lg m-1">
                                            <p className='text-lg'>React</p>
                                        </div>
                                        <div className="p-1 proficient rounded-lg m-1">
                                            <p className='text-lg'>UIkit</p>
                                        </div>
                                        <div className="p-1 proficient rounded-lg m-1">
                                            <p className='text-lg'>Pygame</p>
                                        </div>
                                    </div>

                                    {/* INTERMEDIATE ROW */}
                                    <div className="intermediate-row flex flex-wrap mb-1">
                                        <div className="p-1 intermediate rounded-lg m-1">
                                            <p className='text-lg'>React Native</p>
                                        </div>
                                        <div className="p-1 intermediate rounded-lg m-1">
                                            <p className='text-lg'>Tailwind</p>
                                        </div>
                                        <div className="p-1 intermediate rounded-lg m-1">
                                            <p className='text-lg'>Node</p>
                                        </div>
                                    </div>

                                    {/* BEGINNER ROW */}
                                    <div className="beginner-row flex flex-wrap">
                                        <div className="p-1 beginner rounded-lg m-1">
                                            <p className='text-lg'>Tkinter</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
            <div className="ending-msg font-light text-center p-6 absolute bottom-0 left-0 right-0 flex flex-col">
                <p>Created with ❤️ by Arpan Neupane.</p>
                <p>© 2021 Arpan Neupane. All rights reserved.</p>
            </div>
        </div >
    )
}

export default Home
