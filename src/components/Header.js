import React, { Component, useEffect, useRef } from 'react'

const useMountEffect = func => useEffect(func, []);

const Header = () => {
    //const myRef = useRef(null);

    //const executeScroll = () => myRef.current.scrollIntoView();

    //useMountEffect(executeScroll);

    return (
        <div className = 'container' style = {{backgroundColor: '#CDCDCD'}}>
            <div className = 'homeButton'  style = {{
                textDecoration: 'none',
                color: 'black'
            }}>Duncan McLean</div>
            
            <div className = 'headerContainer' display = 'flex' flexWrap = 'nowrap' flexDirection = 'row' justifyContent = 'flex-end'  >
                <div>About </div>
                <div>Resume </div>
                <div>Contact </div>
            </div> 

        </div>
    )
}

export default Header

//https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element