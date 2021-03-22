import React from 'react'

export function DecorationLines(){
    function getLines(){
        let content = []
        for (let i = 0; i < 6; i++) {
            content.push(
                <div className="decor-line">

                </div>
            )
        }
        return content
    }
    return (
        <div className='decoration-lines'>
            {
                getLines()
            }
        </div>
    )
}