import React from 'react'
import Button from './Button'


const Header = () => {
    return (
        <div className = "container" style = {{backgroundColor: '#CDCDCD', position: 'sticky', top: 0, zIndex: 1, display: 'flex', flexDirection: 'row',
                                                justifyContent: 'center', flexWrap: 'wrap'}}>
           
            {/* Needs to be changed to the "a" tag, link to top of the page */}
            <h1 style = {{alignSelf: 'center' }} >-Duncan McLean-</h1>
            

            {/* Button postioning */}
            <h1 style = {
                {alignSelf: 'flex-end', position: 'fixed', zIndex: 1, right: 60, top: 0}
            }> 
            <Button
                text = "☰"
                color = "#CDCDCD"
            />
            </h1>

        </div>
    )
}

export default Header

/*
{position: 'fixed', 
                display: 'block', 
                zIndex: 1, 
                right: 60, 
                top: 15}
*/