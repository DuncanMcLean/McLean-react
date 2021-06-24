import { dropRight } from 'lodash'
import React from 'react'
import Button from './Button'


const Header = () => {
    return (
        <div style = {{backgroundColor: "lightgrey", zIndex: -2}}>
           
            <h1 style = {{textAlign: 'center'}} >-Duncan McLean-</h1>
            
            <div style = {
                {position: 'fixed', 
                display: 'block', 
                zIndex: 1, 
                right: 60, 
                top: 32
            }}>
                
            <Button
                text = "☰"
                color = "grey"
                
                />
            </div>
        </div>
    )
}

export default Header