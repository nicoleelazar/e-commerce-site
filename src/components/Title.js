import React from 'react'


// 'rcc' shortcut to create class components
// 'rfc' shortcut to create function components


export default function Title({name, title}) {
    return (
        <div className="row">
            <div className="text-title">
                <h1> {name} <strong> {title} </strong> </h1>
            </div>
        </div>
    )
}
