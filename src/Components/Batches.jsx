import React from 'react'
import "./index.css"
function Batches({ skillinfo: { skill, level, color } }) {
    return (
        <>
            <div className='skilldiv'
                style={{ background: color }}>
                {skill} 
                {level === "advance" ? "🎉" : level === "intermediator" ? "🌟" : level === "beginner" ? "👍" : "👎"}
            </div>
        </>
    )
}

export default Batches