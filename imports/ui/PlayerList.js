import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
    renderPlayer() {

        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">
                        There is no player... Please add one
                    </p>
                </div>
            );
        } else {
           return this.props.players.map((player) => {
              return <Player key={player._id} player={player}/>;
            });
        }


    }

    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
                    {this.renderPlayer()}
                </FlipMove>
            </div>
        );
    };
}
PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}

