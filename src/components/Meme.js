import React, { useState } from 'react'
import memeData from '../memeData';

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = useState(memeData);

    function getMeme() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
    }
    return (
        <main>
            <div className='form'>
                <button className='form--button' onClick={getMeme}>Generate a New Meme</button>
                <input type="text" placeholder='Top Text' id='top-text' />
                <img src={meme.randomImage} className='meme--image' />
                <input type="text" placeholder='Bottom Text' id='bottom-text' />
            </div>
        </main>
    )
}