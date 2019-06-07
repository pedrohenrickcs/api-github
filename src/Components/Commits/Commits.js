import React, { Component } from 'react';
import axios from 'axios';
import './Commits.scss';

class Commits extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        let BASE_URL = `https://api.github.com/repos/pedrohenrickcs`;

        axios.get(`${BASE_URL}/${this.props.match.params.repo}/commits`)
            .then(commit => {
                this.setState({
                    loading: false,
                    data: commit.data.slice(0, 20)
                });
            })
            .catch(err => console.log('error'))
    }

    render() {
        
        return (
            <>
                {this.state.loading ? <h2 className="search__empty">Carregando... <span aria-label="carregando" role="img">⏳</span></h2> : (
                    <div>
                        <h1>Commits do repositório: <strong>{this.props.match.params.repo}</strong></h1>
                        <ul className="commits">
                            {this.state.data.map((e, index) => (

                                <li key={e.sha}>
                                    {e.committer && e.committer.login && <><small>@{e.committer.login}:</small><br /></>}
                                    {e.commit.message}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </>
                
        )
    }
}

export default Commits;