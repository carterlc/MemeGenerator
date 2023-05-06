import React, { useState, useEffect } from 'react'

export default function Meme() {

    // Declare two state variables with the 'useState' hook
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = useState([]);

    // Make an API call to retrieve data from an external source with the 'useEffect' hook
    useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json()) // Convert the response from the API into JSON format
        .then(data => setAllMemes(data.data.memes)) // Set the value of the 'allMemes' state variable with the response data
    },[])

    console.log(allMemes)

    // Function to generate a new meme
    function getMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
    }

    // Function to handle changes to the top and bottom text input fields
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // Render the HTML content
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
