import React from 'react'

const Button = ({text, color}) => {
    return (
        <button style = {{backgroundColor: 'black'}}>
            {text}
        </button>
    )
}


Button.defaultProps = {
    text: '☰',
    color: 'white'
}


Button.propTypes = {

}

export default Button

// ☰