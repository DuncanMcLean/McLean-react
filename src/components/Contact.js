import React from 'react'

const Contact = () => {
    return (
        <div
        className = 'container'
        style = {{
            padding: 200,
            backgroundColor: 'lightsteelblue',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'
            
        }}
        >
            
        <div className = 'emailColumn' style = {{}}>
            Email
        </div>
        
        <div className = 'linkedColumn' style = {{}}>
            LinkedIn
        </div>

        </div>
    )
}

export default Contact
// <a href='mailto:duncanmclean97@gmail.com?subject = Feedback&body = Message' 
// style = {{display: 'block'}}>
// Email
// </a>