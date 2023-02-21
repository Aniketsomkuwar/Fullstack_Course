import React from 'react'
import { Part } from './parts/Part'
export const Content = (props) => {
    const data = props.parts;


    return (
        <div>

            {data.map((x) => (
                <Part key={x} data={x} />
            ))}

        </div>
    )
}
