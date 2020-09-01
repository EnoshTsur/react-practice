import React from 'react'
import Comments from '../Comments/Comments'
import { Context, } from '../../context/context'

const style = Object.freeze({
    padding: '0.5rem 0',
    textAlign: 'center',
    color: 'white',
    textShadow: '0 2px 4px darkblue',
    boxShadow: '0 5px 4px grey',
    background: 'linear-gradient(45deg, #0052cc, #1a75ff)',
})


export default function Home() {

    const { username, } = React.useContext(Context)

    return (
        <>
            <div style={style}>
                <h1>Hello {!username ? 'guest' : username} </h1>
            </div>
            <Comments />
        </>
    )
}