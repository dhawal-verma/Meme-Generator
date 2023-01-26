import React  from "react";

export default function Meme()
{
    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes,setAllMemes] = React.useState([])

    React.useEffect(()=>
    {
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))
    },[])


    function getMemeImage()
    {
        const randomNumber = Math.floor(Math.random() * (allMemes.length))
        const url = allMemes[randomNumber].url
        setMeme(prev=>({
            ...prev,
            randomImage : url
        }))

    }    
    function handleChange(event)
    {
        const {name,value} = event.target

        setMeme(prev=>
            ({...prev,
            [name] : value
        }
        ))
    }
    return(

        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Upper text"
                    className="form--input"
                    name = "topText"
                    value = {meme.topText} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    onChange={handleChange}
                    value = {meme.bottomText}
                    className="form--input"
                    name = "bottomText" 
                />
                <button
                    className="form--button"
                    
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}