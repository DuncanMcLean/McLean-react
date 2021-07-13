import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, color}) => {
    return (

        <div className = "container">

        <button type = "button" class = "button"  style = {
            {backgroundColor: color,
            fontSize: 30,
            border: 'none',
            cursor: 'pointer'}
        }> {text} </button>

        <div class="dropdown" style = {
            {position: 'absolute', listStyle: 'none', top: '100%'}}>
            <ul>
            <li>About</li>
            <li>Resume</li>
            <li>Contact</li>
            </ul>
        </div>

        </div>
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
// onClick={this.handleButtonClick}