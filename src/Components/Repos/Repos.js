import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Commits from '../Commits'

import '../Repos/Repos.scss'

class Repos extends Component {

     constructor(props) {
         super(props)
         this.state = {
            item: [],
            searchString: '',
            isVisible: false
         }
     }     
     
     render() {
         
         const { userResult } = this.props;

        return(
            <ul>
                <Router>
                    {userResult.map((e) => (
                        
                        <li key={e.id}
                            onClick={() => {
                                // props.isVisible = true
                                this.setState({ isVisible: true })
                                console.log('REPOS isVisible', this);
                            }}
                        >
                            <Link to="/commits">
                                {e.name}
                            </Link>
                        </li>
                    ))}
                </Router>
            </ul>
        )
    }
    
}
    

export default Repos;