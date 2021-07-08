/* ***Not sure if this page will remain***  */
import React from 'react'

const Contact = () => {
    return (
        <div className = 'container' style = 
            {{ backgroundColor: 'lightsteelblue',
               textAlign: 'center',
               fontSize: 20,
               paddingTop: 30
               
               
               }}> Contact Me


            <div
            className = 'flexContainer'
            style = {{
                padding: 200,
                backgroundColor: 'lightsteelblue',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap'
                
            }}
            >
                
            <div className = 'emailColumn' style = {{fontSize: 14}}>
                Email
            </div>
            
            <div className = 'linkedColumn' style = {{fontSize: 14}}>
                LinkedIn
            </div>

            </div>
        </div>
    )
}

export default Contact
// <a href='mailto:duncanmclean97@gmail.com?subject = Feedback&body = Message' 
// style = {{display: 'block'}}>
// Email
// </a>