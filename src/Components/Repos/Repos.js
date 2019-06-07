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
         /**
          * change state list of repositories
          * and list the result filtered
          */
         const { userResult } = this.props;

         console.log('use', userResult);
         

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