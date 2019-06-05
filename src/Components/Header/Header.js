import React from 'react';

import '../Header/Header.scss'

const Header = (props) => {
    return(
        <h1 className="text"><span className="text-modify">GitHub:</span><br/>
            <img src={props.avatar} className="text__image" alt="avatar"/>
            <span className="text-name">{props.nameProfile}</span>
        </h1>
    )
}

export default Header;