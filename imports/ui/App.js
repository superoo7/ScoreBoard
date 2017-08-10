import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import Footer from './Footer';

export default class App extends React.Component {
    render() {
        return(
            <div>
                    <TitleBar title={this.props.title} />
                    <div className="wrapper">
                        <PlayerList players={this.props.players}/>
                        <AddPlayer score={0}/>
                    </div>
                    <Footer />
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
};
