import React from 'react'

const Contact = () => {
    return (
        <div
        className = 'container'
        style = {{
            padding: 200,
            backgroundColor:'#88BBD6',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'
            
        }}
        >
            
        <div>Column 1</div>
        <div>Column 2</div>

        </div>
    )
}

export default Contact
// <a href='mailto:duncanmclean97@gmail.com?subject = Feedback&body = Message' 
// style = {{display: 'block'}}>
// Email
// </a>