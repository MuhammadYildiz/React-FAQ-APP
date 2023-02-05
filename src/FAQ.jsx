import React, { useState } from 'react'

export default function FAQ({ title, active, setActive }) {

    const [answer, setAnswer] = useState(true)
    const show = () => {
        setActive(title)
    }
    const close = () => {
        setActive("")
    }

    return (
        <div className='m-3 md:mx-10'>
            <div className={active !== title ? 'flex cursor-pointer items-center justify-between bg-fuchsia-900 text-white rounded-md p-2 sm:px-10 text-xl '
                : 'rounded-b-3xl flex items-center justify-between bg-fuchsia-900 text-white  p-3 text-xl '}
                onClick={show}>
                <p className={active === title ? " m-auto" : "text-left"}>{title}</p>
                <div className='text-3xl'>
                    {active !== title && <span>+</span>}
                </div>
            </div>
            {active === title ? <div className='bg-yellow-700 p-5 pb-1 text-white rounded-t-3xl flex flex-col'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, libero Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, molestias?</p>
                <span className=' bg-fuchsia-900 text-white  text-xl px-4  py-2 rounded-full  m-auto mt-2  cursor-pointer'
                onClick={close}>
                    X
                </span>
            </div> : ""}
        </div>
    )
}
