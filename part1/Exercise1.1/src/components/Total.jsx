import React from 'react'

export const Total = (props) => {
    return (
        <div><p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p></div>
    )
}
