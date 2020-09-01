import React from 'react'

export default function Comments() {

    const [comment, setComment,] = React.useState('')
    const [comments, setComments,] = React.useState([])



    return (
        <>
            <div style={{
                justifyContent: 'center',
                display: 'flex',
                padding: '1rem',
                margin: '1rem',
            }}>
                <textarea
                    onChange={e => setComment(e.target.value)}
                    value={comment}
                />
                <button
                    disabled={comment === ''}
                    onClick={() => {
                        setComments(pre => [...pre, comment])
                        setComment('')
                    }
                    }
                >
                    Send
                </button>
            </div >
            {
                comments.map(
                    singleComment => (
                        <p key={singleComment}>{singleComment}</p>
                    )
                )
            }
        </>
    )
}