import React from 'react'
import { Context, } from '../../context/context'

const container = Object.freeze({
    flexWrap: 'wrap',
    padding: '1rem 0',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#b3d1ff',
    margin: '2rem auto',
    maxWidth: '80%',
    borderRadius: '7px',
})

export default function Signup() {

    // state
    const [usernameInput, setUsernameInput,] = React.useState('')

    const { setUsername, } = React.useContext(Context)

    return (
        <>
            <div style={container}>
                <input
                    type="text"
                    placeholder="Username"
                    value={usernameInput}
                    onChange={event => setUsernameInput(event.target.value)}
                />
                <button
                    onClick={() => {
                            setUsername(usernameInput)
                            localStorage.setItem('username', usernameInput)
                        }
                    }
                >
                    Send
                </button>
            </div>
        </>
    )
}