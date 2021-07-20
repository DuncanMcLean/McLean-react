import React, { useRef } from 'react'


//const useMountEffect = func => useEffect(func, []);

const Header = () => {
    const defaultPosition = useRef();
    const executeScroll = () => defaultPosition.current.scrollIntoView();
    
    //useMountEffect(executeScroll);

    return (
        <div ref={defaultPosition} className = 'container' style = {{backgroundColor: '#CDCDCD'}}>
            <div className = 'homeButton' style = {{
                textDecoration: 'none',
                color: 'black'
            }}>Duncan McLean</div>
            
            <div className = 'headerContainer' display = 'flex' flexwrap = 'nowrap' flexdirection = 'row' justifycontent = 'flex-end'  >
                <button onClick={executeScroll()}>About </button>
                <div>Resume </div>
                <div>Contact </div>
            </div> 


            <div style = {{paddingTop: 500, backgroundColor: 'black', color: 'white'}}>Test div 1</div>
            <div style = {{paddingTop: 500, backgroundColor: 'white'}}>Test div 2</div>
            <div ref = {defaultPosition} style = {{paddingTop: 500, backgroundColor: 'grey'}}>Test div 3</div>

        </div>
    )
}

export default Header

//https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element
//https://reactjs.org/docs/forwarding-refs.html