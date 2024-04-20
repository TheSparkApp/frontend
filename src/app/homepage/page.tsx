import React from 'react'
import "./homepage.css";
import Image from 'next/image';
import { LOGO } from './LOGO';

const index = () => {
    //TODO: Muss noch viel gemacht werden, das ist mir grad nur spontan eingefallen lol
    return (
        <main className='w-full h-full absolute flex flex-col overflow-hidden'>
            {/* NAVBAR */}
            <div className='w-full h-12 max-h-12 min-h-12 p-2 bg-neutral-200 flex flex-row justify-start items-center border-b border-gray-900 border-spacing-1.5'> 
                <h1 className='text-3xl font-bold italic'>Spark</h1>
            </div>
            <div className='bg-neutral-100 w-full h-full flex flex-col items-center'>
                <div className='flex flex-row mt-10 ml-10'>
                    <h1 className='text-6xl font-bold italic'>This is </h1>
                    <div className='-translate-y-3'><LOGO width='320px' height='120px' white={false} /></div>
                </div>
                <div className='w-11/12 rounded-md flex flex-row flex-wrap justify-center items-start gap-4 select-none'>
                    <div className='border border-gray-900 border-spacing-1.5 hover:bg-neutral-100 bg-neutral-50 hover:border-2 w-64 min-h-36 rounded-md flex hover:translate-x-1 hover:-translate-y-2 hover:z-10 flex-col items-center cursor-pointer hover:shadow-lg transition-all ease-in duration-75'>
                        <h1 className='flex flex-row p-2 text-2xl font-bold'>What is SPARK?</h1>
                        <span className='text-center p-1 pt-0'>Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is </span>
                    </div>
                    <div className='border border-gray-900 border-spacing-1.5 hover:bg-neutral-100 bg-neutral-50 hover:border-2 w-64 min-h-36 rounded-md flex hover:translate-x-1 hover:-translate-y-2 hover:z-10 flex-col items-center cursor-pointer hover:shadow-lg transition-all ease-in duration-75'>
                        <h1 className='flex flex-row p-2 text-2xl font-bold'>What is SPARK?</h1>
                        <span className='text-center p-1 pt-0'>Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is </span>
                    </div>
                    <div className='border border-gray-900 border-spacing-1.5 hover:bg-neutral-100 bg-neutral-50 hover:border-2 w-64 min-h-36 rounded-md flex hover:translate-x-1 hover:-translate-y-2 hover:z-10 flex-col items-center cursor-pointer hover:shadow-lg transition-all ease-in duration-75'>
                        <h1 className='flex flex-row p-2 text-2xl font-bold'>What is SPARK?</h1>
                        <span className='text-center p-1 pt-0'>Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is </span>
                    </div>
                    <div className='border border-gray-900 border-spacing-1.5 hover:bg-neutral-100 bg-neutral-50 hover:border-2 w-64 min-h-36 rounded-md flex hover:translate-x-1 hover:-translate-y-2 hover:z-10 flex-col items-center cursor-pointer hover:shadow-lg transition-all ease-in duration-75'>
                        <h1 className='flex flex-row p-2 text-2xl font-bold'>What is SPARK?</h1>
                        <span className='text-center p-1 pt-0'>Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is </span>
                    </div>
                    <div className='border border-gray-900 border-spacing-1.5 hover:bg-neutral-100 bg-neutral-50 hover:border-2 w-64 min-h-36 rounded-md flex hover:translate-x-1 hover:-translate-y-2 hover:z-10 flex-col items-center cursor-pointer hover:shadow-lg transition-all ease-in duration-75'>
                        <h1 className='flex flex-row p-2 text-2xl font-bold'>What is SPARK?</h1>
                        <span className='text-center p-1 pt-0'>Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is </span>
                    </div>
                    <div className='border border-gray-900 border-spacing-1.5 hover:bg-neutral-100 bg-neutral-50 hover:border-2 w-64 min-h-36 rounded-md flex hover:translate-x-1 hover:-translate-y-2 hover:z-10 flex-col items-center cursor-pointer hover:shadow-lg transition-all ease-in duration-75'>
                        <h1 className='flex flex-row p-2 text-2xl font-bold'>What is SPARK?</h1>
                        <span className='text-center p-1 pt-0'>Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is Spark is </span>
                    </div>
                    
                    
                </div>
            </div>
        </main>
    )
}

export default index