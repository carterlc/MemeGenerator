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

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className='form'>
                <button className='form--button' onClick={getMeme}>Generate a New Meme</button>
                <input type="text" placeholder='Top Text' id='top-text' name='topText' value={meme.topText} onChange={handleChange}/>
                <div className="meme">
                    <h2 className="meme--top text">{meme.topText}</h2>
                    <h2 className="meme--bottom text">{meme.bottomText}</h2>
                    <img src={meme.randomImage} className='meme--image' alt="meme"/>
                </div>
                <input type="text" placeholder='Bottom Text' id='bottom-text' name='bottomText' value={meme.bottomText} onChange={handleChange}/>
            </div>
        </main>
    )
}