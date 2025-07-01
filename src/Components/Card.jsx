
import "./index.css"
import marvel from "../../src/assets/marvel.jpg"
import Batches from './Batches.jsx'
import {skillsinfo} from "./data.js"

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
                
                {
                    skillsinfo.map((skillinfo,i)=>
                        <Batches skillinfo={skillinfo} key={i}/>
                    )
                }
            </div>
        </div>
    )
}

export default Card