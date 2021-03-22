import React from 'react'

export function MainButton({color}){
    return (
        <div className='btn-wrapper'>
            <div className={`btn ${color}`}><div>BOOK A TABLE</div></div>
        </div>
    )
}

