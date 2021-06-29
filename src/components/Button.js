import React from 'react'
import PropTypes from 'prop-types'


const Button = ({text, color}) => {
    return (
        <button style = {
            {backgroundColor: color,
            fontSize: 30,
            border: 'none',
            cursor: 'pointer'
            

            }
        }> {text} </button>
    )
}


Button.defaultProps = {
    text: 'Default Button Text',
    color: 'red'
}


Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button

// ☰
// react js example website multi-select
