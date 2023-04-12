import React, { useState } from 'react'
import memeData from '../memeData';

export default function Meme() {

    const [memeImage, setMemeImage] = useState('')

    function getMeme() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
        <main>
            <div className='form'>
                <button className='form--button' onClick={getMeme}>Generate a New Meme</button>
                <input type="text" placeholder='Top Text' id='top-text' />
                <img src={memeImage} className='meme--image'/>
                <input type="text" placeholder='Bottom Text' id='bottom-text' />
            </div>
        </main>
    )
}