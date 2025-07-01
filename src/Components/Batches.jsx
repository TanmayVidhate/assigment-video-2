import React from 'react'
import "./index.css"
function batches(props) {
    let {name,emoji,style} = props
    return (
        <>
            <span style={style} className=''>{name} {emoji}</span>
        </>
    )
}

export default batches