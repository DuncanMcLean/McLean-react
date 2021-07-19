import React from 'react'
import Header from './Header'


const ref = React.createRef();
const aboutRef = React.forwardRef((ref))

const About = () => {
    return (
        <div ref={aboutRef} className = 'about'
        style = {{
            padding: 200,
            backgroundColor:'#88BBD6',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'
        }}
        >
            About Page
        </div>
    )
}

export default About




