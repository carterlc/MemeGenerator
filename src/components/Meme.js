import React from 'react'
import memeData from '../memeData';

export default function Meme() {

function getMeme() {
    const memesArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    console.log(url)
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