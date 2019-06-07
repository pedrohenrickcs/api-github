import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../Repos/Repos.scss'

class Repos extends Component {

     constructor(props) {
         super(props)
         this.state = {
            item: [],
            searchString: ''
         }
     }     
     
     render() {
         
         const { userResult } = this.props;

        return(
            <ul>
                {userResult.map((e) => (
                    <li key={e.id}>
                        <Link to={ `/commits/${e.name}` }>
                            {e.name}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
    
}
    

export default Repos;