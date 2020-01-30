import React from 'react'

const Box = (props) => {
    return(
        <div 
        className={props.boxClass}
        id={props.id}
        onClick={() => props.selectBox(props.row, props.col)}>
            
        </div>
    )
}

export default Box