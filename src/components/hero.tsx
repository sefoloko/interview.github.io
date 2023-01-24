import React from 'react';
import face from '../assets/images/face.svg'
import arrow from '../assets/images/arrow.svg'

export default function hero({toggle, setToggle}) {
    return (
        <div className="bg-warning d-flex flex-column justify-content-center align-items-center py-5">
            <img src={face} className="face" alt="face" />
            <h1 className='mt-2'>Front end challenge!!</h1>
            <p className='mt-2'>This is a design that you will need to code up to impress us</p>
            <button className="mt-1 btn btn-dark rounded border-radius"><img src={arrow} className="face" alt="face" /></button>
        </div>
    )
}