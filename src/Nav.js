import React from 'react';
import './nav.css';

const Nav = (props) => {

    return(
        <nav>
            <div>Tic Tac Toe</div>
            <div>Score: X: <span className='x'>{props.xScore}</span> O: <span className='o'>{props.oScore}</span> </div>
        </nav>
    )
}

export default Nav