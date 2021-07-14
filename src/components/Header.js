import React from 'react'

const Header = () => {
    return (
        <div className = 'container'style = {{backgroundColor: '#CDCDCD'}}>
            <a className = 'homeButton' href = '#img' style = {{
                textDecoration: 'none',
                color: 'black'
            }}>Duncan McLean</a>
            
            {/* <div className = 'headerContainer' display = 'flex' flexDirection = 'row' justifyContent = 'flex-end' >
            <a>About </a>
            <a>Resume </a>
            <a>Contact </a>
            </div> */}

        </div>
    )
}

export default Header

//https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element