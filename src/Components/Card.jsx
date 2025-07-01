import React from 'react'
import "./index.css"
import marvel from "../../src/assets/marvel.jpg"
import Batches from './batches'
function Card() {
    return (
        <div className='card-container'>
            <img src={marvel} alt='image-for-card' className='card-img'/>
            <div className='card-content'>
                <p className='name'>JONAS SCHMEDTMANN</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sapiente laborum, aperiam animi soluta autem dolor vitae officia molestiae nam, 
                    aliquam doloribus! Reprehenderit, voluptate eligendi quae distinctio maxime 
                    atque eveniet voluptatem 
                </p>
                <Batches 
                    name="IronMan"
                    emoji="😎"
                    style={{backgroundColor:"red",color:"white"}}
                />
                <Batches 
                    name="Hulk"
                    emoji="💪"
                    style={{backgroundColor:"green",color:"white"}}
                />
                <Batches 
                    name="Captain"
                    emoji="⚓"
                    style={{backgroundColor:"blue",color:"white"}}
                />
            </div>
        </div>
    )
}

export default Card