import React from 'react'
import Button from './Button'


const Header = () => {
    return (
        <div style = {{backgroundColor: '#CDCDCD', position: 'sticky', top: 0, zIndex: 1}}>
           
            {/* Needs to be changed to the "a" tag, link to top of the page */}
            <h1 style = {{textAlign: 'center'}} >-Duncan McLean-</h1>
            

            {/* Button postioning */}
            <div style = {
                {position: 'fixed', 
                display: 'block', 
                zIndex: 1, 
                right: 60, 
                top: 15}
            }> 
            <Button
                text = "☰"
                color = "#CDCDCD"
            />
            </div>

        </div>
    )
}

export default Header