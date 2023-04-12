import React from 'react'

export default function Meme() {
function getMeme() {
    console.log('hello');
}
    return (
        <main>
            <div className='form'>
                <button className='form--button' onClick={getMeme}>Generate a New Meme</button>
                <input type="text" placeholder='Top Text' id='top-text' />
                <input type="text" placeholder='Bottom Text' id='bottom-text' />
            </div>
        </main>
    )
}