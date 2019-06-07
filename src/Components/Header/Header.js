import React from 'react';
import '../Header/Header.scss'
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <h1 className="text"><span className="text-modify">GitHub:</span><br/>
            <Link to="/">
                <img src={props.avatar} className="text__image" alt="avatar"/>
                <span className="text-name">{props.nameProfile}</span>
            </Link>
        </h1>
    )
}

export default Header;