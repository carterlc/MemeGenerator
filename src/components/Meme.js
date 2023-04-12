import React from 'react'

export default function Meme() {
    return (
        <main>
            <form className='form'>
                <button className='form--button'>Generate a New Meme</button>
                <input type="text" placeholder='Top Text' id='top-text' />
                <input type="text" placeholder='Bottom Text' id='bottom-text' />
            </form>
        </main>
    )
}